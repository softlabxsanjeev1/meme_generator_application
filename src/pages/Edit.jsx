import React ,{useState , createRef }from 'react'
import Text from '../components/Text';
import { useSearchParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { exportComponentAsJPEG } from 'react-component-export-image';


// hello
export default function EditPage() {

  const[params] = useSearchParams();
  const [count, setCount] = useState(0);

  const memeRef = createRef();

//Use this function to add text
  const addText = () =>{
    setCount(count+1)
  };

  return (
    <div>
    {/* connet this div to ref */}
    <div 
    style={{width: "500px",
    border: "1px solid" }}
    ref={memeRef}
    className='meme mt-5 mb-5'
    >
      <img src={params.get("url")} width="250px"/>

      {Array(count).fill(0).map((e) => (
        <Text/>
      ))}
      
    </div>
    <Button onClick={addText}>Add Text</Button>
    <Button variant="success" onClick={(e) => exportComponentAsJPEG(memeRef)}>
    Save</Button>
    </div>
    
  );
};



