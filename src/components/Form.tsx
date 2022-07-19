import { MdAdd } from 'react-icons/md';
import React from 'react';
import useProductValue from '../hooks/useProductValue';
import useProducts from '../hooks/useProducts';
import Product from './Product';
import styles from '../styles/form.module.css';

function Form() {
  const { productValue, changeProductValue } = useProductValue();
  const {
    products, addProduct, updateProduct, deleteProduct, isCheck, updateQuantity,
  } = useProducts();
  //
  return (
    <>
      {/* <h1 className={styles.titleApp}>SHOPPING LIST</h1> */}
      <form
        className={styles.form}
        action=""
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          addProduct(productValue);
          changeProductValue('');
        }}
      >
        <input
          className={styles.formInput}
          type="text"
          value={productValue}
          placeholder="Enter a product name"
          required
          id=""
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => { changeProductValue(e.target.value); }
          }
        />
        <button className={styles.formBtn} type="submit">
          <MdAdd />
          Add
        </button>
      </form>
      <div>
        {Object.values(products).map((product) => (
          <div key={product.id} className={styles.container}>
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
