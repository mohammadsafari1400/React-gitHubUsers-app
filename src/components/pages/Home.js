import { useContext } from "react";
import usersContext from "../../context/users/usersContext";
import { useState } from "react";
import Users from "../users/Users";
import Loading from "../UI/Loading";
const Home = () => {
  const { users, getUsers, deleteUsers, loading } = useContext(usersContext);
  const [text, setText] = useState("");
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      console.log(text);
      getUsers(text);
    }
    setText("");
  };

  return (
    <div className="search">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Please enter name"
        />
        <button className="btn-search">Search</button>
      </form>
      {users.length > 0 && (
        <button className="btn-remove" onClick={() => deleteUsers()}>
          remove
        </button>
      )}
      {loading ? <Loading /> : <Users />}
    </div>
  );
};

export default Home;
