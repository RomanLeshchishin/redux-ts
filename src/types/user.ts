export interface userState {
    users: any[];
    loading: boolean;
    error: null | string;
}

export const initialState: userState = {
    users: [],
    loading: false,
    error: null
}

export enum userActions {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

interface fetchUsers {
    type: userActions.FETCH_USERS
}

interface fetchUsersSuccess {
    type: userActions.FETCH_USERS_SUCCESS
    payload: any[]
}

interface fetchUsersError {
    type: userActions.FETCH_USERS_ERROR
    payload: string
}

export type userAction = fetchUsers | fetchUsersSuccess | fetchUsersError
