import { BattleProps } from '../../interfaces/Props';
import { handleRun } from '../../methods/BattleMethods';
import '../../styles/battle.css';

const Battle: React.FC<BattleProps> = (props) => {
  return (
    <section className='battleScreen hideBattle'>
      <div className='UX hideBattle'>
        <button onClick={handleRun}>Run!</button>
        <button>Fight!</button>
      </div>
      <img
        id='friendly'
        src={props.team[0].specifics?.sprites.back}
        height='100%'
      />
      <img
        id='baddy'
        src={props.opponent?.specifics?.sprites.front}
        height='100%'
      />
    </section>
  );
};

export default Battle;
