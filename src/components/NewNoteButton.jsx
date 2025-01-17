import React from "react";
import { useNavigate } from "react-router-dom";

function NewNoteButton() {
  const navigate = useNavigate();

  return (
    <button
      className="action"
      type="button"
      title="Tambah"
      onClick={() => navigate("/notes/new")}
    >
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12H18M12 6V18"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default NewNoteButton;
