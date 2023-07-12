import { uiActions } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatach = useDispatch();

  const toogleCartHandler = () => {
    dispatach(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toogleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
