import { createContext } from "react";


export const LeadersContext = createContext([])
export const RosterContext = createContext([])
export const TeamContext = createContext([])
export const PlayerContext = createContext({stats: "", bio: ""})
export const PreviewContext = createContext([])
export const GameCenterContext = createContext({content: "", gameCenter: ""})
