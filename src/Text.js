import { useEffect, useState } from 'react';

export const Text = () => {
    
    const [text, inputText] = useState('');
    useEffect(() => {
        console.log('Text.js mounted');
    
        // Function is ran when the component unmounts
        return () => {
            console.log('Text.js unmounted!')
        }
    
    }, [])
    // array right after function calls specifies what props or state changes we want to trigger the useEffect
    
    return (
        <div>
          <input type='text' onChange={(event) => {inputText(event.target.value)}}/>
          <p>{text}</p>
        </div>
    )
}