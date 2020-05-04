import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(prevNote => {
      return [...prevNote, note];
    });
  }

  function deleteNote(id) {
    setNotes(prevNote => {
      return prevNote.filter((singleNote, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((singleNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={singleNote.title}
            content={singleNote.content}
            onDelete={deleteNote}
          />
        );
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
