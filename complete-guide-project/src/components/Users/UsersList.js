import React from "react";

import Card from "../UI/Card/Card";

import styles from './UsersList.module.css';

const UsersList = (props) => {
    return (
        <Card className={styles.users}>
            <ul>
            {props.users.map((user) => (
                <li>
                    Hello I am {user.firstname} {user.lastname}. I am {user.age} and I live in {user.address}. 
                </li>
            ))}
        </ul>
        </Card>
    );
};

export default UsersList;