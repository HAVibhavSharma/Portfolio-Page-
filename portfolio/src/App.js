// import Button from "./utilities/Button";

import Body from "./Content/Body";
import NavBar from "./NavBar/NavBar";
const navcomponents = ["PROJECTS", "TALKS", "BLOG", "CONTACT"];
function App() {
  return (
    <>
      <NavBar navfields={navcomponents}></NavBar>
      <Body />
    </>
  );
}

export default App;
