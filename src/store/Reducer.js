export const reducerfunction = (state, action) => {
  
  
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((f) => f.id !== action.payload.id),
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((f) => f.id !== action.payload.id),
      };

    case "QTY_CHANGE":
      return {
        ...state,
        cart: state.cart.filter((e) =>
          e.id === action.payload.id ? (e.qty = action.payload.qty) : e.qty
        ),
      };

    case "RATING_FILTER":
      return {
        ...state,
        products: state.products.filter(
          (fil) => fil.ratings === action.payload.rate
        ),
      };

    case "data":
      return { ...state, products: action.payload };
  }
};

export const filterreducer = (state2, action) => {
  console.log(state2);
  switch (action.type) {
    case "ASCENDING-DESCENDING":
      return { ...state2, sort: action.payload };

    case "INSTOCK":
      return { ...state2, byoutofstock: !state2.byoutofstock };

    case "BYDELIVERY":
      return { ...state2, byfastdelivery: !state2.byfastdelivery };

    case "CLEARFILTER":
      return {
        byfastdelivery: false,
        byoutofstock: false,
        byrating: 0,
        search: "",
        sort: "",
      };

    case "BY_RATING":
      return { ...state2, byrating: action.payload };

    case "SEARCH":
      return { ...state2, search: action.payload };

    default:
      return state2;
  }
};

export const accountfunc=(state3,action)=>{
  console.log(state3.account);
  // function updatpassfunc(e){
  //   if( e.mail==action.payload.email){
  //     e.password=action.payload.password;
  //   }
  //   else{
  //     e.password=e.password;
  //   }

  
  switch(action.type){
    case "ADD_USER":
      return{
       ...state3,account:[...state3.account,{...action.payload}]


      };

      case "CHECK_LOGIN":
        return{
          ...state3,
        currentuser:{...action.payload,loginstatus:state3.account.some((s)=>s.email===action.payload.email  &&  s.password==action.payload.password )} 

        };


        case "UPDATE_PASSWORD":
          return{
          ...state3,account:state3.account.filter((e)=> e.mail==action.payload.email? (e.password=action.payload.password) :(e.password=e.password)  )
    
    
          };

          case "LOGOUT":
            return{
              ...state3,currentuser:{email:"",password:"",loginstatus:false}
             
      
      
            };  
      default:
        return state3;
    }
  }








