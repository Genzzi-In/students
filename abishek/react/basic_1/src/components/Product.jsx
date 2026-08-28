
// product.data.ts
export default function Product({product}) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        width={300}
      />

      <h2>{product.name}</h2>

      <p>{product?.description ? product.description : "Good Item"}</p>

      <p>Category: {product.category}</p>

      <p>⭐ {product.rating}</p>

      <h3>
        {product.currency} {product.price}
      </h3>

      <p>
        {product.stock > 0
          ? `${product.stock} available`
          : "Out of stock"}
      </p>

      <button>Add to Cart</button>
    </div>
  );
}