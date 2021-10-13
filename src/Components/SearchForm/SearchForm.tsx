import React from 'react';

export const SearchForm = (props: any):JSX.Element => {
  console.log(props);
  const handleOnChange = (event: any) => {
    props.searchAction(event?.target.value)
  }

  return(
    <form className="navbar-form" role="search">
      <input type="text"
        className="form-control"
        placeholder="Search here"
        onChange={handleOnChange}
      />
    </form>
  )
}