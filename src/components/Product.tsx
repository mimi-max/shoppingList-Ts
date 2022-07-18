import React, { useState } from 'react';
import useProductValueUpdate from '../hooks/useProductValueUpadte';

interface IProductProps{
  product:string
  updateProduct: (id: string, value: string) => void
  id:string,
  deleteProduct:(id: string) => void
}
function Product({
  product, updateProduct, id, deleteProduct,
}:IProductProps) {
  const [istoggle, setToggle] = useState <boolean>(false);
  const { productValueUpdate, changeProductValueUpdate } = useProductValueUpdate(product);
  //
  function toogle() {
    setToggle(!istoggle);
  }
  return (
    <>
      {!istoggle && <span>{product}</span> }
      {istoggle && (
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          updateProduct(id, productValueUpdate);
          toogle();
        }}
      >
        <input type="text" value={productValueUpdate} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { changeProductValueUpdate(e.target.value); }} />
        {istoggle && (
        <button
          type="submit"
        >
          Submit
        </button>
        )}
      </form>
      )}
      {!istoggle && <button type="button" onClick={() => { toogle(); }}>Update</button>}

      { !istoggle && <button type="button" onClick={() => { deleteProduct(id); }}>Delete</button>}
    </>
  );
}
export default Product;
