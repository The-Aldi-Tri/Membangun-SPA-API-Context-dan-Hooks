import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArchiveNoteButton from "../components/ArchiveNoteButton";
import DeleteNoteButton from "../components/DeleteNoteButton";
import NoteDetail from "../components/NoteDetail";
import UnarchiveNoteButton from "../components/UnarchiveNoteButton";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/network-data";
import NotFoundPage from "./NotFoundPage";

function DetailPage() {
  const { noteId } = useParams();
  const [note, setNote] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchNote = async () => {
      const { error, data } = await getNote(noteId);
      if (!error && data) {
        setNote(data);
      }
      setLoading(false);
    };

    fetchNote();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
            handleOnClick={async () => {
              await unarchiveNote(noteId);
              navigate("/archives");
            }}
          />
        ) : (
          <ArchiveNoteButton
            handleOnClick={async () => {
              await archiveNote(noteId);
              navigate("/");
            }}
          />
        )}
        <DeleteNoteButton
          handleOnClick={async () => {
            await deleteNote(noteId);
            note.archived ? navigate("/archives") : navigate("/");
          }}
        />
      </div>
    </section>
  ) : (
    <NotFoundPage />
  );
}

export default DetailPage;
