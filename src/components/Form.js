import React, { useState } from "react";

function Form() {

  //current state - firstName
  //setFirst - function that is used to update our state.
  //useState - set the initial state to an empty string
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [paragraph,setParagraph]  = useState([]);

  function nameSubmit  (e){
    e.preventDefault();
      if(firstName&&lastName){
        setFirst("")
        setLast("")
        //takes the string of firstname and lastname then returns both
        setParagraph(()=>[firstName,lastName])
      }
  }

  return (
    <div>
    <form onSubmit={nameSubmit}>
      <label>
        First Name:
        <input
          value={firstName}
          name="firstName"

          //onchange event occurs when the value of an element has been changed.
          onChange={(e) => {
             console.log(e.target.value);
            setFirst(e.target.value);
          }}
          type="text"
          autoComplete="off"
        />
      </label>
      <label>
        Last Name:
        <input
          value={lastName}
          name="lastName"
          onChange={(e) => {
             console.log(e.target.value);
            setLast(e.target.value);
          }}
          type="text"
          autoComplete="off"
        />
      </label>
      <button type="submit" >
        Submit
      </button>
    </form>

    {
      paragraph.map((paragraph)=><div>
        <p>{paragraph}  </p>
      </div>)
    }
    </div>
    //map() function iterates over an array
    //and manipulate or change data items.
  );
}
export default Form;