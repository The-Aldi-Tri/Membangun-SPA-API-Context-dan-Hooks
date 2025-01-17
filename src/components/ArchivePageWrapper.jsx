import PropTypes from "prop-types";
import React from "react";
import { useSearchParams } from "react-router-dom";
import ArchivePage from "../pages/ArchivePage";

function ArchivePageWrapper({ getArchivedNotes }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function changeSearchParams(keyword) {
    setSearchParams({ keyword: keyword });
  }

  return (
    <ArchivePage
      archivedNotes={getArchivedNotes()}
      onSearch={changeSearchParams}
      activeKeyword={searchParams.get("keyword")}
    />
  );
}

ArchivePageWrapper.propTypes = {
  getArchivedNotes: PropTypes.func.isRequired,
};

export default ArchivePageWrapper;
