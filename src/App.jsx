import React, { useState } from 'react';
import './App.css';

function App() {
  const [girlFriends, setGirlFriends] = useSt
  ate(["Tanya", "Erish", "Biya", "Joyce"]);
  const [showList, setShowList] = useState(true);

  function handleAddGF() {
    const gfInput = document.getElementById('gfInput').value;
    document.getElementById('gfInput').value = "";

    setGirlFriends(gf => [...gf, gfInput]);
  }

  function handleRemoveGF(index) {
    setGirlFriends(girlFriends.filter((el, i) => i !== index));
  }

  return (
    <div>
      <h1>GirlFriends</h1>
      {showList ? (
        <div>
          <ul>
            {girlFriends.map((gf, index) => (
              <li key={index}>
                {gf}
                <button onClick={() => handleRemoveGF(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={() => setShowList(false)}>Hide List</button>
        </div>
      ) : (
        <div>
          <p>List is hidden. Click below to show.</p>
          <button onClick={() => setShowList(true)}>Show List</button>
        </div>
      )}
      <input id="gfInput" type="text" />
      <button onClick={handleAddGF}>Add Girlfriend</button>
    </div>
  );
}

export default App;
