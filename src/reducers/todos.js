import {
    CREATE_TODO,
    MARK_TODO_AS_COMPLETED,
    DELETE_TODO,
} from '../actions/todosActions';

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TODO: {
        const newTodo = {
            text: payload.text,
            isCompleted: false,
        };
        return state.concat(newTodo);
    }
    case MARK_TODO_AS_COMPLETED: {
        const { text } = payload;
        return state.map(todo => todo.text === text
            ? { ...todo, isCompleted: true }
            : todo);
    }
    case DELETE_TODO: {
        const { text } = payload;
        return state.filter(todo => todo.text !== text);
    }
    default:
        return state;
    }
}