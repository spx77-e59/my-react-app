import { Link } from "react-router-dom";
import "./App.css";
import Image from "./Image";

function App() {
  return (
    <div>
      <Image />
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile/popeye">Popeye page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
