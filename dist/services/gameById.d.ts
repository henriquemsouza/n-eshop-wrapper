declare const gameById: (id: string, limit?: number) => Promise<import("../domain/topGamesInterfaces").baseInfo[]>;
export { gameById, };
