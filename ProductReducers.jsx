import { ActionTypes } from "../constants/action-Types"

let i= {
    products:[]
}

export const productReducer = (state=i,{type,payload})=> {
    switch(type)
    {
        case ActionTypes.SET_PRODUCT :
            return {...state, products:payload}
        default:
            return state
    }
}

export const selectedProductReducer = (state={},{type,payload})=> {
    switch(type)
    {
        case ActionTypes.SELECTED_PRODUCT :
            return {...state, ...payload}
        default:
            return state
    }
}