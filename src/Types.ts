export interface ProductType {
    id: number;
    title: string;
    img: string;
    price: number;
    company: string;
    info: string;
    inCart: boolean;
    count: number;
    total: number;
  }

  export interface CartContextTypes {
    products: ProductType[],
    cartItems : ProductType[],
    datailProduct: ProductType,
    total : number,
    addToCart : (e :React.MouseEvent<HTMLButtonElement, MouseEvent> ,id : number) => void,
    removeFromCart : (id : number) => void,
    hadleIncrement : (id : number) => void,
    handleDecrement : (id : number) => void,
    handleDetails : (id : number) => void,
    closeCart : () => void,
    openCart : () => void,
    quantity : () => number,
    getTotal :  number
    index :  number
  }