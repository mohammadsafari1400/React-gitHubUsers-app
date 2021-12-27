import { Link } from "react-router-dom";
const User = ({ user }) => {
  return (
    <li className="user">
      <img src={user.avatar_url} alt={user.login} />
      <h5 className="user-name">{user.login}</h5>
      <Link to={`single-post/${user.login}`}>
        <button className="btn-more">more...</button>
      </Link>
    </li>
  );
};

export default User;
