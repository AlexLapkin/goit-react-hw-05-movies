import React from 'react';
import css from './SearchBar.module.css';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const value = event.currentTarget.elements.searchWord.value;
    onSubmit(value);
  };

  return (
    <div>
      <header className={css.searchbar}>
        <form className={css.searchbar_form} onSubmit={handleSubmit}>
          <input
            name="searchWord"
            className={css.searchbar_input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search movie"
          />
          <button type="submit" className={css.searchbar_btn}>
            <span className={css.button_label}>Search</span>
          </button>
        </form>
      </header>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchBar;
