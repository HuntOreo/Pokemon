import { useEffect } from 'react';
import { CardProps, FocusedProps, StageProps } from '../../interfaces/Props';
import Card from './Card';
import Focused from './Focused';
import '../../styles/stage.css';

const Stage: React.FC<StageProps> = (props) => {
  const focusedProps: FocusedProps = {
    focusedPokemon: props.focusedPokemon,
    setFocusedPokemon: props.setFocusedPokemon,
    setFocusedSprite: props.setFocusedSprite,
    focusedSprite: props.focusedSprite,
    setDragged: props.setDragged,
    dragged: props.dragged,
    amount: props.amount,
  };

  const cardProps: CardProps = {
    pokemon: props.focusedPokemon,
  };

  useEffect(() => {}, []);

  return (
    <div className='stage'>
      <Focused {...focusedProps} />
      <Card {...cardProps} />
    </div>
  );
};

export default Stage;
