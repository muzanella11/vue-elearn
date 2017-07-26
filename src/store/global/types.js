let TAG = `GLOBAL` // TAG MUST BE UNIQUE ACCROSS PROJECT

// Sync: Used for `mutations`
export const SET_SERVER_STATE = `${TAG}_SET_SERVER_STATE`
export const SET_LAST_REQUEST = `${TAG}_SET_LAST_REQUEST`

// Sync: Used for `getters`
export const GET_SERVER_STATE = `${TAG}_GET_SERVER_STATE`
export const GET_LAST_REQUEST = `${TAG}_GET_LAST_REQUEST`

// Async : used for `actions`
export const CHECK_SERVER_STATE = `${TAG}_CHECK_SERVER_STATE`
