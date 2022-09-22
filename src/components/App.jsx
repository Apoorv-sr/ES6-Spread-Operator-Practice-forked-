import React from "react";

function App() {
  let [itemValue, setItemValue] = React.useState("");
  let [items, setItems] = React.useState([]);

  function holdState(event) {
    let newValue = event.target.value;
    setItemValue(newValue);
  }

  function itemPush() {
    setItems(function (prevValue) {
      return [...prevValue, itemValue];
    });
    setItemValue("");
    // console.log();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={holdState}
          type="text"
          placeholder="Enter an item"
          value={itemValue}
        />
        <button onClick={itemPush}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* see  this is the importance of using hook elements here if our array would not had been a hook element/cmponent then we would not be able to represent the newly added item dynamically on the string i.e if it would had been a normal array then the react would had rendered only those elements which were present in the starting i.e if you would had initialized the array with some preexisting element and it would had been rendered once you would had loaded/rendered the page for the first time now if you would had tried to add some items from the interface i.e. web page then it would not been displayed because the array is not a hook element/component so it is unable to dynamically render itself but if we make items a hook array then whenever some changes will be detected into the array that change will be rendered dynamically,so hook components in react are used to bring dynamism i.e update a particular element or component dynamically if some changes occur in them automatically*/}
          {items.map(function (value) {
            return <li>{value}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
