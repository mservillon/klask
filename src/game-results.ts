export type GameResult = boolean;

export interface WinningPercentageDisplay {
    totalGames: number;
    winningPercentage: string;
};

export const getWinningPercentageDisplay = (results: GameResult[]): WinningPercentageDisplay => {
    
    const wins = results.filter(x => x).length;
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