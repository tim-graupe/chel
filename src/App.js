import "./style sheets/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodaysGames } from "./components/todaysgames";
import { Standings } from "./components/standings/standings";
import { Schedule } from "./components/schedule/schedule";
import { Stats } from "./components/stats/stats";
import { useState } from "react";
import { RosterContext, LeadersContext, TeamContext, PreviewContext, GameCenterContext } from "./dispatch/dispatch";
import { TeamSchedule } from "./components/schedule/teamSchedule";
import { GameCenter } from "./components/schedule/gamecenter";
import { Preview } from "./components/schedule/preview";

function App() {
  let [roster, setRoster] = useState([]);
  let [leaders, setLeaders] = useState([]);
  let [preview, setPreview] = useState("")
  let [gameCenter, setGameCenter] = useState()
  let [content, setContent] = useState(null);
  let [teamSchedule, setTeamSchedule] = useState(null)

  return (
    <BrowserRouter className="App">
      <PreviewContext.Provider value={[preview, setPreview]}>
      <RosterContext.Provider value={[roster, setRoster, leaders, setLeaders]}>
        <LeadersContext.Provider value={[leaders, setLeaders]}>
        <TeamContext.Provider value={[teamSchedule, setTeamSchedule]}>
        <GameCenterContext.Provider value={{gameCenter, setGameCenter, content, setContent}}>
        <Routes>
            <Route path="/" element={<TodaysGames />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/schedule/:id" element={<TeamSchedule />} />
            <Route path="/gamecenter/:id" element={<GameCenter />} />
            <Route path="/preview/:id" element={<Preview />} />

          </Routes>
        </GameCenterContext.Provider>
        </TeamContext.Provider>
        </LeadersContext.Provider>
      </RosterContext.Provider>
      </PreviewContext.Provider>
    </BrowserRouter>
  );
}

export default App;
