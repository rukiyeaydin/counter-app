import { React , useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, decrementByAmount } from '../redux/counter/counterSlice';

const Counter = () => {
    const countValue = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(2);

  return (
    <div>
      <h1>{countValue}</h1>
      <button style={{backgroundColor:"white", padding:"5px",margin:"10px", cursor:"pointer"}} onClick={() => dispatch(decrement())}>Azalt</button>
      <button style={{backgroundColor:"white", padding:"5px",margin:"10px", cursor:"pointer"}} onClick={() => dispatch(increment())}>Arttır</button>
      <div className="">
        <button style={{backgroundColor:"white", padding:"5px", cursor:"pointer"}} onClick={() => dispatch(decrementByAmount(amount))}>Miktara göre azalt</button>
        <input type="number"  style={{padding:"5px", marginInline:"2px"}} value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <button style={{backgroundColor:"white", padding:"5px", cursor:"pointer"}} onClick={() => dispatch(incrementByAmount(amount))}>Miktara göre arttır</button>
      </div>
    </div>
  )
}

export default Counter
