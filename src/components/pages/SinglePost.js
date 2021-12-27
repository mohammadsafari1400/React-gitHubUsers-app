import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import usersContext from "../../context/users/usersContext";
import Loading from "../UI/Loading";
const SinglePost = () => {
  const { user, getSinglePost, loading, links, getLinks } =
    useContext(usersContext);
  const { login } = useParams();
  useEffect(() => {
    getSinglePost(login);
    getLinks(login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="box">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="single style">
            <div className="pic">
              <img src={user.avatar_url} alt={user.login} />
              <h5 className="login">{user.login}</h5>
              <h5>{user.location}</h5>
            </div>
            <div className="info">
              <h5>BIO : {user.bio} </h5>
              <button className="btn-git">
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  VISIT GITHUB
                </a>
              </button>
              <h5>Login : {user.login} </h5>
              <h5 className="blog">
                Website :{" "}
                <a href={user.blog} target="_blank" rel="noreferrer">
                  {user.blog}
                </a>
              </h5>
            </div>
          </div>
          <div className="socials style">
            <span className="social following">
              Following : {user.following}
            </span>
            <span className="social Followers">
              Followers : {user.followers}
            </span>
            <span className="social public-repos">
              Public Repos : {user.public_repos}
            </span>
            <span className="social public-gists">
              Public Gists : {user.public_gists}
            </span>
          </div>
          <div className="links style">
            <h5>
              {links.map((link) => (
                <li key={link.id}>
                  <a href={link.html_url} target="_blank" rel="noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </h5>
          </div>
        </>
      )}
    </div>
  );
};

export default SinglePost;
