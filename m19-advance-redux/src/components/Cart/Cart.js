import { useSelector } from 'react-redux/es/hooks/useSelector';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);

  const cartItem = cartItems.map(item => <CartItem key={item.id} item={{ title: item.name, quantity: item.quantity, total: item.totalPrice, price: item.price, id: item.id }} />);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        { cartItem }
        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        /> */}
      </ul>
    </Card>
  );
};

export default Cart;
