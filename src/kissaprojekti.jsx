import React, { useState, useEffect } from 'react';

function KissaProjekti() {
  const [catFact, setCatFact] = useState('');

  // Fetch a random cat fact when the component loads
  useEffect(() => {
    fetchCatFact();
  }, []);

  // Function to fetch a new cat fact
  const fetchCatFact = () => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        setCatFact(data.fact); // Set the fact from the API response
      })
      .catch(error => console.error('Error fetching cat fact:', error));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Random Cat Fact</h1>
      {catFact ? (
        <div>
          <p>{catFact}</p>
          <button onClick={fetchCatFact} style={{ marginTop: '10px', padding: '10px', fontSize: '16px' }}>
            New Fact
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default KissaProjekti;
