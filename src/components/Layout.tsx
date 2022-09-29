import { Outlet } from "react-router-dom";
import { Header } from "./common/Header";

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Outlet />
      </main>
      {/* <footer className="container">
        GitHub
      </footer> */}
    </div>
  );
};

export default Layout;