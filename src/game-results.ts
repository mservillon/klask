import { durationFormatter } from 'human-readable';

const format = durationFormatter<string>();

const justDaysFormat = durationFormatter<string>({
    allowMultiples: ["y", "mo", "d"]
});

export type GameResult = {
    
    winner: string;
    players: string[];
    
    start: string;
    end: string;
};

export interface GeneralGameTimeFactsDisplay {
    lastPlayed: string;
    shortestGame: string;
    longestGame: string;
};

export interface LeaderboardEntry {
    wins: number;
    losses: number;
    avg: number;
    name: string
};

export const getGeneralGameTimeFacts = (
    results: GameResult[]
    , fromDateMilliseconds: number
): GeneralGameTimeFactsDisplay => {

    const gameEndDatesInMilliseconds = results
        .map(x => Date.parse(x.end))
        .filter(x => x <= fromDateMilliseconds)
    ;

    const gameDurationsInMilliseconds = results
        .filter(x => Date.parse(x.end) <= fromDateMilliseconds)
        .map(x => Date.parse(x.end) - Date.parse(x.start))
    ;

    return {
        lastPlayed: justDaysFormat(fromDateMilliseconds - Math.max(...gameEndDatesInMilliseconds))
        , shortestGame: format(Math.min(...gameDurationsInMilliseconds))
        , longestGame: format(Math.max(...gameDurationsInMilliseconds))
    }
}
export interface WinningPercentageDisplay {
    totalGames: number;
    winningPercentage: string;
};


export const getWinningPercentageDisplay = (results: GameResult[]): WinningPercentageDisplay => {

    const wins = results.filter(x => x.winner).length;
    const totalGames = results.length;
    const wp = totalGames > 0
            ? (wins / totalGames) * 100
            : 0

            console.log(wins, results.length);

        return {
            totalGames
            , winningPercentage: `${wp.toFixed(2)}%`
        };
};

export const getPreviousPlayers = (results: GameResult[]) => {

    const previousPlayers = results.flatMap(x => x.players);

    return [
        ...new Set(previousPlayers)
    ].sort(
        (a, b) => a.localeCompare(b)
    );
};

const getPlayerRecord = (
    player: string
    , results: GameResult[]
): LeaderboardEntry => {

    const wins = results.filter(x => x.winner == player).length;
    
    const gamesPlayerPlayed = results.filter(
        x => x.players.some(
            y => y == player
        )
    ).length;

    const losses = gamesPlayerPlayed - wins;

    return {
        wins: wins
        , losses: losses
        , avg: wins / gamesPlayerPlayed
        , name: player
    };
};


export const getLeaderboardData = (results: Array<GameResult>): Array<LeaderboardEntry> => {

    const previousPlayers = getPreviousPlayers(results);

    return previousPlayers.map(
        x => getPlayerRecord(x, results)
    ).sort(
        (a, b) => (b.avg * 1000 + b.wins + b.avg + b.losses) - (a.avg * 1000 + a.wins + a.losses)
    );
};
