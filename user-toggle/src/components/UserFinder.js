import React, { useEffect, useState, Fragment } from "react";

import styles from './UserFinder.module.css';
import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

const UserFinder = () => {
    const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setFilteredUsers(
            DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
        );
    }, [searchTerm]);

    const searchUserHandler = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <Fragment>
            <div className={styles.finder}>
                <input type="search" onChange={searchUserHandler} />
            </div>
            <Users users={filteredUsers} />
        </Fragment>
    );
};

export default UserFinder;