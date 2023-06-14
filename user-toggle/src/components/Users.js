import { Component } from 'react';

import User from './User';

import classes from './Users.module.css';

// Classed Based Components
class Users extends Component {

  // Initializing state
  constructor () {
    super();
    this.state = {
      showUsers: true,
    };
  }

  componentDidUpdate () {
    if (this.props.users.length === 0) {
      throw new Error('No users Found');
    }
  }

  // Method in class in javascript
  toggleUsersHandler () {
    this.setState((curState) => {
      return {
        showUsers: !curState.showUsers
      };
    });
  }


  // Fetch this in the DOM
  render () {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// Functional Components
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
