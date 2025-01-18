import React from "react";
import { useSearchParams } from "react-router-dom";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import LocaleContext from "../contexts/LocaleContext";
import { getArchivedNotes } from "../utils/network-data";

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(
    searchParams.get("keyword") || "",
  );
  const [archivedNotes, setArchivedNotes] = React.useState([]);
  const [filteredNotes, setFilteredNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    const fetchArchivedNotes = async () => {
      const { error, data } = await getArchivedNotes();
      if (!error && data) {
        setArchivedNotes(data);
      }
      setLoading(false);
    };

    fetchArchivedNotes();
  }, []);

  React.useEffect(() => {
    setFilteredNotes(() =>
      archivedNotes.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase()),
      ),
    );
  }, [keyword, archivedNotes]);

  return (
    <section className="archives-page">
      <h2>{locale === "en" ? "Archive Note" : "Catatan Arsip"}</h2>
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
          notes={keyword ? filteredNotes : archivedNotes}
          emptyPlaceholder={
            locale === "en" ? "No archive note" : "Arsip Kosong"
          }
        />
      )}
    </section>
  );
}

export default ArchivePage;
