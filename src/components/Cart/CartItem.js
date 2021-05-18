import "./CartItem.css";

const CartItem = ({ item, onRemove, onAdd }) => {
  const { price, amount, name, id } = item;
  // const priceFormat = `$${price.toFixed(2)}`;

  return (
    <li className="cart-item">
      <div>
        <h2>{name}</h2>
        <div className="sumary">
          <span className="price">{price}</span>
          <span className="amount">x {amount}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={() => onRemove(id)}>−</button>
        <button onClick={() => onAdd(item)}>+</button>
        {/* <button onClick={onAdd}>+</button> */}
      </div>
    </li>
  );
};

export default CartItem;
