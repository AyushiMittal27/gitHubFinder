import React, { useState, useContext } from "react";
//import PropTypes from 'prop-types'
import GitHubContext from "../../context/github/gitHubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GitHubContext);
  const alertContext = useContext(AlertContext);

  const { clearUsers, searchUsers } = githubContext;
  const { setAlert } = alertContext;

  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "danger");
    } else {
      console.log(text);
      searchUsers(text);
      setText("");
    }
  };
  return (
    <>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          className='form-control'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        ></input>
        <button
          type='submit'
          value='search'
          className='p-10 btn btn-primary  btn-block'
        >
          Search
        </button>
      </form>
      {githubContext.users.length > 0 && (
        <button className='p-10 btn btn-danger btn-block' onClick={clearUsers}>
          {" "}
          Clear
        </button>
      )}
    </>
  );
};

/*Search.propTypes={

    setAlert : PropTypes.func.isRequired
}*/

export default Search;
