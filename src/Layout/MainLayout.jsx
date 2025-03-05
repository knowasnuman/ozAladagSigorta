import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import LogoGiris from '../Components/LogoGiris/LogoGiris'



const MainLayout = ({children}) => {
  return (
    <>
      <LogoGiris/>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}

export default MainLayout
