import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => { 
      const product=action.payload

      const exsistingItem=state.find(item=>item.id==product.id)

      if(exsistingItem){
        exsistingItem.quantity += 1;
      }
      else{
        state.push({...product,quantity:1})
      }
     },
    removeFromCart: (state, action) => { 
    
      const id=action.payload

      return state.filter(item=>item.id!==id)

        
     },
    increaseQty: (state, action) => { 

      const id=action.payload

      const item=state.find(item=>item.id==id)
      if(item){
        item.quantity+=1
      }
    },
    decreaseQty: (state, action) => { 

      const id=action.payload

      const item=state.find(item=>item.id==id)
      if(item){
        if(item.quantity>1){
          item.quantity-=1
        }
        else {
          return state.filter(item => item.id !== id);
        }
      }
     },
  }
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
