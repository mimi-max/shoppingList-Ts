import React from 'react';
import useProductValue from '../hooks/useProductValue';

function Form() {
  const { productValue, changeProductValue } = useProductValue();
  return (
    <form action="">
      <input type="text" name="" id="" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { changeProductValue(e.target.value); }} />
      <button type="submit">Add</button>
    </form>

  );
}
export default Form;
