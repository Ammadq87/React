import './App.css';
import {useState, useEffect} from 'react';
import { Text } from './Text';
import Axios from 'axios';


/*

! NOTES: Component Lifecylce & useEffect Hooks

- 3 stages:
  - mounting stage (appearing onscreen)
  - updating stage
  - unmounting stage (disappears)

useEffect Hook:
- control what is happening depends on which stage the component lifecycle is
- called when component is being updated
- Example Use:
  - make api call as soon as component appears

*/


function App() {

  const [catFact, setCatFact] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [predictedAge, setPredictedAge] = useState(0);

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    })
  }

  useEffect(() => {
    console.log('Api Call:');
    fetchCatFact();
    return () => {
      console.log('Api Call Finished');
    }
  }, []);

  const [showText, toggleText] = useState(false);
  const displayText = () => {
    toggleText(!showText);
  }


  const getAge = () => {
    Axios.get(`https://api.agify.io/?name=${nameInput}`).then((res) => {
      setPredictedAge(res.data.age);
    })
  }

  return (
    <div className="App">
      <button onClick={displayText}>Show Text</button>
      {showText && <Text/>}
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>

      <button onClick={getAge}>Predict Age</button>
      <input type='text' onChange={(event) => {setNameInput(event.target.value)}}/>
      <p>{predictedAge}</p>
    </div>
  );
}

export default App;