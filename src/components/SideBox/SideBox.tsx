import { useState } from 'react';
import { Pokemon } from '../../interfaces/Pokemon';
import { SideBoxProps } from '../../interfaces/Props';
import {
  handleDragOver,
  handleDrop,
  handleDragStart,
} from '../../methods/handleDrags';
import { removeFromTeam } from '../../methods/general';
import '../../styles/sidebox.css';

const SideBox: React.FC<SideBoxProps> = (props) => {
  const [swappingDiv, setSwappingDiv] = useState<HTMLElement | undefined>();
  const [swappingPokemon, setSwappingPokemon] = useState<Pokemon>();

  return (
    <div className='container'>
      {props.team &&
        props.team.map((slot) => {
          return (
            <div
              key={slot.slot}
              onDragOver={handleDragOver}
              onDrop={(e) =>
                props.dragged &&
                props.team &&
                props.teamSlots &&
                handleDrop(
                  e,
                  props.dragged,
                  props.team,
                  props.setTeam,
                  props.teamSlots,
                  swappingDiv,
                  setSwappingDiv,
                  swappingPokemon
                )
              }
              className='teamSlot'
            >
              {slot?.specifics?.sprites && (
                <img
                  onClick={() => {
                    props.setFocusedPokemon(slot);
                    props.setFocusedSprite(slot.specifics?.sprites.front);
                  }}
                  onDoubleClick={() =>
                    props.team &&
                    removeFromTeam(slot, props.team, props.setTeam)
                  }
                  draggable='true'
                  src={slot.specifics.sprites.front}
                  width='100%'
                  onDragStart={(e) =>
                    props.dragged &&
                    handleDragStart(
                      e,
                      slot,
                      props.setDragged,
                      setSwappingDiv,
                      setSwappingPokemon
                    )
                  }
                />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default SideBox;
