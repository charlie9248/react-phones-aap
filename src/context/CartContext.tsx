import React, {
  useContext,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { detailProduct, storeProducts } from "../data";
import {ProductType ,CartContextTypes} from '../Types'
import SideBarCart from '../components/SideBarCart'


const CartContext = createContext<CartContextTypes>({} as CartContextTypes);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cartItems , setCartItems] = useState<ProductType[]>([])
  const [datailProduct  , setdatailProduct] =  useState({} as ProductType);
  const [total ,  setTotal] = useState(0);
  const [index , setIndex] = useState(0)





  const getSingleProduct = (id : number) => products.find(product  => product.id  === id) as ProductType;

  // const getTotal = () => cartItems.map((item ,i) => {
  //   setIndex(i)
  //   return item.total
  // }).reduce((acc , total ) => acc += total , 0);

    const getTotal = cartItems
      .map(item => item.total)
      .reduce((acc, curr) => {
        acc = acc + curr;
        console.log(acc)
        return acc;
      }, 0);

      console.log(getTotal)
  const quantity = () => cartItems.length;


  const [isOpen , setIsOpen] = useState<boolean>(false);

  const closeCart = () => {
      setIsOpen(false)
  }
  const openCart = () => {
    console.log(isOpen)
      setIsOpen(true)
  }
  

  const addToCart = (e : React.MouseEvent<HTMLButtonElement, MouseEvent> ,id : number) => {
    e.stopPropagation()
    e.preventDefault()
    let product = getSingleProduct(id)
    product.count = 1;
    product.inCart = true;
    product.total = product.price

    cartItems.push(product)
    console.log(cartItems)
    let temproduct  = products.map(item => item.id === product.id ? {...item , inCart : true} : item);
    setProducts(temproduct)
    setTotal(getTotal);


    console.log(getTotal)
  }

  const removeFromCart = (id :number) => {
    // setCartItems(currentItems => {
    //   return currentItems.filter(item => item.id !== id )
    // })

    let tempItems = [...cartItems].filter(item => item.id !== id);

    setCartItems(tempItems)
    setTotal(getTotal)

    setProducts(products.map(item => item.id === id  ?  {...item , count : 0 ,  total : 0, inCart : false} : item))
   
  }

  const hadleIncrement = (id: number) => {
  
    setCartItems(cartItems.map(item => item.id === id  ? {...item, count : ++item.count, total : item.price * item.count } : item))
    setTotal(getTotal);
  }

  const handleDecrement = (id : number) => {
   
    setCartItems(cartItems.map(item => item.id === id  ? {...item, count : --item.count , total : item.price * item.count } : item))
 setTotal(getTotal)
  }

  const handleDetails = (id : number) => {
    let detailsProduct  =    getSingleProduct(id);
    setdatailProduct(detailsProduct)
  } 

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    let tepmpProduct:ProductType[] = [];
    storeProducts.forEach((item) => {
      tepmpProduct = [...tepmpProduct , item]
    });
    setProducts(tepmpProduct);
  };


  return <CartContext.Provider value={{
    products, 
    addToCart ,
     removeFromCart,
     hadleIncrement,
     handleDecrement,
     handleDetails,
     datailProduct,
     cartItems,
     total,
     openCart,
     closeCart,
     quantity,
     getTotal,
     index
    }}>{children}
    <SideBarCart isOpen={isOpen}/>
    </CartContext.Provider>;
};

export default CartContext;
