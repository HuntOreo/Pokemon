import './styles/main.css';
import Stage from './components/Stage/Stage'
import SideBox from './components/SideBox';

const App = () => {
  return (
    <div className='container-main'>
      <Stage />
      <SideBox />
    </div>
  );
};

export default App;
