import { Component } from "react/cjs/react.production.min";
import React, { Fragment } from "react";

import styles from './UserFinder.module.css';
import Users from "./Users";
import UserContext from "./store/user-context";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

// Class-based Component
class UserFinder extends Component {
    // Use of use context
    static contextType = UserContext;

    constructor () {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        };
    }

    // Use of componentDidMount
    componentDidMount () {
        // Send Http request...
        this.setState({filteredUsers: this.context.users}); // Use of user context
    }

    // Use of componentDidUpdate
    componentDidUpdate (prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            console.log("component did update");
            this.setState({
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm)) // Use of user context
            });
        }
    }

    searchUserHandler (event) {
        this.setState({searchTerm: event.target.value});
    }

    render () {
        return (
          <Fragment>
            <div className={styles.finder}>
              <input
                type="search"
                onChange={this.searchUserHandler.bind(this)}
              />
            </div>
            <ErrorBoundary>
              <Users users={this.state.filteredUsers} />
            </ErrorBoundary>
          </Fragment>
        );
    }
}

// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);

//     const searchUserHandler = event => {
//         setSearchTerm(event.target.value);
//     };

//     return (
//         <Fragment>
//             <div className={styles.finder}>
//                 <input type="search" onChange={searchUserHandler} />
//             </div>
//             <Users users={filteredUsers} />
//         </Fragment>
//     );
// };

export default UserFinder;