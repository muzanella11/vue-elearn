let TAG = 'AUTH'

/* -------------------------------------------- Mutations : Sync -------------------------------------------- */
export const AUTH_LOGIN = `${TAG}_LOGIN`
export const AUTH_LOGOUT = `${TAG}_LOGOUT`

/* -------------------------------------------- Getters : Sync -------------------------------------------- */
export const GET_AUTH_USER = `${TAG}_AUTH_USER`
export const GET_USER_TOKEN = `${TAG}_USER_TOKEN`
export const IS_AUTHENTICATED = `${TAG}_IS_AUTHENTICATED`

/* -------------------------------------------- Actions : Async -------------------------------------------- */
export const AUTH_AUTHENTICATE = `${TAG}_AUTHENTICATE`
export const AUTH_FORGOT_PASSWORD = `${TAG}_FORGOT_PASSWORD`
export const AUTH_DEAUTHENTICATE = `${TAG}_DEAUTHENTICATE`
