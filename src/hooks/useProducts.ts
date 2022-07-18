import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface IProduct{
  [id:string]:{
    value:string,
    id:string,
  }
}
//
interface IUseProducts{
  products:IProduct,
  addProduct: (productValue: string) => void,
  updateProduct:(id: string, value: string)=>void
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
  return { products, addProduct, updateProduct };
}
export default useProducts;
