import { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '../components'
import { useStateContext } from '../contexts/ContextProvider'

const NavButton =  ( {title, customFun, icon, color, dotColor}) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type='button' onClick={ customFun } style={{ color }} className=' relative text-xl rounded-full p-3 hover:bg-light-gray '>
      <span style={{ background: dotColor }} className=" absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
        { icon }
    </button >
  </TooltipComponent>
)

const Navbar = () => {

  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();

  // to get the informaton of screen size when the initial load
  useEffect( () => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    }

    // Every time screen size changes, we call handleResize function
    window.addEventListener('resize', handleResize);

    // call handleResize to figure the initial width
    handleResize();

    // to remove size affect;
    return () =>  window.removeEventListener('resize',handleResize);
  }, [])

  
  useEffect( () => {
     if( screenSize <= 900 ) {
       setActiveMenu(false)
     } else {
       setActiveMenu(true);
     }
  }, [screenSize])
  

  return (
    <div className=' flex items-center justify-between p-2 md:mx-6 relative '>
       <NavButton 
          title="Menu" 
          customFun = { () => { setActiveMenu( (prevAcitveMenu) => !prevAcitveMenu )} } 
          color= {currentColor}
          icon= { <AiOutlineMenu /> }
       />

        <div className=' flex'>
          <NavButton 
            title="Cart" 
            customFun = { () => handleClick('cart') } 
            color= {currentColor}
            icon= { <FiShoppingCart /> }
          />
          <NavButton 
            title="Chat" 
            customFun = { () => handleClick('chat') } 
            color= {currentColor}
            icon= { <BsChatLeft /> }
            dotColor="#03C9D7"
          />
          <NavButton 
            title="Notification" 
            customFun = { () => handleClick('notification') } 
            color= {currentColor}
            icon= { <RiNotification3Line /> }
            dotColor="#03C9D7"
          />

          <TooltipComponent container="profile" position="BottomCenter">
            <div className=' flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' 
                onClick={ () => { handleClick('userProfile')} 
            }>
              <img src= {avatar} className = ' w-8 h-8 rounded-full' />
              <p>
              <span className=' text-gray-400 text-14'>Hi, </span> {' '} 
              <span className=' text-gray-400 font-bold ml-1 text-14'>Michel</span>
              </p>
              <MdKeyboardArrowDown className='text-gray-400 text-14' />
            </div>
          </TooltipComponent>

          { isClicked.cart &&  <Cart /> }
          { isClicked.chat &&  <Chat /> }
          { isClicked.notification &&   <Notification /> }
          { isClicked.userProfile  &&  <UserProfile /> }

      

        </div>

    </div>
  )
}

export default Navbar