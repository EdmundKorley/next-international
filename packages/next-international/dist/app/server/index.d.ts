import * as react from 'react';
import { R as ReactParamsObject } from '../../types-c13390f9.js';
import * as international_types from 'international-types';
import { ImportedLocales, ExplicitLocales, GetLocaleType, FlattenLocale } from 'international-types';

declare function createI18nServer<Locales extends ImportedLocales, OtherLocales extends ExplicitLocales | null = null>(locales: Locales): {
    getI18n: () => Promise<{
        <Key extends Extract<keyof ((OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>), string> extends infer T ? T extends Extract<keyof ((OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>), string> ? T extends `${infer Head}#zero` | `${infer Head}#one` | `${infer Head}#two` | `${infer Head}#few` | `${infer Head}#many` | `${infer Head}#other` ? Head : T : never : never, Value extends international_types.LocaleValue = ((`${Key}#zero` | `${Key}#one` | `${Key}#two` | `${Key}#few` | `${Key}#many` | `${Key}#other`) & keyof ((OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>) extends never ? false : true) extends true ? ((OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>)[`${Key}#zero` | `${Key}#one` | `${Key}#two` | `${Key}#few` | `${Key}#many` | `${Key}#other`] : ((OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>)[Key]>(key: Key, ...params: international_types.CreateParams<international_types.ParamsObject<Value>, (OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>, undefined, Key, Value>): string;
        <Key_1 extends Extract<keyof ((OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>), string> extends infer T ? T extends Extract<keyof ((OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>), string> ? T extends `${infer Head}#zero` | `${infer Head}#one` | `${infer Head}#two` | `${infer Head}#few` | `${infer Head}#many` | `${infer Head}#other` ? Head : T : never : never, Value_1 extends international_types.LocaleValue = ((`${Key_1}#zero` | `${Key_1}#one` | `${Key_1}#two` | `${Key_1}#few` | `${Key_1}#many` | `${Key_1}#other`) & keyof ((OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>) extends never ? false : true) extends true ? ((OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>)[`${Key_1}#zero` | `${Key_1}#one` | `${Key_1}#two` | `${Key_1}#few` | `${Key_1}#many` | `${Key_1}#other`] : ((OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>)[Key_1]>(key: Key_1, ...params: international_types.CreateParams<ReactParamsObject<Value_1>, (OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>, undefined, Key_1, Value_1>): react.ReactNode;
    }>;
    getScopedI18n: <Scope extends international_types.Scopes<(OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>>>(scope: Scope) => Promise<{
        <Key_2 extends international_types.LocaleKeys<(OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>, Scope, Extract<keyof ((OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>), string>>, Value_2 extends international_types.LocaleValue = international_types.ScopedValue<(OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>, Scope, Key_2>>(key: Key_2, ...params: international_types.CreateParams<international_types.ParamsObject<Value_2>, (OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>, Scope, Key_2, Value_2>): string;
        <Key_3 extends international_types.LocaleKeys<(OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>, Scope, Extract<keyof ((OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>), string>>, Value_3 extends international_types.LocaleValue = international_types.ScopedValue<(OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>, Scope, Key_3>>(key: Key_3, ...params: international_types.CreateParams<ReactParamsObject<Value_3>, (OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>) extends Record<string, string> ? OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales> : FlattenLocale<OtherLocales extends ExplicitLocales ? GetLocaleType<OtherLocales> : GetLocaleType<Locales>>, Scope, Key_3, Value_3>): react.ReactNode;
    }>;
    getCurrentLocale: () => OtherLocales extends ExplicitLocales ? keyof OtherLocales : keyof Locales;
    getStaticParams: () => {
        locale: string;
    }[];
};

export { createI18nServer };
