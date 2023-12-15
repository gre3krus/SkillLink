import "./components/app/styles/App.css";
import Main from "./components/pages/Main";
import Login from "./components/pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/SkillLink" element={<Main />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
