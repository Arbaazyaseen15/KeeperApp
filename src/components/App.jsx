import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArray, setNoteArray] = useState([
    { title: "Note title", content: "Note Content" }
  ]);

  function addNote(e, title, content) {
    const newNote = {
      title: title,
      content: content
    };
    setNoteArray([...noteArray, newNote]);
    console.log(noteArray);
    console.log("Note Added");
    e.preventDefault();
  }

  function deleteNote(e) {
    const deleteNoteIndex = parseInt(e.target.parentElement.id);
    setNoteArray((pre) => pre.filter((e, i) => i !== deleteNoteIndex));
    console.log(deleteNoteIndex);
  }

  return (
    <div>
      <Header />
      <CreateArea handleOnClick={addNote} />
      {noteArray.map((note, index) => (
        <Note key={index} note={note} id={index} handleOnClick={deleteNote} />
      ))}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
