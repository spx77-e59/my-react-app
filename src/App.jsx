// import { useState } from "react";
import "./App.css";
// import Greeting from "./Greetings";
// import TodoList from "./TodoList";
// import Button from "./Button";
// import CustomInput from "./CustomInput";
import Clock from "./Clock";

// const todos = [
//   { task: "mow the yard", id: crypto.randomUUID() },
//   { task: "take out trash", id: crypto.randomUUID() },
//   { task: "feed the cats", id: crypto.randomUUID() },
// ];

// const animals = ["Lion", "Cow", "Snake", "Lizard"];

// const colors = ["red", "green", "yellow"];

function App() {
  // const [bgcolor, setbgcolor] = useState(colors[0]);
  // const handleClick = (color) => {
  //   // window.location.href = url;
  //   setbgcolor(color);
  // };
  return (
    // <div style={{ backgroundColor: bgcolor }}>
    //   <CustomInput />
    //   <p>Yoi!</p>
    //   <Greeting animals={animals} />
    //   <TodoList todos={todos} />

    //   <Button
    //     text="yeah"
    //     fontSize={20}
    //     color="green"
    //     handleClick={handleClick}
    //     // url="https://www.fb.com"
    //     bgcolor={colors[1]}
    //   />
    //   <Button
    //     text="nah"
    //     fontSize={12}
    //     color="red"
    //     handleClick={handleClick}
    //     // url="https://www.youtube.com"
    //     bgcolor={colors[2]}
    //   />
    //   <Button handleClick={handleClick} />
    // </div>
    <Clock />
  );
}

export default App;
