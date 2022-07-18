import React from 'react';
import useProductValue from '../hooks/useProductValue';
import useProducts from '../hooks/useProducts';
import Product from './Product';

function Form() {
  const { productValue, changeProductValue } = useProductValue();
  const { products, addProduct } = useProducts();
  //
  return (
    <>
      <form
        action=""
        onSubmit={(e:React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          addProduct(productValue);
          changeProductValue('');
        }}
      >
        <input type="text" value={productValue} id="" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { changeProductValue(e.target.value); }} />
        <button type="submit">Add</button>
      </form>
      <div>
        { Object.values(products).map((product) => (
          <div key={product.id}>
            <Product product={product.value} />
          </div>
        ))}
      </div>
    </>
  );
}
export default Form;
