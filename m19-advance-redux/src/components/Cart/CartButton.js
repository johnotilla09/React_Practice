import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatach = useDispatch();

  const toogleCartHandler = () => {
    dispatach(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toogleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{ cartQuantity }</span>
    </button>
  );
};

export default CartButton;
