import PropTypes from "prop-types";
import React from "react";

function DeleteNoteButton({ handleOnClick }) {
  return (
    <button
      className="action"
      type="button"
      title="Hapus"
      onClick={handleOnClick}
    >
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 5H18M9 5V5C10.5769 3.16026 13.4231 3.16026 15 5V5M9 20H15C16.1046 20 17 19.1046 17 18V9C17 8.44772 16.5523 8 16 8H8C7.44772 8 7 8.44772 7 9V18C7 19.1046 7.89543 20 9 20Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

DeleteNoteButton.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};

export default DeleteNoteButton;
