import { useSelector } from "react-redux"
import { RootState } from "./Redux/Store"

function App() {
 
    const {count} = useSelector( (state:RootState) => state.counter)

  return (
    <>
      <h1 className="text-blue-500">Redux explore by typescript</h1>

      <button type="button"  className="bg-purple-500 py-1 text-white px-2 rounded">Increment</button>
      <div>  {count}  </div>
      <button type="button"  className="bg-blue-600 py-1 text-white px-2 rounded">Decrement</button>
    </>
  )
}

export default App
