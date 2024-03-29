import {Dispatch} from "redux";
import {userAction, userActions} from "../../types/user";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch : Dispatch<userAction>) => {
        try {
            dispatch({type: userActions.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                dispatch({type: userActions.FETCH_USERS_SUCCESS, payload: response.data})
            }, 500)
        } catch (e) {
            dispatch({
                type: userActions.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}
