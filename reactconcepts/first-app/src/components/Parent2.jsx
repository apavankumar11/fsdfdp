import React, { useState } from 'react'
import Child2 from './Child2'
const Parent2 = () => {
    const [bool,setBool] = useState(true)
    const [arr,setArr] = useState([100,200,300,400,500,600])
  return (
    <div>
      <Child2 bool = {bool} arr={arr}></Child2>
    </div>
  )
}

export default Parent2
