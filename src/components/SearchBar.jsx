import PropTypes from "prop-types";
import React from "react";
import LocaleContext from "../contexts/LocaleContext";

function SearchBar({ keyword, onSearchChange }) {
  const { locale } = React.useContext(LocaleContext);

  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder={
          locale === "en" ? "Search by title ..." : "Cari berdasarkan judul ..."
        }
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
