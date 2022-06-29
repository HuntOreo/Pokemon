import { BattleProps } from '../../interfaces/Props';
import Stats from './Stats';

const Screen: React.FC<BattleProps> = (props) => {
  return (
    <section className='battleScreen'>
      <div id='friendly' className='pokeBattleSlot'>
        <img src={props.team[0].specifics?.sprites.back} height='100%' />
        <Stats pokemon={props.team[0]} />
      </div>
      <div id='baddy' className='pokeBattleSlot'>
        <img src={props.opponent?.specifics?.sprites.front} height='100%' />
        <Stats pokemon={props.opponent} />
      </div>
    </section>
  );
};

export default Screen;
