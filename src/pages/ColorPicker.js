import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'

import { Header } from '../components'

const ColorPicker = () => {

  const change = (args) => {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
  }

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title="Color Picker" category="Page" />
      <div className=' text-center'>

         {/* This is Pen. Id is preview in css and it take a picture */}
        <div id='preview' />
        <div className=' flex justify-center gap-20 flex-wrap items-center'>
           <div>
             <p className=' text-2xl font-semibold mt-2 mb-4'>Inline Pallet</p>
             <ColorPickerComponent 
              //  id='inline-palette'
               inline = { true }
               mode='Palette'
               modeSwitcher = { false }
               showButtons = { false }
               change = {change}
             />
           </div>
            <div>
             <p className=' text-2xl font-semibold mt-2 mb-4'>Inline Pallet</p>
             <ColorPickerComponent 
               id='inline-palette'
               inline = { true }
               mode='Picker'
               modeSwitcher = { false }
               showButtons = { false }
               change = {change}
             />
           </div>
        </div>

      </div>
      </div>
  )
}

export default ColorPicker