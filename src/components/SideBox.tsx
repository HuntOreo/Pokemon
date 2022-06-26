import { useState } from 'react';
import { Pokemon } from '../interfaces/Pokemon';
import { SideBoxProps } from '../interfaces/Props';
import { handleDragOver, handleDrop, handleDragStart } from '../methods/Drags';
import { removeFromTeam } from '../methods/Methods';
import '../styles/sidebox.css';

const SideBox: React.FC<SideBoxProps> = (props) => {
  const [swappingDiv, setSwappingDiv] = useState<HTMLElement | undefined>();
  const [swappingPokemon, setSwappingPokemon] = useState<Pokemon>();
  const [team, setTeam] = useState<Pokemon[]>([
    {
      name: '',
      id: 0,
      slot: 1,
    },
    {
      name: '',
      id: 0,
      slot: 2,
    },
    {
      name: '',
      id: 0,
      slot: 3,
    },
    {
      name: '',
      id: 0,
      slot: 4,
    },
    {
      name: '',
      id: 0,
      slot: 5,
    },
    {
      name: '',
      id: 0,
      slot: 6,
    },
  ]);

  return (
    <div className='container'>
      {team.map((slot) => {
        return (
          <div
            key={slot.slot}
            onDragOver={handleDragOver}
            onDrop={(e) =>
              props.dragged &&
              team &&
              props.teamSlots &&
              handleDrop(
                e,
                props.dragged,
                team,
                setTeam,
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
                onDoubleClick={() => removeFromTeam(slot, team, setTeam)}
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
