import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Home = () => {

  const navigate = useNavigate();

  const gotoContact = () =>{
    navigate("/about");
  };
  return (
   <>
    <section>
      <h1>Home Page</h1>
      <button onClick={ gotoContact}>go to about page</button>
    </section>

   
   </>
  )
}
