import { useState } from 'react';
import './Counter.scss';
import right from '/src/assets/img/right.png';

export default function Counter({onChangeHandler}){
    const [val, setVal] = useState(1)

    function onChange(e){
        setVal(e.value)
        onChangeHandler(e.target.value)
    }

    return (
        <div className='counter'>
            <button className='counter-left' style={{backgroundImage:`url('${right}')`}}></button>
            <input type='text' value={val} onChange={onChange}></input>
            <button className='counter-right' style={{backgroundImage:`url('${right}')`}}></button>
        </div>
    )
}