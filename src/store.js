import { createStore } from 'redux';

const reducer = (state, action) => {
    if (action.type === "setPageInfo") {
        return {
            ...state,
            pageInfo: action.pageInfo
        }
    } 
    return state;

}

export default createStore(reducer);