import PropTypes from "prop-types";
import React from "react";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredNotes: this.props.activeKeyword
        ? this.props.archivedNotes.filter((note) =>
            note.title
              .toLowerCase()
              .includes(this.props.archivedNotes.toLowerCase()),
          )
        : [],
    };

    this.handleOnSearch = this.handleOnSearch.bind(this);
  }

  handleOnSearch(event) {
    const keyword = event.target.value;
    this.setState({
      filteredNotes: keyword
        ? this.props.archivedNotes.filter((note) =>
            note.title.toLowerCase().includes(keyword.toLowerCase()),
          )
        : [],
    });
    this.props.onSearch(keyword);
  }

  render() {
    return (
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        <SearchBar
          keyword={this.props.activeKeyword}
          onSearchChange={this.handleOnSearch}
        />
        <NotesList
          notes={
            this.props.activeKeyword
              ? this.state.filteredNotes
              : this.props.archivedNotes
          }
          emptyPlaceholder={"Arsip Kosong"}
        />
      </section>
    );
  }
}

ArchivePage.propTypes = {
  archivedNotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool,
    }),
  ),
  onSearch: PropTypes.func.isRequired,
  activeKeyword: PropTypes.string,
};

export default ArchivePage;
