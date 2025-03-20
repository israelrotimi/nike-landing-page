import React from 'react'

const Button = ({ text, iconUrl, primary=true }) => {
  return (
    <button className={`flex justify-center gap-2 rounded-full px-5 py-3 w-40 ${primary ? 'bg-coral-red text-white' : 'info-text border border-gray-500'}`}>
        {text}
        {iconUrl && 
        (<img src={iconUrl} alt="" />)}
      </button>
  )
}

export default Button