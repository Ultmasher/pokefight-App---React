import { Outlet } from "react-router-dom";
import Header from "../styling/header.css";
import '../styling/header.css';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />  
      </main> 
    </>
  )
}

export default Layout;