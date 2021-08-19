import {useState} from "react";
import ReactMarkdown from 'react-markdown';

function App() {

  const [markdown, setMarkdown] = useState("");

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  }

  return (
    <div className="app">
      <textarea onChange={handleChange} />

      <div className="preview">
      <ReactMarkdown children={markdown} />
      </div>
      
    </div>
  );
}

export default App;
