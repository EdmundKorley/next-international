import { isValidElement, cloneElement, ReactNode } from 'react';
import type {
  BaseLocale,
  CreateParams,
  LocaleKeys,
  LocaleValue,
  ParamsObject,
  ScopedValue,
  Scopes,
} from 'international-types';
import type { ReactParamsObject, LocaleContext, LocaleMap } from '../types';

export function createT<Locale extends BaseLocale, Scope extends Scopes<Locale> | undefined>(
  context: LocaleContext<Locale>,
  scope: Scope | undefined,
) {
  const { localeContent, fallbackLocale } = context;

  const pluralKeys = new Set(
    Object.keys(localeContent)
      .filter(key => key.includes('#'))
      .map(key => key.split('#')[0]),
  );
  const pluralRules = new Intl.PluralRules(context.locale);

  function t<Key extends LocaleKeys<Locale, Scope>, Value extends LocaleValue = ScopedValue<Locale, Scope, Key>>(
    key: Key,
    ...params: CreateParams<ParamsObject<Value>, Locale, Scope, Key, Value>
  ): string;
  function t<Key extends LocaleKeys<Locale, Scope>, Value extends LocaleValue = ScopedValue<Locale, Scope, Key>>(
    key: Key,
    ...params: CreateParams<ReactParamsObject<Value>, Locale, Scope, Key, Value>
  ): React.ReactNode;
  function t<Key extends LocaleKeys<Locale, Scope>, Value extends LocaleValue = ScopedValue<Locale, Scope, Key>>(
    key: Key,
    ...params: CreateParams<ParamsObject<Value> | ReactParamsObject<Value>, Locale, Scope, Key, Value>
  ) {
    const paramObject = params[0];
    let isPlural = false;

    if (paramObject && 'count' in paramObject && pluralKeys.has(key)) {
      key = `${key}#${pluralRules.select(paramObject.count)}` as Key;
      isPlural = true;
    }

    let value =
      (scope ? localeContent[`${scope}.${key}`] : localeContent[key]) ||
      (scope ? fallbackLocale?.[`${scope}.${key}`] : fallbackLocale?.[key]);

    if (!value && isPlural) {
      const baseKey = key.split('#')[0] as Key;
      value = (localeContent[`${baseKey}#other`] || fallbackLocale?.[`${baseKey}#other`] || key)?.toString();
    } else {
      value = (value || key)?.toString();
    }

    if (!paramObject) {
      return value;
    }

    let isString = true;

    const result = value?.split(/({[^}]*})/).map((part, index) => {
      const match = part.match(/{(.*)}/);

      if (match) {
        const param = match[1] as keyof Locale;
        const paramValue = (paramObject as LocaleMap<Locale>)[param];

        if (typeof paramValue !== 'string') isString = false;

        return isValidElement(paramValue)
          ? cloneElement(paramValue, { key: `${String(param)}-${index}` })
          : (paramValue as ReactNode);
      }

      // if there's no match - it's not a variable and just a normal string
      return part;
    });

    return isString ? result?.join('') : result;
  }

  return t;
}
