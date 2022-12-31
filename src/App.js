import s from'./style.module.css';
import Header from "./components/header/Header"
import Clock from './components/clock/clock';
import News from './components/news/News';

function App() {
  return (
    <div className={s.principal}>

      <div className={s.container1}>
      <Clock/>
        <Header
        name="LOCAL NEWS"
        description="News from the Local News Network"
        />
      </div>

      <div className={s.principal}>
        <News/>
      </div>

    </div>
  );
}

export default App;
