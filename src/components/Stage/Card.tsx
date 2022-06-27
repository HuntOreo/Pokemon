import { CardProps } from '../../interfaces/Props';
import { handleStartBattle } from '../../methods/BattleMethods';
import Types from './Types';
import '../../styles/card.css';

const Card: React.FC<CardProps> = ({ pokemon }) => {
  return (
    <section className='card'>
      <button
        className='battleButton showBattleButton'
        onClick={(e) => handleStartBattle(e)}
      >
        Battle!
      </button>
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
