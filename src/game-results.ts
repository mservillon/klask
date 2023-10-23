import { durationFormatter } from 'human-readable';

const format = durationFormatter<string>();

const justDaysFormat = durationFormatter<string>({
    allowMultiples: ["y", "mo", "d"]
});

export type GameResult = {
    won: boolean;
    start: string;
    end: string;
};

export interface GeneralGameTimeFactsDisplay {
    lastPlayed: string;
    shortestGame: string;
    longestGame: string;
};

const getGeneralGameTimeFacts = (
    results: GameResult[]
    , fromDateMilliseconds: number
): GeneralGameTimeFactsDisplay => {

    const gameEndDatesInMilliseconds = results
        .map(x => Date.parse(x.end))
        .filter(x => x <= fromDateMilliseconds)
    ;

    const gameDurationsInMilliseconds = results
        .filter(x => Date.parse(x.end) <= fromDateMilliseconds)
        .map(x => Date.parse(x.start))
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

    const wins = results.filter(x => x.won).length;
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