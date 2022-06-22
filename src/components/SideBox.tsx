import { handleDragOver, handleDrop } from '../methods/Drags';
import '../styles/sidebox.css';

const SideBox = () => {
  return (
    <div className='container'>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className='sidePokemon'
      ></div>
      <div className='sidePokemon'></div>
      <div className='sidePokemon'></div>
      <div className='sidePokemon'></div>
      <div className='sidePokemon'></div>
      <div className='sidePokemon'></div>
    </div>
  );
};

export default SideBox;
