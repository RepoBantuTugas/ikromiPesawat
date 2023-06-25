import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Lupasandi from "./pages/Lupasandi";
import Register from "./pages/Register";
import Otp from "./pages/Otp";
import SearchResult from "./pages/SearchResult";
import DetailAccount from "./pages/Account";
import { useState } from "react";
import Auth from "./private/auth";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  console.log(token, "tokenkuu");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home tokenLogin={token} />} />
          <Route
            path="/login"
            element={<Login tokenLoginFromApp={setToken} />}
          />
          <Route path="/lupasandi" element={<Lupasandi />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verifikasi-otp" element={<Otp />} />
          <Route
            path="/search_result"
            element={<SearchResult tokenLogin={token} />}
          />
          <Route
            path="/account"
            element={
              <Auth>
                <DetailAccount />
              </Auth>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
