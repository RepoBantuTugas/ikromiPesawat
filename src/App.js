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
import RiwayatPemesanan from "./pages/Riwayat";
import CardResult from "./components/search-result/CardResult";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import DetailPesanan from "./components/DetailPesanan";
import PaymentSuccess from "./components/Paymentsucces";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  console.log(token, "tokenkuu");
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Home, logis & regis */}
          <Route path="/" element={<Home tokenLogin={token} />} />
          <Route
            path="/login"
            element={<Login tokenLoginFromApp={setToken} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/verifikasi-otp" element={<Otp />} />
          <Route path="/lupasandi" element={<Lupasandi />} />

          {/* Pages Search Result */}
          <Route
            path="/search_result"
            element={<SearchResult tokenLogin={token} />}
          />

          {/* 3 Menu navbar is login : History, Notification & Account */}
          <Route path="/riwayat" element={<RiwayatPemesanan />} />
          <Route
            path="/account"
            element={
              <Auth>
                <DetailAccount />
              </Auth>
            }
          />

          {/* Checkout */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
