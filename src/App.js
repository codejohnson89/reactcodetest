import React, {useEffect, useState} from 'react';
import './App.css';

import axios from 'axios';

function App() {
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      setSelected(res.data);
    });
  }, []);

  return (
    <div className="App">
      <div>Names below</div>
      <input
        type="text"
        value={search}
        onChange={e => {
          e.preventDefault();
          setSearch(e.target.value);
        }}
      />
      {/* Grabs the names first of each object then searches for anything matching the search results */}
      {selected.filter(select => select.name.toLowerCase().includes(search), selected)
          .map(select => <div className="list">{select.name}</div>)}
          {/* Chaining the .map function to display the remaining names that includes the text in the input field  */}
    </div>
  );
}

export default App;
