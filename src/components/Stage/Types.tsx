import { TypesProps } from '../../interfaces/Props';

const Types: React.FC<TypesProps> = (props) => {
  const setTypeIcon = (type: string): string => {
    switch (type) {
      case 'bug':
        return require('../../images/Pokemon_Type_Icon_Bug.png');
      case 'dark':
        return require('../../images/Pokemon_Type_Icon_Dark.png');
      case 'dragon':
        return require('../../images/Pokemon_Type_Icon_Dragon.png');
      case 'electric':
        return require('../../images/Pokemon_Type_Icon_Electric.png');
      case 'fairy':
        return require('../../images/Pokemon_Type_Icon_Fairy.png');
      case 'fighting':
        return require('../../images/Pokemon_Type_Icon_Fighting.png');
      case 'fire':
        return require('../../images/Pokemon_Type_Icon_Fire.png');
      case 'flying':
        return require('../../images/Pokemon_Type_Icon_Flying.png');
      case 'ghost':
        return require('../../images/Pokemon_Type_Icon_Ghost.png');
      case 'grass':
        return require('../../images/Pokemon_Type_Icon_Grass.png');
      case 'ground':
        return require('../../images/Pokemon_Type_Icon_Ground.png');
      case 'ice':
        return require('../../images/Pokemon_Type_Icon_Ice.png');
      case 'normal':
        return require('../../images/Pokemon_Type_Icon_Normal.png');
      case 'poison':
        return require('../../images/Pokemon_Type_Icon_Poison.png');
      case 'psychic':
        return require('../../images/Pokemon_Type_Icon_Psychic.png');
      case 'rock':
        return require('../../images/Pokemon_Type_Icon_Rock.png');
      case 'steel':
        return require('../../images/Pokemon_Type_Icon_Steel.png');
      case 'water':
        return require('../../images/Pokemon_Type_Icon_Water.png');
      default:
        return 'missing type';
    }
  };

  return (
    <div>
      {props.types?.map((type) => {
        return (
          <img
            key={props.types?.indexOf(type)}
            src={`${setTypeIcon(type)}`}
            alt={type}
            height='40px'
          />
        );
      })}
    </div>
  );
};

export default Types;
