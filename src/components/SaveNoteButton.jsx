import PropTypes from "prop-types";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function SaveNoteButton({ handleOnClick }) {
  const navigate = useNavigate();

  return (
    <Link to={"/"}>
      <button
        className="action"
        type="button"
        title="Simpan"
        onClick={() => {
          handleOnClick();
          navigate("/");
        }}
      >
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12.6111L8.92308 17.5L20 6.5"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </Link>
  );
}

SaveNoteButton.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};

export default SaveNoteButton;
