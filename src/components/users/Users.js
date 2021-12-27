import { useContext } from "react";
import usersContext from "../../context/users/usersContext";
import User from "./User";
const Users = () => {
  const { users } = useContext(usersContext);
  return (
    <ul className="users">
      {users.length > 0 ? (
        users.map((user) => <User key={user.id} user={user} />)
      ) : (
        <img src="./image/noItem-1.jpg" alt="users" />
      )}
    </ul>
  );
};

export default Users;
