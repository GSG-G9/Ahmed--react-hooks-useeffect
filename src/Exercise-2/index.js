import { useState, useEffect } from 'react'

const MouseMove = () => {
    const W = window.innerWidth



    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const setXW = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        document.addEventListener('mousemove', setXW)
        return () => {
            document.removeEventListener("mousemove", setXW)
        }

    }, [x, y])
   // const styleObj = { backgroundColor: x > W / 2 ? "blue" : "tomato" }



    return (

        <div style={{ backgroundColor: x > W / 2 ? "blue" : "tomato",width:'100px' ,hight:'100hv'}}>


            <p>I am now on x:{x} and Y:{y} </p>

        </div>
    )
}
export default MouseMove;