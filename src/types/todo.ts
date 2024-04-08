export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = ' SET_TODO_PAGE'
}

interface fetchTodosAction {
    type: TodoActionTypes.FETCH_TODOS
}

interface fetchTodosSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[];
}

interface fetchTodosErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}

interface setTodoPageAction {
    type: TodoActionTypes.SET_TODO_PAGE;
    payload: number;
}

export type TodoAction = fetchTodosAction | fetchTodosSuccessAction | fetchTodosErrorAction | setTodoPageAction
