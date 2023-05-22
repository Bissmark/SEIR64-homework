import { useState } from "react";

function SearchForm(props) {
  const [query, setQuery] = useState(0);

  const _handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(query);
  };

  const _handleInput = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={_handleSubmit}>
      <label>{props.label}</label>
      <input type="number" required autoFocus placeholder="1" onInput={_handleInput}/>
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchForm;