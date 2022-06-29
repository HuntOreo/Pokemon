import { BattleProps } from '../../interfaces/Props';

import Screen from './Screen';
import '../../styles/battle.css';

const Battle: React.FC<BattleProps> = (props) => {
  return (
    <section className='battleStage'>
      <Screen {...props} />
    </section>
  );
};

export default Battle;
