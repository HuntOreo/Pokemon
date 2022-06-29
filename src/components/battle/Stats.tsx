import { useState } from 'react';
import { PokeBattleStatsProps } from '../../interfaces/Props';
import '../../styles/battle/stats.css';

const Stats: React.FC<PokeBattleStatsProps> = ({ pokemon }) => {
  const [healthStatus, setHealthStatus] = useState({
    width: '100%',
    backgroundColor: 'green',
  });

  return (
    <section className='battleUX'>
      <div className='healthBar'>
        <div className='healthFiller' style={healthStatus}></div>
      </div>
    </section>
  );
};

export default Stats;
