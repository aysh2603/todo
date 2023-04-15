import React from "react";

function Todolist(props) {
  let date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  console.log(date);
  return (
    <li className="list-item">
      {props.item}
      <span className="icons">
        <i
          className="fa-solid fa-trash-can icon-delete"
          onClick={(e) => {
            props.deleteItem(props.index);
          }}
        ></i>
        <p>
          {day}/{month + 1}/{year}
        </p>
      </span>
    </li>
  );
}

export default Todolist;
