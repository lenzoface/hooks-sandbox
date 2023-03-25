//// !!! DEMO OF REMOVING MEMORY LEAK WARNING (old ver. of React) !!! ////

// React have removed this warning from React 18 and +
// No warning about setState on unmounted components: Previously, React warned about memory leaks when you call setState on an unmounted component. This warning was added for subscriptions, but people primarily run into it in scenarios where setting state is fine, and workarounds make the code worse. We've removed this warning.

// so no more need to use 'useRef' in this case. Remove all of 'isMounted' to get the data again after pressing the button


import { useState, useEffect, useRef } from "react"

function Todo() {
    const [loading, setLoading] = useState(true)
    const [todo, setTodo] = useState({})

    const isMounted = useRef(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then((data) => {
            setTimeout(() => {
                if(isMounted.current) {
                    setTodo(data)
                    setLoading(false)
                }
            }, 3000)
        })

        return () => {
            isMounted.current = false
        }
    }, [isMounted])

  return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
}

export default Todo