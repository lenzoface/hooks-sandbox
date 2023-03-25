import { useState, useEffect, useRef, useMemo } from "react"

function UseMemoExample() {
    const [num, setNum] = useState(1)
    const [inc, setInc] = useState(0)

    // const sqrt = getSqrt(num)
    
    // Button will be pressed and 'renders' will change, because the num is still the same, so no need to call getSqrt() func again:
    const sqrt = useMemo(() => getSqrt(num), [num])

    const renders = useRef(1)

    useEffect(() => {
        renders.current = renders.current + 1
    })

    const onClick = () => {
        setInc((prevState) => {
            console.log(prevState + 1);
            return prevState + 1
        })
    }

    return (
        <>
            <input
                type="number"
                value={num}
                onChange={(e) => setNum(e.target.value)}
                className="form-control w-25"
            />

            <h2 className="my-3">
                The sqrt of {num} is {sqrt}
            </h2>

            <button className="btn btn-primary" onClick={onClick}>
                Re Render
            </button>
            <h3>Renders: {renders.current}</h3>
        </>
    )
}

function getSqrt(n) {
    for(let i = 0; i <= 10000; i++) {
        console.log(i);
    }

    console.log('Expensive Function Called!');
    return Math.sqrt(n)
}

export default UseMemoExample