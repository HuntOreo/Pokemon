import { BattleProps } from '../../interfaces/Props';
import { handleRun } from '../../methods/BattleMethods';
import PokeBattleStats from './PokeBattleStats';
import '../../styles/battle.css';

const Battle: React.FC<BattleProps> = (props) => {
  return (
    <section className='battleScreen hideBattle'>
      <div className='UX hideBattle'>
        <button onClick={handleRun}>Run!</button>
        <button>Fight!</button>
      </div>
      <div id='friendly' className='pokeBattleSlot'>
        <img src={props.team[0].specifics?.sprites.back} height='100%' />
        <PokeBattleStats pokemon={props.team[0]} />
      </div>
      <div id='baddy' className='pokeBattleSlot'>
        <img src={props.opponent?.specifics?.sprites.front} height='100%' />
        <PokeBattleStats pokemon={props.opponent} />
      </div>
    </section>
  );
};

export default Battle;
