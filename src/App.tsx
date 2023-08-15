import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./Redux/Store"
import { decrement, increment, incrementByAmount } from "./Redux/Features/Counter/CounterSlice"

function App() {
 
    const {count} = useSelector( (state:RootState) => state.counter)
    const dispatch = useDispatch()

  return (
    <>
      <h1 className="text-blue-500 text-center font-bold my-10">Redux explore by typescript</h1>

      <div className="flex justify-center">
          <button onClick={()=> dispatch(increment())} type="button"  className="bg-purple-500 py-1 text-white px-2 rounded mr-10">Increment</button>
           <div>  {count}  </div>
            <button onClick={()=> dispatch(decrement())} type="button"  className="bg-blue-600 py-1 text-white px-2 rounded ml-10">Decrement</button>
      </div>

      <button onClick={()=> dispatch(incrementByAmount(5))} type="button"  className="bg-blue-600 py-1 text-white px-2 rounded ml-10"> incrementAmount</button>
    </>
  )
}

export default App
