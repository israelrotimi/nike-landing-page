import React from 'react'

const Button = ({ text, iconUrl }) => {
  return (
    <button className="flex gap-2 rounded-full px-5 py-3 bg-coral-red text-white w-36">
        {text}
        {iconUrl && 
        (<img src={iconUrl} alt="" />)}
      </button>
  )
}

export default Button