import { createContext, useState } from "react";
export const Context = createContext({} as ContextState);

interface ContextState {
  configModalActive: boolean | null;
  rulesModalActive: boolean | null;
  startModalActive: boolean | null;
  isCheckedMuletillas: boolean | null;
  isCheckedInsultos: boolean | null;
  setCheckedMuletillas: any | null;
  setCheckedInsultos: any | null;
  setConfigModalActive: any | null;
  setRulesModalActive: any | null;
  setStartModalActive: any | null;
  roundsGame: number | null;
  timeGame: number | null;
  setTimeGame: any | null;
  setRoundsGame: any | null;
  teamOneName: string | null;
  setTeamOneName: any | null;
  teamTwoName: string | null;
  setTeamTwoName: any | null;
  teamOneColor: string | null;
  setTeamOneColor: any | null;
  teamTwoColor: string | null;
  setTeamTwoColor: any | null;
  gameState: string | null;
  setGameState: any | null;
  pointsTeamOne: number | null;
  setPointsTeamOne: any | null;
  pointsTeamTwo: number | null;
  setPointsTeamTwo: any | null;
  assignedTeamOne: boolean | null;
  setAssignedTeamOne: any | null;
  currentRound: number | null;
  setCurrentRound: any | null;
  countDownGame: number | null;
  setCountDownGame: any | null;
  startCounter: boolean | null;
  setStartCounter: any | null;
  quitInGameModalActive: boolean | null;
  setQuitInGameModalActive: any | null;
  cardsDB: any | null;
  setcardsDB: any | null;
  currentCard: number | null;
  setCurrentCard: any | null;
  indexOnShuffled: number | null;
  setIndexOnShuffled: any | null;
  time: number | null;
  setTime: any | null;
  intervalID: any | null;
  setIntervalID: any | null;
}
const GameContext = ({ children }: any) => {
  const [configModalActive, setConfigModalActive] = useState(false);
  const [rulesModalActive, setRulesModalActive] = useState(false);
  const [startModalActive, setStartModalActive] = useState(false);
  const [roundsGame, setRoundsGame] = useState(15);
  const [timeGame, setTimeGame] = useState(60);
  const [isCheckedMuletillas, setCheckedMuletillas] = useState(false);
  const [isCheckedInsultos, setCheckedInsultos] = useState(false);
  const [teamOneName, setTeamOneName] = useState("Team 1");
  const [teamTwoName, setTeamTwoName] = useState("Team 2");
  const [teamOneColor, setTeamOneColor] = useState("rgb(249, 200, 203)");
  const [teamTwoColor, setTeamTwoColor] = useState("rgb(198, 221, 241)");
  const [gameState, setGameState] = useState("preGame");
  const [pointsTeamOne, setPointsTeamOne] = useState(0);
  const [pointsTeamTwo, setPointsTeamTwo] = useState(0);
  const [assignedTeamOne, setAssignedTeamOne] = useState(true);
  const [currentRound, setCurrentRound] = useState(1);
  const [startCounter, setStartCounter] = useState(false);
  const [countDownGame, setCountDownGame] = useState(60);
  const [quitInGameModalActive, setQuitInGameModalActive] = useState(false);
  const [cardsDB, setcardsDB] = useState();
  const [currentCard, setCurrentCard] = useState(0);
  const [indexOnShuffled, setIndexOnShuffled] = useState(0);
  const [time, setTime] = useState();
  const [intervalID, setIntervalID] = useState();

  return (
    <Context.Provider
      value={{
        configModalActive,
        setConfigModalActive,
        quitInGameModalActive,
        setQuitInGameModalActive,
        rulesModalActive,
        setRulesModalActive,
        startModalActive,
        setStartModalActive,
        roundsGame,
        setRoundsGame,
        timeGame,
        setTimeGame,
        isCheckedMuletillas,
        setCheckedMuletillas,
        isCheckedInsultos,
        setCheckedInsultos,
        teamOneName,
        setTeamOneName,
        teamTwoName,
        setTeamTwoName,
        teamOneColor,
        setTeamOneColor,
        teamTwoColor,
        setTeamTwoColor,
        gameState,
        setGameState,
        pointsTeamOne,
        setPointsTeamOne,
        pointsTeamTwo,
        setPointsTeamTwo,
        assignedTeamOne,
        setAssignedTeamOne,
        currentRound,
        setCurrentRound,
        countDownGame,
        setCountDownGame,
        startCounter,
        setStartCounter,
        cardsDB,
        setcardsDB,
        currentCard,
        setCurrentCard,
        indexOnShuffled,
        setIndexOnShuffled,
        time,
        setTime,
        intervalID,
        setIntervalID,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default GameContext;
