import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const main_title: string = "My System";
  return (
    <>
      <Navbar my_title={main_title} />
    </>
  );
}

export default App;
