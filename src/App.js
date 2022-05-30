
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Navbar, Sidebar, ThemeSetting ,Footer} from './components';
import {Calendar, ColorPicker, ColorMapping, Customers, Ecommerce, Editor, Employees, Kanban, Orders, Area, Bar, Financial, Line, Pie, Pyramid, Stacked } from './pages'

import { useStateContext } from './contexts/ContextProvider';
import './App.css'


function App() { 

  let { activeMenu, themeSetting, setThemeSetting, currentColor, currentMode }  = useStateContext();

  
  return (
    <div className = { currentMode === "Dark" ? "dark" : ''}>
      <BrowserRouter>
         <div className='flex relative dark:bg-main-dark-bg'>
           
            {/* Setting icon on the right bottom coner */}
           <div className='fixed bottom-4 right-4' style={{ zIndex: 1000 }}>
             <TooltipComponent content="Settings" position='TopCenter'>
               <button 
                   type='button' 
                   className=' p-3 text-3xl hover:drop-shadow-xl hover:bg-light-gray text-white' 
                   style={{ background : currentColor, borderRadius: '50%' }}
                   onClick = { () => setThemeSetting(!themeSetting) }
                   >
                     <FiSettings />
               </button>
             </TooltipComponent>
           </div>

           { activeMenu ? (
             <div className=' w-72 fixed dark:bg-secondary-dark-bg bg-white sidebar'>
               <Sidebar />
             </div>
           ) : ( 
             <div className=' w-0 dark:bg-secondary-dark-bg'>
                <Sidebar />
             </div> 
           )}

           <div 
             className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`} >
             <div className=' fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Navbar />
             </div>
           

             <div>

              { themeSetting &&  <ThemeSetting />}

              <Routes>
                {  /* Dashboard */  }
                    <Route path='/' element={ <Ecommerce /> } />
                    <Route path='/ecommerce' element={ <Ecommerce /> } />

                {  /* Pages */  }
                <Route path='/orders' element={ <Orders /> } /> 
                <Route path='/employees' element={ <Employees /> } />
                <Route path='/customers' element={ <Customers /> } />

                {  /* Apps */  }
                <Route path='/kanban' element={ <Kanban />}  />
                <Route path='/editor' element= { <Editor /> } />
                <Route path='/calendar' element= { <Calendar  /> } />
                <Route path='/color-picker' element= { <ColorPicker /> } />

                {  /* Charts */  }
                <Route path='/line' element= { <Line /> } />
                <Route path='/area' element= { <Area /> } />
                <Route path='/bar' element= { <Bar  /> } />
                <Route path='/pie' element= { <Pie /> } />
                <Route path='/financial' element= { <Financial  /> } />
                <Route path='/color-mapping' element= { <ColorMapping  /> } />
                <Route path='/pyramid' element= { <Pyramid /> } />
                <Route path='/stacked' element= { <Stacked  /> } />

              </Routes>

             </div>
           </div>
         </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
