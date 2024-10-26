import React, { useState } from 'react'

const Conditionalrendering = () => {
    const [msg1,setMsg1] = useState('FrontEnd')
    const [msg2,setMsg2] = useState('BackEnd')
    const [flag,setFlag] = useState(true)
    const flagchange = ()=>{
        setFlag((flag)=>{
            return !flag;
        })
    }
   return (
    <div>
      {
        flag ? <h1>{msg1}</h1> : <h1>{msg2}</h1>
      }
      <button onClick={flagchange}>Change</button>
    </div>
  )
}

export default Conditionalrendering
