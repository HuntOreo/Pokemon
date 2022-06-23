import { useState } from 'react';
import Stage from './components/Stage/Stage';
import SideBox from './components/SideBox';
import { Pokemon } from './interfaces/Pokemon';
import { SideBoxProps, StageProps } from './interfaces/Props';
import './styles/main.css';

const App: React.FC = () => {
  const [dragged, setDragged] = useState<Pokemon>();

  const stageProps: StageProps = {
    dragged: dragged,
    setDragged: setDragged,
  };

  const sideBoxProps: SideBoxProps = {
    dragged: dragged,
  };

  return (
    <div className='container-main'>
      <Stage {...stageProps} />
      <SideBox {...sideBoxProps} />
    </div>
  );
};

export default App;
