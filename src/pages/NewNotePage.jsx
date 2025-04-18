import React from "react";
import SaveNoteButton from "../components/SaveNoteButton";
import { addNote } from "../utils/network-data";

class NewNotePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.handleTitleOnChange = this.handleTitleOnChange.bind(this);
    this.handleBodyOnChange = this.handleBodyOnChange.bind(this);
  }

  handleTitleOnChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleBodyOnChange(event) {
    this.setState({
      body: event.target.innerHTML,
    });
  }

  render() {
    return (
      <section className="add-new-page">
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
            placeholder="Judul Catatan"
            value={this.state.title}
            onChange={this.handleTitleOnChange}
          />
          <div
            className="add-new-page__input__body"
            data-placeholder="Isi Catatan"
            contentEditable
            onInput={this.handleBodyOnChange}
          />
        </div>
        <div className="add-new-page__action">
          <SaveNoteButton
            handleOnClick={async () =>
              await addNote({
                title: this.state.title,
                body: this.state.body,
              })
            }
          />
        </div>
      </section>
    );
  }
}

export default NewNotePage;
