import {createStore} from 'redux';

const reducer = (state, action) => {
    if (action.type === "showDescription") {
        return {
            ...state,
            home: "hidden",
            description: "",
            skills: "hidden",
            portfolio: "hidden",
            contact: "hidden",
        }
    } else if (action.type === "showHome") {
        return {
            ...state,
            home: "",
            description: "hidden",
            skills: "hidden",
            portfolio: "hidden",
            contact: "hidden",

        }
    } else if (action.type === "showSkills") {
        return {
            ...state,
            home: "hidden",
            description: "hidden",
            skills: "",
            portfolio: "hidden",
            contact: "hidden",
        }
    } else if (action.type === "showPortfolio") {
        return {
            ...state,
            home: "hidden",
            description: "hidden",
            skills: "hidden",
            portfolio: "",
            contact: "hidden",
        }
    }  else if (action.type === "showContact") {
        return {
            ...state,
            home: "hidden",
            description: "hidden",
            skills: "hidden",
            portfolio: "hidden",
            contact: "",
        }
    } 
    return state;

}

export default createStore(reducer);