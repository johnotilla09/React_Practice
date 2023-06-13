import { Component } from 'react';

import classes from './User.module.css';

// Class Based Components
class User extends Component {
  componentWillUnmount () {
    console.log("Component will Unamount!!!");
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// Functional Components
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
