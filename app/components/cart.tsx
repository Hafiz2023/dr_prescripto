import { useCart } from "../store/useCart";

export default function Cart() {
  const { items, removeItem } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      {items.length === 0 ? <p>No items in cart</p> : (
        items.map((item) => (
          <div key={item.id}>
            <h2>{item.medicine_name}</h2>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}
