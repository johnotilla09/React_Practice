import React from "react";
import Card from "../UI/Card/Card";
import styles from './UsersList.module.css';

const UsersList = (props) => {
    const isData = props.users.length > 0;

    return (
        isData && (
            <Card className={styles.cardClassName}>
                <h2>Users</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.age}</td>
                                <td>{user.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        )
    );
};

export default UsersList;