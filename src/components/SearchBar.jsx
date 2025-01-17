import PropTypes from "prop-types";
import React from "react";

function SearchBar({ keyword, onSearchChange }) {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Cari berdasarkan judul ..."
        value={keyword || ""}
        onChange={onSearchChange}
      />
    </section>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;
