import React from 'react'

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({color, borderRadius, bgColor, text, size, bgHoverColor }) => {

const { setIsClicked, initialState } = useStateContext();
// console.log(initialState)

  return (
    <button
    onClick={() => setIsClicked(initialState)}
    type='button' 
    style={{ backgroundColor: bgColor, color: color, borderRadius: borderRadius, }}
    className={`text-${size} p-3 hover:drop-shadow-xl w-full`}
    >
      {text} 
    </button>
  )
}

export default Button