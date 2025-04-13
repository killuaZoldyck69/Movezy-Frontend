import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <h1 class="text-3xl text-green-300 font-bold underline">Hello world!</h1>
      <Button className="cursor-pointer">Click Me</Button>
      <div className="">
        <img className="w-44 h-44 border-2" src="/src/assets/logo.png" alt="" />
      </div>
    </>
  );
}

export default App;
