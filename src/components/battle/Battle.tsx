import { BattleProps } from '../../interfaces/Props';
import Menu from './Menu';

import Screen from './Screen';
import '../../styles/battle/battle.css';

const Battle: React.FC<BattleProps> = (props) => {
  return (
    <section className='battleStage'>
      <Screen {...props} />
      <Menu />
    </section>
  );
};

export default Battle;
