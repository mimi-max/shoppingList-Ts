import { MdModeEdit, MdDelete, MdCheck } from 'react-icons/md';
import React, { useState } from 'react';
import useProductValueUpdate from '../hooks/useProductValueUpadte';
import useProductQuantityValue from '../hooks/useProductQuantityValue';
import styles from '../styles/product.module.css';

interface IProductProps {
  product: string
  updateProduct: (id: string, value: string) => void
  id: string,
  deleteProduct: (id: string) => void
  isCheck: (id: string, isDone: boolean) => void
  isDone: boolean
  quantity: string
  updateQuantity: (id: string, quantity: string) => void

}
function Product({
  product, updateProduct, id, deleteProduct, isCheck, isDone,
  quantity, updateQuantity,
}: IProductProps) {
  const [istoggle, setToggle] = useState<boolean>(false);
  const { productValueUpdate, changeProductValueUpdate } = useProductValueUpdate(product);
  const { productValueQuantity, changeProductValueQuantity } = useProductQuantityValue();
  //
  function toogle() {
    setToggle(!istoggle);
  }
  const textCheck = isDone ? <span style={{ textDecorationLine: 'line-through' }}>{product}</span> : <span>{product}</span>;
  return (
    <>
      {!istoggle && (
        <input
          checked={isDone}
          className={styles.inputCheck}
          type="checkbox"
          id={id}
          onChange={() => { isCheck(id, isDone); }}
        />
      )}
      {!istoggle && <div className={styles.productName}>{textCheck}</div>}
      {istoggle && (
        <form
          className={styles.formUpdate}
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            updateProduct(id, productValueUpdate);
            toogle();
          }}
        >
          <input
            type="text"
            className={styles.updateInput}
            value={productValueUpdate}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              changeProductValueUpdate(e.target.value);
            }}
          />
          {istoggle && (
            <button
              className={styles.updateBtn}
              type="submit"
            >
              <MdCheck />
            </button>
          )}
        </form>
      )}
      {!istoggle && (
        <input
          className={styles.inputTypeNumber}
          type="number"
          min={1}
          value={quantity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            updateQuantity(id, e.target.value);
          }}
        />
      )}
      {!istoggle && (
        <button
          className={styles.editBtn}
          type="button"
          onClick={() => { toogle(); }}
        >
          <MdModeEdit />
        </button>
      )}

      {!istoggle && (
        <button
          className={styles.deleteBtn}
          type="button"
          onClick={() => { deleteProduct(id); }}
        >
          <MdDelete />
        </button>
      )}
    </>
  );
}
export default Product;
