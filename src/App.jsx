import { useState } from 'react'
import './App.css'

function App() {
  const [temperature, setTemperature] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    const centigrados = e.target.centigrados.value;
    setTemperature((centigrados*1.8)+32)
  }

  return (
    <div className="App">
      <h1>Conversor de °C a °F</h1>
      <h1>{temperature && temperature}</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" id="centigrados"/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default App
