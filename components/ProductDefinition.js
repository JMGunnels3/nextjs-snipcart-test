const ProductDefinition = (props) => {
  return (
    <button className="snipcart-add-item"
      data-item-id={props.product.id}
      data-item-name={props.product.name}
      data-item-price={props.product.price}
      data-item-image={props.product.image}
      data-item-url="/"
    >
      Add to cart ${props.product.price}
    </button>
  )
}
export default ProductDefinition;
