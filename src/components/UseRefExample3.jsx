//// !!! DEMO OF REMOVING MEMORY LEAK WARNING (old ver. of React) !!! ////

// React have removed this warning from React 18 and +
// No warning about setState on unmounted components: Previously, React warned about memory leaks when you call setState on an unmounted component. This warning was added for subscriptions, but people primarily run into it in scenarios where setting state is fine, and workarounds make the code worse. We've removed this warning.



import { useState } from "react"
import Todo from "./Todo"

function UseRefExample3() {
    const [showTodo, setShowTodo] = useState(true)

  return (
    <div>
        {showTodo && <Todo />}
        <button className="btn btn-primary" onClick={() => setShowTodo(!showTodo)}>Toggle Todo</button>
    </div>
  )
}

export default UseRefExample3