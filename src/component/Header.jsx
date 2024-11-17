import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { disablePageScroll ,enablePageScroll } from 'scroll-lock';
import { brainwave } from "../assets";
import { navigation } from '../constants';
import Button from './Button.jsx';
import MenuSvg from "../assets/svg/MenuSvg.jsx";
import {HamburgerMenu}  from "./design/Header.jsx"



function Header() {
  const pathname = useLocation();
  const [openNav ,setOpenNav] =useState(false);
const toogleNav =()=>{
  setOpenNav(!openNav)
  if (openNav==true) {
    disablePageScroll
  }else{
    enablePageScroll
  }
}
const handleclick = () =>{
  if(!openNav) return;
  enablePageScroll();
  setOpenNav(false)
}

  return (
     <div className={`fixed w-full top-0 z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm  ${ openNav ? 'bg-n-8' :"bg-n-8/90 backdrop-blur-sm" } `  }>
        <div className='flex items-center px-5 lg:px-7.5 xl-px-12 py-7'>
            <a className='block w-[12rem] xl:mr-8' href='#hero'>
            <img src={brainwave}  width={190} height={40} alt="brainwave" />
            </a>
            <nav className={` ${openNav ? 'flex' :"hidden"} fixed left-0 right-0 bottom-0 top-[5rem] bg-n-8 lg:flex lg:mx-auto lg:bg-transparent lg:static`}>
  <div className='relative z-3 flex flex-col items-center justify-center m-auto lg:flex-row'>
    {navigation.map((item) => (
      <a 
        key={item.id} 
        href={item.url} 
        className={`block relative font-code text-3xl uppercase text-n-1 transition-colors hover:text-color-1  ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-3 md:py-2 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url===pathname.hash ? 'z-2 lg:text-n-1 ': 'lg:text-n-1/50'} lg:leading-5 lg:hover:text-n-1 xl:p-x-12`}
        onClick={handleclick}
      >
        {item.title}
      </a>
    ))}

    
  </div>
  <HamburgerMenu />
</nav>


   <a href="#sign-up" className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block '>New</a>
    <Button className="hidden lg:flex" href="#login">Sign</Button>

       <Button className="ml-auto lg:hidden" px="px-3"onClick={toogleNav}  >
        <MenuSvg   openNavigation={openNav}/>
       </Button>
                
            </div>
            
        </div>

    
    
  )
}

export default Header