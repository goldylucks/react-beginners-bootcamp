// @flow

export const isProd = process.env.NODE_ENV === 'production'
export const ENV = isProd ? 'production' : 'development'
