import React, { useEffect, Fragment, useContext } from "react";
import Repos from "../repos/Repos";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import GitHubContext from "../../context/github/gitHubContext";
//import PropTypes from 'prop-types'

const User = ({ match }) => {
  const gitHubContext = useContext(GitHubContext);
  const { getUser, getUserRepos, user, loading } = gitHubContext;

  const {
    name,
    avatar_url,
    login,
    location,
    bio,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
  } = user;

  useEffect(() => {
    // const uname = this.props.match.param.login;
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
      <Link to='/' className='btn btn-primary btn-block'>
        {" "}
        Back to Search
      </Link>
      <i class='fa fa-times-cricle' />
      {hireable} Hireable :{" "}
      {hireable !== null ? (
        <i class=' fa fa-check-square' />
      ) : (
        <i class='fa fa-times-circle' />
      )}
      <div className='card'>
        <img
          className='card-img-top'
          src={avatar_url}
          alt=''
          style={{ width: "150px" }}
        />
        <h1>{name}</h1>
        <p>Location:{location}</p>
      </div>
      <div>
        {bio && (
          <Fragment>
            <h3> Bio</h3>
            <p>{bio}</p>
          </Fragment>
        )}
        <a href={html_url} className='btn btn-primary mt-1'>
          {" "}
          Visit GitHub Profile
        </a>
        <ul style={{ listStyleType: "none"  , padding:'0' }}>
          <li>
            {login && (
              <Fragment>
                <strong> Username: </strong> {login}
              </Fragment>
            )}
          </li>
          <li>
            {company && (
              <Fragment>
                <strong> company: </strong> {company}
              </Fragment>
            )}
          </li>
          <li>
            {blog && (
              <Fragment>
                <strong> Website: </strong> {blog}
              </Fragment>
            )}
          </li>
        </ul>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-danger'>Public Repos: {public_repos}</div>
        <div className='badge badge-warning'>Public Gists: {public_gists}</div>
      </div>
      <Repos />
    </>
  );
};
/*
User.propTypes = {
    loading : PropTypes.bool,
    getUser : PropTypes.func.isRequired,
    user : PropTypes.object.isRequired,
    repos : PropTypes.array.isRequired,
    getUserRepos : PropTypes.func.isRequired
} */
export default User;
