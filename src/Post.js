import { VscDebugStop } from 'react-icons/vsc'

export const Post = () => {
  return <button onClick={() =>  {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
  }}> 
  <VscDebugStop/>
    Traer datos
  </button>
}