import { useState, useEffect } from 'react'
const Counter = () => {

    const [counter, setCounter] = useState(0)
    const add = () => setCounter((oldCounter) => oldCounter + 1)

    useEffect(() => {


        document.addEventListener('mousedown', add)
        return () => {
            document.removeEventListener("mousedown", add)
        }

    }, [counter])



    return (

        <div>

            <p>Counter{counter}</p>

        </div>
    )
}
export default Counter;