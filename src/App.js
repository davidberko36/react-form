import React, { useState } from 'react';

function App() {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [githubUrls, setGithubUrls] = useState([]);
  const [currentUrl, setCurrentUrl] = useState("");

  const numbers = Array.from({ length: 82 }, (_, i) => i + 1);

  const handleNumberChange = (event) => {
    setSelectedNumber(event.target.value);
  };

  const handleUrlChange = (event) => {
    setCurrentUrl(event.target.value);
  };

  const handleAddUrl = () => {
    if (currentUrl.trim()) {
      setGithubUrls([...githubUrls, currentUrl]);
      setCurrentUrl("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Number:', selectedNumber);
    console.log('GitHub URLs:', githubUrls);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="number-select">Select a number:</label>
          <select
            id="number-select"
            value={selectedNumber}
            onChange={handleNumberChange}
          >
            {numbers.map(number => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="github-url">GitHub Profile URL:</label>
          <input
            type="url"
            id="github-url"
            value={currentUrl}
            onChange={handleUrlChange}
          />
          <button type="button" onClick={handleAddUrl}>
            Add URL
          </button>
        </div>

        <div>
          <h3>Added GitHub URLs:</h3>
          <ul>
            {githubUrls.map((url, index) => (
              <li key={index}>{url}</li>
            ))}
          </ul>
        </div>

        <button type="submit">Submit/Save</button>
      </form>
    </div>
  );
}

export default App;
