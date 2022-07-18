import { useState } from 'react';

interface IUseProductValueUpdate {
  productValueUpdate:string,
  changeProductValueUpdate:(value: string)=>void
}
function useProductValueUpadte(defaultValue:string):IUseProductValueUpdate {
  const [productValueUpdate, setProductValueUpdate] = useState(defaultValue);

  function changeProductValueUpdate(value:string):void {
    setProductValueUpdate(value);
  }

  return { productValueUpdate, changeProductValueUpdate };
}

export default useProductValueUpadte;
