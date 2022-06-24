import { FocusedProps } from '../../interfaces/Props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { handleDragStart } from '../../methods/Drags';
import { fetchPokemon, rotate } from '../../methods/Methods';

const Focused: React.FC<FocusedProps> = (props) => {
  return (
    <div className='focused' draggable='true'>
      <img
        id='current'
        draggable='true'
        onDragStart={(e) =>
          props.focusedPokemon &&
          handleDragStart(e, props.focusedPokemon, props.setDragged)
        }
        onDoubleClick={() =>
          fetchPokemon(
            props.setFocusedPokemon,
            props.setFocusedSprite,
            props.amount
          )
        }
        src={props.focusedSprite && props.focusedSprite}
        width='100%'
        alt='the pokemon being viewed.'
      />
      <FontAwesomeIcon
        onClick={() =>
          props.focusedPokemon &&
          props.focusedSprite &&
          rotate(
            props.focusedPokemon,
            props.focusedSprite,
            props.setFocusedSprite
          )
        }
        className='rotate'
        icon={faRotateRight}
      />
    </div>
  );
};

export default Focused;
