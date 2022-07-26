import { useReducer } from "react";
import { CartContext } from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

function cartReducer(state, action){
    if(action.type === 'ADD'){  // This happens every time you add an item to the cart...
        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;  // Calculates total amount
        
        const existingCartItemIndex= state.items.findIndex( item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if(existingCartItem){   // if the chosen item already exists in the list...
            const updatedItem = {
                ...existingCartItem,    // the new item will have the same properties (name)...
                amount: existingCartItem.amount + action.item.amount    // but the amount per item will be updated!
            }

            updatedItems = [...state.items];    // a "new" array will be created with the updated amount per item
            updatedItems[existingCartItemIndex] = updatedItem // the item will be updated in the original array
        } else { // if the chosen item doesn't exists in the list...
            updatedItems = state.items.concat(action.item)  //a brand new item will be created and added to the list!
        }
        
        return{
            items: updatedItems,
            totalAmount: newTotalAmount,
        }
    }
    if (action.type === 'REMOVE'){
        
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if ( existingItem.amount === 1){  // if the item has just one unit it'll be deleted from the list
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else{ // if not, only reduce one unit
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return { items: updatedItems, totalAmount: updatedTotalAmount }
    }
    return defaultCartState;
}

export function CartProvider(props){
    const [cartState, dispatchCartAction ] = useReducer(cartReducer, defaultCartState);    // if new items are chosen the reducer will update the cart 

    function addItemToCartHandler(item){
        dispatchCartAction({type: 'ADD', item: item})
    }

    function removeItemFromCartHandler(id){
        dispatchCartAction({type: 'REMOVE', id: id});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider> 
}