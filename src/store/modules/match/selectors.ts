import {MatchStatus} from 'types/enums/match';
import {RootState} from '../../store';

export const matchData = (state: RootState) => state.match;
export const currentMatchData = (state: RootState) => state.match.currentMatch;

export const historyMatchesData = (state: RootState) => {
  return state.match.matches.filter(match => {
    return match.status !== MatchStatus.toBePlayed;
  });
};

export const matchesToBePlayed = (state: RootState) => {
  return state.match.matches.filter(match => {
    return match.status === MatchStatus.toBePlayed;
  });
};
