import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodaysGames } from "./components/todaysgames";
import { Standings } from "./components/standings";
function App() {
  //set up routers so each route can be its own top level component to use state and send down to its individual children.
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<TodaysGames />} />
        <Route path="/todaysgames" element={<TodaysGames />} />
        <Route path="/standings" element={<Standings />} />
        {/* <Route path='/schedule' element={<Schedule />} />
        <Route path='/account' element={<Account />} />
        <Route path='/stats' element={<Stats />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
