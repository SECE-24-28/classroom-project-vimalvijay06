import './App.css'

function App() {
  const city = "kovai"
  const num = [11, 22, 33]
  return (
    <>
      <p>i am from {city}</p>
      <p>Lucky Numbers: {num.join(', ')}</p>
      <p>Comparison Result: {String(1 === 1)}</p>
      <p>{JSON.stringify({name:"vijay",age:40})}</p>
    </>
  )
}

export default App
