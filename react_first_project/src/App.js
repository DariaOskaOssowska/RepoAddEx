import './App.css'
import { Button } from './components/Buttons'
import { useState } from 'react'

function App() {
	const [value, setValue] = useState(0)

	const multipleBy2 = () => {
		setValue(value * 2)
  }
  
  const multipleBy4 = () => {
    setValue(value * 4)
  }

  const clear = () => {
    setValue(0)
  }

	return (
		<div className='App'>
			<button type='button' onClick={() => setValue(value - 1)}>
				Odejmij 1
			</button>
			{value}
			<button type='button' onClick={() => setValue(value + 1)}>
				Dodaj +1
			</button>

      <Button handleClick={multipleBy2} text={'Pomnóż x2'}/>
      <Button handleClick={multipleBy4} text={'Pomnóż x4'} />
      <Button handleClick={clear} text={'Zeruj'} />
		</div>
	)
}

export default App
