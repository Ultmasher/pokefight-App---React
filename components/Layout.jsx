import { Outlet } from "react-router-dom";
//import Header from "../components/Header.jsx";
import '../styling/header.css';

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Outlet />  
      </main> 
    </>
  )
}

export default Layout;