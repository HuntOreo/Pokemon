import { PokeBattleStatsProps } from '../../interfaces/Props';
import '../../styles/battleUX.css';

const PokeBattleStats: React.FC<PokeBattleStatsProps> = ({ pokemon }) => {
  if (pokemon) {
    const healthStatus = {
      width: '100%',
    };

    return (
      <section className='battleUX'>
        <div className='healthBar'>
          <div className='healthFiller' style={healthStatus}></div>
        </div>
      </section>
    );
  }

  return <></>;
};

export default PokeBattleStats;
