import { useState } from 'react';

interface IUseProductQuantityValue {
  productValueQuantity:string,
  changeProductValueQuantity:(value: string)=>void
}
function useProductQuantityValue():IUseProductQuantityValue {
  const [productValueQuantity, setProductValueQuantity] = useState('');

  function changeProductValueQuantity(value:string):void {
    setProductValueQuantity(value);
  }

  return { productValueQuantity, changeProductValueQuantity };
}

export default useProductQuantityValue;
