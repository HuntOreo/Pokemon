import { useState, useEffect } from 'react';
import { PokeBattleStatsProps } from '../../interfaces/Props';
import '../../styles/battle/stats.css';

const Stats: React.FC<PokeBattleStatsProps> = ({ pokemon }) => {
  const [healthBar, setHealthBar] = useState({
    width: '100%',
    backgroundColor: 'green',
  });

  const [xpBar, setXpBar] = useState({
    width: '10%',
    backgroundColor: 'lightseagreen',
  });

  useEffect(() => {
    if (pokemon?.specifics) {
      const maxHealth = pokemon.specifics?.stats.find(
        (item) => (item.name = 'hp')
      )?.baseStat;

      if (maxHealth) {
        const percentage = (pokemon.specifics?.currentHealth / maxHealth) * 100;

        const healthStatus = {
          width: `${percentage}%`,
          backgroundColor: 'green',
        };

        setHealthBar(healthStatus);
      }

      if (pokemon.specifics.xp) {
        const neededXP = pokemon.specifics.xp.needed;
        const currentXP = pokemon.specifics.xp.currentXp;
        const percentage = (currentXP / neededXP) * 100;

        const xpStatus = {
          width: `${percentage}%`,
          backgroundColor: 'lightseagreen',
        };

        setXpBar(xpStatus);
      }
    }
  }, []);

  return (
    <section className='battleUX'>
      <div className='statBar'>
        <div className='filler' style={healthBar}></div>
      </div>
      <div className='statBar'>
        <div className='filler' style={xpBar}></div>
      </div>
    </section>
  );
};

export default Stats;
