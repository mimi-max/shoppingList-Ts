import { useState } from 'react';

interface IUseProductValue {
  productValue:string,
  changeProductValue:(value: string)=>void
}
function useProductValue():IUseProductValue {
  const [productValue, setProductValue] = useState('');

  function changeProductValue(value:string):void {
    setProductValue(value);
  }

  return { productValue, changeProductValue };
}

export default useProductValue;
