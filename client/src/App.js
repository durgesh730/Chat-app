import "./App.css";
import Homepage from "./Pages/Homepage";
import { Routes, Route } from 'react-router-dom';
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/chats" element={<Chatpage />} />
      </Routes>
    </>
  );
}

export default App;
