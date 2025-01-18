import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";

function SaveNoteButton({ handleOnClick }) {
  const navigate = useNavigate();

  return (
    <button
      className="action"
      type="button"
      title="Simpan"
      onClick={async () => {
        await handleOnClick();
        navigate("/");
      }}
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12.6111L8.92308 17.5L20 6.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

SaveNoteButton.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};

export default SaveNoteButton;
