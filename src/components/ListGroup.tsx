// import { Fragment } from "react";
function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <h1> List Group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li> {item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
