import PropTypes from "prop-types";
import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, emptyPlaceholder }) {
  if (notes && notes.length > 0) {
    return (
      <section className="notes-list">
        {notes.map((note, index) => (
          <NoteItem
            key={index}
            id={note.id}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
          />
        ))}
      </section>
    );
  } else {
    return (
      <section className="notes-list-empty">
        <p className="notes-list__empty">
          {emptyPlaceholder || "Tidak Ada Catatan"}
        </p>
      </section>
    );
  }
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }),
  ),
  emptyPlaceholder: PropTypes.string,
};

export default NotesList;
