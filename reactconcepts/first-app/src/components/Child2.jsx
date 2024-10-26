import React from 'react'

const Child2 = ({bool,arr}) => {
  return (
    <div>
      <h2>{JSON.stringify(bool)}</h2>
      {
        arr.map((element,index)=>{
            return(<h2>key={index}  {element}</h2>)
        })
      }
    </div>
  )
}
export default Child2
