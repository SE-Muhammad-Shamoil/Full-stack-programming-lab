import { Link } from 'react-router-dom';

const ProductCard = ({ image, title, description, price, id }) => {
  return (
    <div className="product-card">
      <div className="prod-img">
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className="prod-title">{title}</div>
      <div className="prod-desc">{description}</div>
      <div className="prod-price">{price}</div>
      <Link to={`/cart?add=${id}`} className="btn-add-cart">
        <span className="cart-ico">&#128722;</span> ADD TO CART
      </Link>
      <div className="product-actions">
        <Link to="#">ADD TO WISH LIST</Link>
        <Link to={`/product/${id}`}>MORE DETAILS</Link>
      </div>
    </div>
  );
};

export default ProductCard;
