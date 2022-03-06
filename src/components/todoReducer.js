
export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            
            return [ action.payload, ...state];
    
        default:
            return state;
    }

}