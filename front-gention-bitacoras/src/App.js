import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Enrutador } from "./app/Routes/Route.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
             <Enrutador />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
