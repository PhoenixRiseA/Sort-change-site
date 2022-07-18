import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items, sortChange } = props;
  console.log(sortChange);
  const sortedList = useMemo(() => {
    console.log("Items sorted");
    if (sortChange === false) {
      console.log("before sorting", items);
      return items.sort((a, b) => a - b);
    } else {
      let newItems = items.sort((a, b) => a - b);
      console.log("reverse", newItems);
      return newItems.reverse();
    }
  }, [items, sortChange]);
  console.log("DemoList RUNNING");

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
