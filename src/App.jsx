import React from "react";
import { Route, Routes } from "react-router-dom";
import ArchivePageWrapper from "./components/ArchivePageWrapper";
import Header from "./components/Header";
import HomePageWrapper from "./components/HomePageWrapper";
import DetailPage from "./pages/DetailPage";
import NewNotePage from "./pages/NewNotePage";
import NotFoundPage from "./pages/NotFoundPage";
import { getAllNotes } from "./utils/local-data";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
    };

    this.handleArchiveNote = this.handleArchiveNote.bind(this);
    this.handleUnarchiveNote = this.handleUnarchiveNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleNewNote = this.handleNewNote.bind(this);
    this.getActiveNotes = this.getActiveNotes.bind(this);
    this.getArchivedNotes = this.getArchivedNotes.bind(this);
    this.getNote = this.getNote.bind(this);
  }

  handleArchiveNote(noteId) {
    this.setState({
      notes: this.state.notes.map((note) => {
        if (note.id === noteId) {
          return { ...note, archived: true };
        }
        return note;
      }),
    });
  }

  handleUnarchiveNote(noteId) {
    this.setState({
      notes: this.state.notes.map((note) => {
        if (note.id === noteId) {
          return { ...note, archived: false };
        }
        return note;
      }),
    });
  }

  handleDeleteNote(noteId) {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== noteId),
    });
  }

  handleNewNote({ title, body }) {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id: `notes-${+new Date()}`,
          title: title || "(untitled)",
          body,
          createdAt: new Date().toISOString(),
          archived: false,
        },
      ],
    });
  }

  getActiveNotes() {
    return this.state.notes.filter((note) => !note.archived);
  }

  getArchivedNotes() {
    return this.state.notes.filter((note) => note.archived);
  }

  getNote(noteId) {
    return this.state.notes.find((note) => note.id === noteId);
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={<HomePageWrapper getActiveNotes={this.getActiveNotes} />}
            />
            <Route
              path="/archives"
              element={
                <ArchivePageWrapper getArchivedNotes={this.getArchivedNotes} />
              }
            />
            <Route
              path="/notes/new"
              element={<NewNotePage handleNewNote={this.handleNewNote} />}
            />
            <Route
              path="/notes/:noteId"
              element={
                <DetailPage
                  getNote={this.getNote}
                  handleArchiveNote={this.handleArchiveNote}
                  handleUnarchiveNote={this.handleUnarchiveNote}
                  handleDeleteNote={this.handleDeleteNote}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
