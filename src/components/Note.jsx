import React from "react";

function Note({ note, handleOnClick, id }) {
  return (
    <div className="note" id={id}>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button onClick={handleOnClick}>DELETE</button>
    </div>
  );
}

export default Note;
