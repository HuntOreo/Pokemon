import { Pokemon } from '../interfaces/Pokemon';
import { handleDragOver, handleDrop } from '../methods/Drags';
import '../styles/sidebox.css';

const SideBox = ({ dragged }: { dragged: Pokemon | undefined }) => {
  return (
    <div className='container'>
      <div
        onDragOver={handleDragOver}
        onDrop={(e) => dragged && handleDrop(e, dragged)}
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
