import { LocaleValue, Params, BaseLocale } from 'international-types';

type LocaleContext<Locale extends BaseLocale> = {
    locale: string;
    localeContent: Locale;
    fallbackLocale?: Locale;
};
type ReactParamsObject<Value extends LocaleValue> = Record<Params<Value>[number], React.ReactNode>;
type I18nProviderConfig = {
    /**
     * The name of the Next.js layout segment param that will be used to determine the locale in a client component.
     *
     * An app directory folder hierarchy that looks like `app/[locale]/products/[category]/[subCategory]/page.tsx` would be `locale`.
     *
     * @default locale
     */
    segmentName?: string;
};
type I18nMiddlewareConfig = {
    /**
     * When a url is not prefixed with a locale, this setting determines whether the middleware should perform a *redirect* or *rewrite* to the default locale.
     *
     * **redirect**: `https://example.com/products` -> *redirect* to `https://example.com/en/products` -> client sees the locale in the url
     *
     * **rewrite**: `https://example.com/products` -> *rewrite* to `https://example.com/en/products` -> client doesn't see the locale in the url
     *
     * @default redirect
     */
    urlMappingStrategy?: 'redirect' | 'rewrite';
};

export { I18nProviderConfig as I, LocaleContext as L, ReactParamsObject as R, I18nMiddlewareConfig as a };
