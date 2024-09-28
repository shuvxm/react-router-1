
import { Header } from "./component/Header";
import { Outlet } from 'react-router-dom';

export const MainHeader = () => {
  return (
   <>
    <Header />
    <Outlet />
    
   
   </>
  )
}
