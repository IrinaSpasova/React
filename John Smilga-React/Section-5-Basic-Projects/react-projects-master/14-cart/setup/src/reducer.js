const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }
    if (action.type === 'REMOVE') {
        return {
            ...state,
            cart: state.cart.filter((cartItem) =>
                cartItem.id !== action.payload)
        }
    }
    if (action.type === 'INCREASE') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount + 1 }
            }
            return cartItem
        })
        return { ...state, cart: tempCart }
    }
    if (action.type === 'DECREASE') {
        let tempCart = state.cart
            .map((cartItem) => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, amount: cartItem.amount - 1 }
                }
                return cartItem
            })
            .filter((cartItem) => cartItem.amount !== 0) // removes from cart when count reach 0 
        return { ...state, cart: tempCart }
    }
    if (action.type === 'GET_TOTALS') {
        let { total, amount } = state.cart.reduce(
            (cartTotal, cartItem) => {
                const { price, amount } = cartItem;
                const itemTotal = price * amount;


                //  how to avoint weard numbers:10:00  https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22709283#questions/16545804
                cartTotal.total += itemTotal;
                //console.log(price,amount);
                cartTotal.amount += amount;
                return cartTotal;
            }, {
            total: 0,
            amount: 0,
        });
        total = parseFloat(total.toFixed(2))
        return { ...state, total, amount }
    }
    if (action.type === 'LOADING') {
        return { ...state, loading: true }
    }
    if(action.type === 'DISPLAY_ITEMS'){
        return {...state, cart:action.payload, loading: false }
    }

    return state;
}

export default reducer;

