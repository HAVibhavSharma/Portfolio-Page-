import "./App.css";
import Button from "./utilities/Button";
import NavBar from "./NavBar/NavBar";
const navcomponents = ["about", "projects"];
function App() {
  return (
    <>
      <NavBar navfields={navcomponents}></NavBar>
      <div>this is a div</div>
      <Button>Click me </Button>
    </>
  );
}

export default App;
