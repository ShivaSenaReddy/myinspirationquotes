import logo from './logo.svg';
import './App.css';
import Data from './Data';

function App() {
    let arr = Data.map(item => <img className='quote--img'src={item.img}/>)
  return (
    <div className="App">
          <h1>Daily Quotes</h1>
          {arr}
    </div>
  );
}

export default App;
