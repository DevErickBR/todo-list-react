import { useReducer } from "react";

type listTodo = {
    name: string;
}

type reducerAction = {
    type: string;
    payload?: {
        name?: string;
    }
}

const initialState: listTodo[] = [];
const reducer = (state: listTodo[], action: reducerAction) => {
    switch (action.type) {
        case 'add':
            if (action.payload?.name) {
                let newState = [...state];
                newState.push({
                    name: action.payload.name
                })
                return newState;
            }
            break;
        case 'del':
            let newState = [...state];
            newState.filter(item => item.name !== action.payload?.name)
            return newState;
            break;
    }

    return state
}


export const todoList = () => {
    return useReducer(reducer, initialState)
};