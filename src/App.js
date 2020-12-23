import React, {useReducer} from "react";
import './App.css';

const App = () => {
  const[checked, toggle] = useReducer(
    (checked) => !checked, //useReducer puts the function in second part instead of writing out whole function
    false
    );

//const toggle = () => {
  //setChecked((checked) => !checked)
  

  
  return (
<>
<input 
type="checkbox" 
value={checked}
 onChange={toggle}/>
<p>{checked ? "checked" : "not checked"}</p>
</>
  );
};

export default App;