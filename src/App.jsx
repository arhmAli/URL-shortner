import { useState } from 'react'

function App() {
  const [value,setValue]=useState('');
  const [linker,setLinker]=useState([]);
  const [count,setCount]=useState('dawdx2r');
  const handleClick=()=>{
    setLinker([...linker,{link:value,count:count}]);
    setValue('');
    setCount(generateRandomCount())
  }
  const handleChange=(e)=>{
    setValue(e.target.value)
  }
  const generateRandomCount = () => {
    const length = 6; 
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let res='';
    for (let i=0;i<=length;i++){
      res+=characters.charAt(Math.floor(Math.random()*100))
    }
    return res; 
  };
  const pattern=`https://shortened.in/`;
  return (
    <>
      <div>
        <h3>Enter a link</h3>
       <input
       type='text'
       value={value}
       onChange={handleChange}
       />
       <button onClick={handleClick}>Short</button>
       <ul>
        {linker.map((item,ind)=>(
          <li key={ind}><a href={item.link}>{`${pattern}${item.count}`}</a></li>
        ))}
       </ul>
      </div>
    </>
  )
}

export default App
