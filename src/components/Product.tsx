interface IProductProps{
  product:string
}
function Product({ product }:IProductProps) {
  return (
    <p>{product}</p>
  );
}
export default Product;
