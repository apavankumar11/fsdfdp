import React from 'react'

const Events1 = () => {
    const fun_one = ()=>{
        console.log("Button1 Clicked")
    }
    const fun_two = (param1,param2)=>{
        param1 == 'klu' && param2 == 'klu@123' ? console.log('Login Success') : console.log('Login Failed')
    }
    
  return (
    <div>
      <button onClick={fun_one}>Button1</button>
      <hr />
      <button onClick={()=>fun_two('klu','klu@123')}>Button2</button>
    </div>
  )
}

export default Events1
