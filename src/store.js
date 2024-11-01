import { configureStore, createSlice } from "@reduxjs/toolkit";


const ProductSlice = createSlice({
    name:'products',
    initialState:{
        veg:[
            {name:'Tomato', price:200.0},
            {name:'Totato', price:100.8},
            { name: 'Carrot', price: 150.5 },
            { name: 'Onion', price: 120.3 },
            { name: 'Cabbage', price: 75.5 },
        ],
        nonVeg:[
            {name:'Chicken', price:200.0},
            {name:'Fish', price:100.0},
            { name: 'Prawns', price: 250.0 },
            { name: 'Mutton', price: 1000.0 },
            { name: 'Crab', price: 800.5 },
 
        ],
    },
    reducers:{ }
});
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = state.find(
                (item) => item.name === action.payload.name
            );
            if (item) {
                item.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementItem: (state, action) => { 
            const item = state.find(item => item.name === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementItem: (state, action) => {
            const itemIndex = state.findIndex((item) => item.name === action.payload);
            if (itemIndex !== -1) {
                if (state[itemIndex].quantity > 1) {
                    state[itemIndex].quantity -= 1;
                } else {
                   
                    state.splice(itemIndex, 1);
                }
            }
        },
        removeItem: (state, action) => {
            // Remove item based on name
            return state.filter((item) => item.name !== action.payload);
        },
    },
});

const store = configureStore({
    reducer: {
        products: ProductSlice.reducer,
        cart: cartSlice.reducer,
    }
});


export const { addToCart, incrementItem, decrementItem, removeItem } = cartSlice.actions;
export default store;