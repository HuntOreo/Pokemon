import React from 'react';
import { useEffect, useState } from 'react';
import Stage from './components/Stage/Stage';
import SideBox from './components/SideBox';
import { Pokemon } from './interfaces/Pokemon';
import { SideBoxProps, StageProps } from './interfaces/Props';
import './styles/main.css';

const App: React.FC = () => {
  const [dragged, setDragged] = useState<Pokemon>();
  const [teamSlots, setTeamSlots] = useState<Element[]>();

  useEffect(() => {
    const elementCollection = document.getElementsByClassName('teamSlot');
    const slots = Array.from(elementCollection);
    setTeamSlots(slots);
  }, []);

  const stageProps: StageProps = {
    dragged: dragged,
    setDragged: setDragged,
  };

  const sideBoxProps: SideBoxProps = {
    dragged: dragged,
    teamSlots: teamSlots,
  };

  return (
    <React.StrictMode>
      <div className='container-main'>
        <Stage {...stageProps} />
        <SideBox {...sideBoxProps} />
      </div>
    </React.StrictMode>
  );
};

export default App;
