import { ActionTypes } from "../constants/action-Types";

export const setProducts = (products) =>
{
    return{
        type:ActionTypes.SET_PRODUCT,
        payload:products  
    }
}

export const selectedProducts = (product) =>
{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

export const removeSelectedProducts = (products) =>
{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload:products
    }
}