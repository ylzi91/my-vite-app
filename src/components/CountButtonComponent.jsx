import { useState } from "react"


function CountButtonComponent (props){
    const [count, setCount] = useState(0)
    return (
        <button onClick={() => setCount((count) => count + props.operator)}>
        {props.nameButton} {count}
      </button>
    )
}

export default CountButtonComponent