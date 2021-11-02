declare const gameByTitle: (title: string, limit?: number) => Promise<import("../domain/topGamesInterfaces").baseInfo[]>;
export { gameByTitle, };
