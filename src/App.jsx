import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/register" element={ <Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={ <Register />} />
        <Route path="/write" element={ <Write /> } />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
