export const SET_AUTHENTICATED_USER = 'SET_AUTHENTICATED_USER'

export function setAuthenticationUser(id) {
    return {
        type: SET_AUTHENTICATED_USER,
        id,
    }
}