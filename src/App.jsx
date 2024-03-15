import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

  // normal function
  function handleClick(){
    alert('button clicked');
  }

  // arrow function
  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h1>React Core Concepts 2</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      {/* {normal HTML}
      <button onclick="handleClick()">Click Me</button> */}
      
      {/* for react */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() =>{alert('third clicked')}}>third</button>
      {/* vejailla */}
      <button onClick={() =>{addToFive(3)}}>Four</button>
    </>
  )
}

export default App
