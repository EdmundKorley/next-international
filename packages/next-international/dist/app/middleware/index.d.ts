import { NextRequest, NextResponse } from 'next/server';
import { a as I18nMiddlewareConfig } from '../../types-c13390f9.js';
import 'international-types';

declare function createI18nMiddleware<Locales extends readonly string[]>(locales: Locales, defaultLocale: Locales[number], config?: I18nMiddlewareConfig): (request: NextRequest) => NextResponse<unknown>;

export { createI18nMiddleware };
