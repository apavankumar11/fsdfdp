import React from 'react'
const SubChild3 = ({obj}) => {
    const {key1,key2} = obj
  return (
    <div>
      <h1>{key1}</h1>
      <h2>{key2}</h2>
    </div>
  )
}

export default SubChild3
