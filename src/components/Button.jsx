import React from 'react'

function Button({  
  lable,
  submit
}) {

  return (
    <button  type={submit} class="btn-fill cursor-Pointer d-flex align-items-center">{lable}</button>
  )
}

export default Button