import React, { useState } from 'react'

export interface IProps {}

function Foo() {
 const [count, setCount] = useState<number>(0)
 return (
  <div>
   Foo~~~~~!!!!!{count}
   <button type="button" onClick={() => setCount(count + 1)}>
    +
   </button>
  </div>
 )
}

export default Foo
