//PascalCasing  is how ypu write components name
function Message() {
  //this is jsx = javascript XML
  const name = "Mahtab";
  if (name) return <h1> Hello {name} </h1>;
  return <h1> Hello World </h1>;
}
export default Message;
