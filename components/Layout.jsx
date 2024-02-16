import Header from './Header'; // adjust the path if necessary
import Footer from './Footer'; // adjust the path if necessary
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
      <>
        <Header />
        <main>
          <Outlet />  
        </main> 
        <Footer />
      </>
    )
  }
  
  export default Layout;