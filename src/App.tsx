import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Users from "./Components/Users";
import Form from "./Components/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
