// import { Fragment } from "react";
import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //   items = [];
  const handleClick = (event: MouseEvent) => console.log(event);
  //this is an event handler
  //we will not add () after the name of handleclick in the down because we r not calling it immediately. calling it is for after clicking.so we will write the name without prantecis
  return (
    <>
      <h1> List Group</h1>
      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {" "}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
