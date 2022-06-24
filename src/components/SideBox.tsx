import { useState } from 'react';
import { Pokemon } from '../interfaces/Pokemon';
import { SideBoxProps } from '../interfaces/Props';
import { handleDragOver, handleDrop } from '../methods/Drags';
import '../styles/sidebox.css';

const SideBox: React.FC<SideBoxProps> = (props) => {
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
              handleDrop(e, props.dragged, team, setTeam, props.teamSlots)
            }
            className='teamSlot'
          >
            {slot.sprites && <img src={slot.sprites[0]} width='100%' />}
          </div>
        );
      })}
    </div>
  );
};

export default SideBox;
