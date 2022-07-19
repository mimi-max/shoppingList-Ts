import React from 'react';
import useProductValue from '../hooks/useProductValue';
import useProducts from '../hooks/useProducts';
import Product from './Product';

function Form() {
  const { productValue, changeProductValue } = useProductValue();
  const {
    products, addProduct, updateProduct, deleteProduct, isCheck, updateQuantity,
  } = useProducts();
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
        <input
          type="text"
          value={productValue}
          required
          id=""
          onChange={
          (e: React.ChangeEvent<HTMLInputElement>) => { changeProductValue(e.target.value); }
}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        { Object.values(products).map((product) => (
          <div key={product.id}>
            {' '}
            <Product
              product={product.value}
              updateProduct={updateProduct}
              id={product.id}
              deleteProduct={deleteProduct}
              isCheck={isCheck}
              isDone={product.isDone}
              quantity={product.quantity}
              updateQuantity={updateQuantity}
            />
          </div>
        ))}
      </div>

    </>
  );
}
export default Form;
