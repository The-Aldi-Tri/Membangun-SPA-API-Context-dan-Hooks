import PropTypes from "prop-types";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArchiveNoteButton from "../components/ArchiveNoteButton";
import DeleteNoteButton from "../components/DeleteNoteButton";
import NoteDetail from "../components/NoteDetail";
import UnarchiveNoteButton from "../components/UnarchiveNoteButton";
import NotFoundPage from "./NotFoundPage";

function DetailPage({
  getNote,
  handleArchiveNote,
  handleUnarchiveNote,
  handleDeleteNote,
}) {
  const { noteId } = useParams();
  const note = getNote(noteId);
  const navigate = useNavigate();

  return note ? (
    <section className="detail-page">
      <NoteDetail
        title={note.title}
        createdAt={note.createdAt}
        body={note.body}
      />
      <div className="detail-page__action">
        {note.archived ? (
          <UnarchiveNoteButton
            handleOnClick={() => {
              handleUnarchiveNote(noteId);
              navigate("/archives");
            }}
          />
        ) : (
          <ArchiveNoteButton
            handleOnClick={() => {
              handleArchiveNote(noteId);
              navigate("/");
            }}
          />
        )}
        <DeleteNoteButton
          handleOnClick={() => {
            handleDeleteNote(noteId);
            note.archived ? navigate("/archives") : navigate("/");
          }}
        />
      </div>
    </section>
  ) : (
    <NotFoundPage />
  );
}

DetailPage.propTypes = {
  getNote: PropTypes.func.isRequired,
  handleArchiveNote: PropTypes.func.isRequired,
  handleUnarchiveNote: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
};

export default DetailPage;
