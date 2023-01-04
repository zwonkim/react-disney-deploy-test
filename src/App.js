import { Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import LoginPage from "./pages/LoginPage/index";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage/index";
import DetailPage from "./pages/DetailPage/index";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LoginPage />}></Route>
        <Route path='main' element={<MainPage />}></Route>
        <Route path='search' element={<SearchPage />}></Route>
        <Route path=':movieId' element={<DetailPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
