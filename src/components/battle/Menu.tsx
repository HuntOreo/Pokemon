import { Link } from 'react-router-dom';
import '../../styles/battle/menu.css';

const Menu: React.FC = () => {
  return (
    <div className='battleMenu'>
      <Link to='/'>
        <button>Run!</button>
      </Link>
      <button>Fight!</button>
      <button>Bag</button>
      <button>Pokemon</button>
    </div>
  );
};

export default Menu;
