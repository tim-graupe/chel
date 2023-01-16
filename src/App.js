import "./style sheets/App.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/home";
import { Standings } from "./components/standings/standings";
import { Schedule } from "./components/schedule/schedule";
import { Stats } from "./components/stats/stats";
import { useState } from "react";
import { RosterContext, LeadersContext, PlayerContext, TeamContext, PreviewContext, GameCenterContext } from "./dispatch/dispatch";
import { TeamSchedule } from "./components/schedule/teamSchedule";
import { GameCenter } from "./components/schedule/gamecenter";
import { Preview } from "./components/schedule/preview";
import { PlayerProfile } from "./components/stats/playerProfile";

function App() {
  let [roster, setRoster] = useState([]);
  let [leaders, setLeaders] = useState([]);
  let [preview, setPreview] = useState("")
  let [player, setPlayer] = useState("")
  let [stats, setStats] = useState()
  let [gameCenter, setGameCenter] = useState()
  let [content, setContent] = useState(null);
  let [teamSchedule, setTeamSchedule] = useState(null)

  return (
    <HashRouter className="App">
      <Link to={'/stats'}>Link</Link>
      <PreviewContext.Provider value={[preview, setPreview]}>
      <RosterContext.Provider value={[roster, setRoster, leaders, setLeaders]}>
        <LeadersContext.Provider value={[leaders, setLeaders]}>
        <TeamContext.Provider value={[teamSchedule, setTeamSchedule]}>
        <GameCenterContext.Provider value={{gameCenter, setGameCenter, content, setContent}}>
        <PlayerContext.Provider value={[player, setPlayer, stats, setStats]}>
        <Routes>
            <Route path="/" element={<Schedule />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/schedule/:id" element={<TeamSchedule />} />
            <Route path="/gamecenter/:id" element={<GameCenter />} />
            <Route path="/preview/:id" element={<Preview />} />
            <Route path="/players/:id" element ={<PlayerProfile />} />

          </Routes>
        </PlayerContext.Provider>
        </GameCenterContext.Provider>
        </TeamContext.Provider>
        </LeadersContext.Provider>
      </RosterContext.Provider>
      </PreviewContext.Provider>
    </HashRouter>
  );
}

export default App;
