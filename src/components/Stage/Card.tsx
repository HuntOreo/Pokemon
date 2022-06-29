import { Link } from 'react-router-dom';
import { CardProps } from '../../interfaces/Props';
import Types from './Types';

const Card: React.FC<CardProps> = ({ pokemon }) => {
  return (
    <section className='card'>
      <Link to='/battle'>
        <button>Battle!</button>
      </Link>
      <div className='titles'>
        <h3>{pokemon?.name && pokemon.name}</h3>
        <h4>{pokemon?.id && pokemon.id}</h4>
      </div>
      <div className='stats'>
        <p>weight: {pokemon?.specifics?.weight && pokemon.specifics.weight}</p>
        <p>game: {pokemon?.specifics?.game && pokemon.specifics.game}</p>
      </div>
      <Types types={pokemon?.specifics?.type} />
    </section>
  );
};
export default Card;
