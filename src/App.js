import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import VideoPage from "./components/VideoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/video" element={<VideoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
