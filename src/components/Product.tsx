import React, { useState } from 'react';
import useProductValueUpdate from '../hooks/useProductValueUpadte';
import useProductQuantityValue from '../hooks/useProductQuantityValue';

interface IProductProps{
  product:string
  updateProduct: (id: string, value: string) => void
  id:string,
  deleteProduct:(id: string) => void
  isCheck: (id: string, isDone: boolean) => void
  isDone:boolean
  quantity:string
  updateQuantity: (id: string, quantity: string) => void

}
function Product({
  product, updateProduct, id, deleteProduct, isCheck, isDone,
  quantity, updateQuantity,
}:IProductProps) {
  const [istoggle, setToggle] = useState <boolean>(false);
  const { productValueUpdate, changeProductValueUpdate } = useProductValueUpdate(product);
  const { productValueQuantity, changeProductValueQuantity } = useProductQuantityValue();
  //
  function toogle() {
    setToggle(!istoggle);
  }
  const textCheck = isDone ? <span style={{ textDecorationLine: 'line-through' }}>{product}</span> : <span>{product}</span>;
  return (
    <>
      <input type="checkbox" id={id} onChange={() => { isCheck(id, isDone); }} />
      {!istoggle && textCheck}
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
      {!istoggle && (
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
          updateQuantity(id, e.target.value);
        }}
      />
      )}
      {!istoggle && <button type="button" onClick={() => { toogle(); }}>Update</button>}

      { !istoggle && <button type="button" onClick={() => { deleteProduct(id); }}>Delete</button>}
    </>
  );
}
export default Product;
