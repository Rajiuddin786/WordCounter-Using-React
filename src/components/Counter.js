import React from 'react';

export const Counter = () => {
  const [sentences, setSentences] = React.useState("");
  const [words, setWords] = React.useState(0);
  const [characters, setCharacters] = React.useState(0);

  const handleSentence = (e) => {
    setSentences(e.target.value.trim());

    const wordCount = sentences.split(/\s+/).filter(word => word.length > 0).length;
    setWords(wordCount);
    const charCount = sentences.length;
    setCharacters(charCount);
  }
  const handleClear = () => {
    setSentences("");
    setWords(0);
    setCharacters(0);
    document.getElementById("floatingTextarea2").value = "";
  }

  return (
    <main className="main">
      <div className="container">
        <textarea className="input-textarea" onChange={handleSentence} id="floatingTextarea2" placeholder='Type or Paste your text here...' type="text" autoComplete='false'></textarea>
        <button className={sentences === "" ? "btn btn-secondary" : "btn btn-primary"} onClick={handleClear}>Clear All</button>
      </div>
      <div className="counter">
        <span className="character-count">{characters}</span>
        <span className="word-count">{words}</span>
      </div>
    </main>
  )
}
