import { Outlet } from "react-router-dom";
import { Header } from "./Header";

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">
      </footer>
    </div>
  );
};

export default Layout;