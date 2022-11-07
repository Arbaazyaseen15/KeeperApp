import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  function handleOnChange(e) {
    if (e.target.name === "content") {
      setContent(e.target.value);
    } else if (e.target.name === "title") {
      setTitle(e.target.value);
    }
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleOnChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
          onChange={handleOnChange}
        />
        <button onClick={(e) => props.handleOnClick(e, title, content)}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
