import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [sortChange, setSortChange] = useState(false);

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const sortChangeHandler = useCallback(() => {
    console.log(sortChange);
    if (sortChange === false) {
      console.log("Changing to descending");
      setSortChange(true);
    } else {
      setSortChange(false);
    }
  }, [sortChange]);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} sortChange={sortChange} />
      <div className="btn">
        <Button onClick={changeTitleHandler}>Change List Title</Button>
      </div>

      {sortChange ? (
        <Button onClick={sortChangeHandler}>Change to Ascending</Button>
      ) : (
        <Button onClick={sortChangeHandler}>Change to Descending</Button>
      )}
    </div>
  );
}

export default App;
