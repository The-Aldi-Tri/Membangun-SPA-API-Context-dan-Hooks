import PropTypes from "prop-types";
import React from "react";
import { useSearchParams } from "react-router-dom";
import HomePage from "../pages/HomePage";

function HomePageWrapper({ getActiveNotes }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function changeSearchParams(keyword) {
    setSearchParams({ keyword: keyword });
  }

  return (
    <HomePage
      activeNotes={getActiveNotes()}
      onSearch={changeSearchParams}
      activeKeyword={searchParams.get("keyword")}
    />
  );
}

HomePageWrapper.propTypes = {
  getActiveNotes: PropTypes.func.isRequired,
};

export default HomePageWrapper;
