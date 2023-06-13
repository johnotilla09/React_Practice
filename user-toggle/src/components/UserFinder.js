import { Component } from "react/cjs/react.production.min";
import React, { Fragment } from "react";

import styles from './UserFinder.module.css';
import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

// Class-based Component
class UserFinder extends Component {
    constructor () {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        };
    }

    componentDidMount () {
        // Send Http request...
        this.setState({filteredUsers: DUMMY_USERS});
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            console.log("component did update");
            this.setState({
                filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm))
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
                    <input type="search" onChange={this.searchUserHandler.bind(this)} />
                </div>
                <Users users={this.state.filteredUsers} />
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