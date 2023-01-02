import './style sheets/App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { TodaysGames } from "./components/todaysgames";
import { Standings } from "./components/standings/standings";
import { Schedule} from './components/schedule/schedule'
import { Stats } from './components/stats/stats';
function App(props) {

  //set up routers so each route can be its own top level component to use state and send down to its individual children.
  return (
    <div>
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<TodaysGames />} />
        <Route path="/standings" element={<Standings />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/stats' element={<Stats />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
