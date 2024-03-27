import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import PublicRouter from "./routes/PublicRouter";
import PrivateRouter from "./routes/PrivateRouter";
import Home from "./pages/user/Home";
import NotFound from "./pages/user/NotFound";
import ServiceChange from "./pages/user/ServiceChange";
import TableSize from "./pages/user/TableSize";
import System from "./pages/user/System";
import ServiceBuy from "./pages/user/ServiceBuy";
import ServiceSecure from "./pages/user/ServiceSecure";
import ServicePaymentMethods from "./pages/user/ServicePaymentMethods";
import ServiceShip from "./pages/user/ServiceShip";
import ServiceReturn from "./pages/user/ServiceReturn";
import CheckOrder from "./pages/user/CheckOrder";
import Login from "./pages/user/Login";
import DashBoard from "./pages/admin/DashBoard";
import NotFoundAdmin from "./pages/admin/NotFound";
import ListProducts from "./pages/admin/ListProducts";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRouter />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="chinh-sach-doi-tra" element={<ServiceChange />} />
          <Route path="chinh-sach-mua-hang" element={<ServiceBuy />} />
          <Route path="chinh-sach-bao-mat" element={<ServiceSecure />} />
          <Route path="chinh-sach-tra-hang" element={<ServiceReturn />} />
          <Route
            path="chinh-sach-giao-nhan-van-chuyen-kiem-hang"
            element={<ServiceShip />}
          />
          <Route
            path="phuong-thuc-thanh-toan"
            element={<ServicePaymentMethods />}
          />
          <Route path="bang-size" element={<TableSize />} />
          <Route path="kiem-tra-don-hang" element={<CheckOrder />} />
          <Route path="he-thong-cua-hang" element={<System />} />
        </Route>
        <Route path="/dang-nhap" element={<Login />} />
        <Route path="/admin" element={<PrivateRouter />}>
          <Route index element={<DashBoard />} />
          <Route path="*" element={<NotFoundAdmin />} />
          <Route path="danh-sach-san-pham" element={<ListProducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
