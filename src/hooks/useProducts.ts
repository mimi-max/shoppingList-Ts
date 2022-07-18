import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface IProduct{
  [id:string]:{
    value:string,
    id:string,
    isDone:boolean,
    quantity:number
  }
}
//
interface IUseProducts{
  products:IProduct,
  addProduct: (productValue: string) => void,
  updateProduct:(id: string, value: string)=>void
  deleteProduct:(id: string)=> void
  isCheck:(id: string, isDone:boolean)=> void
}
//
function useProducts() {
  const [products, setProducts] = useState <IProduct>({});
  //
  function addProduct(productValue:string) {
    const id = uuidv4();
    if (productValue) {
      const newProducts = {
        ...products,
        [id]: {
          value: productValue,
          id,
          isDone: false,
          quantity: 1,
        },
      };
      setProducts(newProducts);
    }
  }
  //

  function updateProduct(id:string, value:string):void {
    const newProducts = { ...products };
    newProducts[id].value = value;
    setProducts(newProducts);
  }
  //
  function deleteProduct(id:string):void {
    const newProducts = { ...products };
    delete newProducts[id];
    setProducts(newProducts);
  }
  function isCheck(id:string, isDone:boolean):void {
    const newProducts = { ...products };
    newProducts[id].isDone = !newProducts[id].isDone;
    console.log(newProducts);
    setProducts(newProducts);
  }
  //
  return {
    products, addProduct, updateProduct, deleteProduct, isCheck,
  };
}
export default useProducts;
