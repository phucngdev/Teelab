import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import PublicRouter from "./routes/PublicRouter";
import PrivateRouter from "./routes/PrivateRouter";
import Home from "./pages/user/Home";
import NotFound from "./pages/user/NotFound";

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
        </Route>
        <Route path="/admin" element={<PrivateRouter />}></Route>
      </Routes>
    </>
  );
}

export default App;
