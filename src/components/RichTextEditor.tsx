import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div style={{borderRadius:'50px'}}>
     
      <ReactQuill 
        value={content} 
        onChange={handleChange} 
        theme="snow" 
        placeholder="Start typing..."
        
      />
 
    </div>
  );
};

export default TextEditor;
