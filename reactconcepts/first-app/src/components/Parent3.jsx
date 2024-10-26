import React, { useState } from 'react'
import Child3 from './Child3';

const Parent3 = () => {
    const [obj,setObj] = useState({
        key1:'KL University',
        key2:'FDP'
    });
  return (
    <div>
      <Child3 obj={obj}></Child3>
    </div>
  )
}

export default Parent3
