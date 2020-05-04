import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    return setNote(prevNote => {
      return { ...prevNote, [name]: value };
    });
  }

  function sendNote(event) {
    event.preventDefault();
    return props.onAdd(note);
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          value={note.content}
          rows="3"
        />
        <button onClick={sendNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
