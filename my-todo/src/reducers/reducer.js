

export const initialTodos = { todos: [{
    item: 'Learn about reducers',
    completed: false,
    id: 1
}]
}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_TODO':
            return {
                ...state, 
                completed: !state.completed
            };
    
    default: 
    return state;
    };
}
