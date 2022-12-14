import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { UserService } from "../../services"

function UserList(){

    const [users, setUsers] = useState(false)

    useEffect(() => {
        UserService.getUsers()
            //.then(res => console.log(res))
            .then(res => setUsers(res))
    }, [])

    return(
        <>
            <Helmet>
                <title>User List</title>
            </Helmet>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                        {users && users.map(user => (
                            <tbody key={user.id}>
                                <tr>
                                    <td>{user.id}</td>
                                    <td style={{textAlign: "center"}}>{user.name}</td>
                                </tr>
                            </tbody>
                        ))}
            </table>
        </>

    );

}

export default UserList;