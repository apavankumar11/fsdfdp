import React from 'react'

const Child1 = ({key1,key2}) => {
    // const {key1,key2} = props
  return (
    <div>
      {/* <h1>{props.key1}</h1>
      <h1>{props.key2}</h1> */}
      <h1>{key1}</h1>
      <h1>{key2}</h1>
    </div>
  )
}

export default Child1
