import React from "react";
import { useSearchParams } from "react-router-dom";
import NewNoteButton from "../components/NewNoteButton";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import LocaleContext from "../contexts/LocaleContext";
import { getActiveNotes } from "../utils/network-data";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(
    searchParams.get("keyword") || "",
  );
  const [activeNotes, setActiveNotes] = React.useState([]);
  const [filteredNotes, setFilteredNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    const fetchActiveNotes = async () => {
      const { error, data } = await getActiveNotes();
      if (!error && data) {
        setActiveNotes(data);
      }
      setLoading(false);
    };

    fetchActiveNotes();
  }, []);

  React.useEffect(() => {
    setFilteredNotes(() =>
      activeNotes.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase()),
      ),
    );
  }, [keyword, activeNotes]);

  return (
    <section className="homepage">
      <h2>{locale === "en" ? "Active Note" : "Catatan Aktif"}</h2>
      <SearchBar
        keyword={keyword}
        onSearchChange={(event) => {
          setSearchParams({ keyword: event.target.value });
          setKeyword(event.target.value);
        }}
      />
      {loading ? (
        <div>Fetching...</div>
      ) : (
        <NotesList
          notes={keyword ? filteredNotes : activeNotes}
          emptyPlaceholder={
            locale === "en" ? "No active note" : "Tidak ada catatan"
          }
        />
      )}
      <div className="homepage__action">
        <NewNoteButton />
      </div>
    </section>
  );
}

export default HomePage;
