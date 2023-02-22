import { ToastContainer } from 'react-toastify';
import { RouterProvider }from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import { routers } from "./routers";

import Header from "./ui/components/Header";
import Footer from "./ui/components/Footer";

function App() {
  return (
    <>
      <ToastContainer className='absolute' />
      <div className="App ">
        <Header />
        <RouterProvider router={routers} />
        <Footer />
      </div>
    </>
  )
}

export default App
