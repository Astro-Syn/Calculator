import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('');

  return (
    <>
      <div className='calculator'>
        <form action="">
          <div>
            <input className='main' type='text' value={value}/>
          </div>
          <div>
            <input type='button' className='btn' value='AC' onClick={e => setValue('')}/>
            <input type='button' className='btn' value='DEL' onClick={e => setValue(value.slice(0, -1))}/>
            <input type='button' className='btn' value='.' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' className='btn' value='/' onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type='button' className='btn' value='7' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' className='btn' value='8' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' className='btn' value='9' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' className='btn' value='*' onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type='button' className='btn' value='4' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' className='btn' value='5' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' className='btn' value='6' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' className='btn' value='+' onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type='button' className='btn' value='1' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' className='btn' value='2' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' className='btn' value='3' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' className='btn' value='-' onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type='button' className='btn' value='00' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' className='btn' value='0' onClick ={e => setValue(value + e.target.value)}/>
            <input type='button' className='btn' id='equal' value='=' onClick={e => setValue(eval(value))}/>
          </div>

        </form>
      </div>
    </>
  )
}

export default App
