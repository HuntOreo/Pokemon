import { CardProps } from '../../interfaces/Props';

const Card: React.FC<CardProps> = ({ pokemon }) => {
  return (
    <section className='card'>
      <div className='titles'>
        <h3>{pokemon?.name && pokemon.name}</h3>
        <h4>{pokemon?.id && pokemon.id}</h4>
      </div>
      <div className='stats'>
        <p>weight: {pokemon?.specifics?.weight && pokemon.specifics.weight}</p>
        <p>game: {pokemon?.specifics?.game && pokemon.specifics.game}</p>
      </div>
    </section>
  );
};

export default Card;
