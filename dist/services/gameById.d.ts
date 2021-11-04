import { baseOptions } from '../domain/baseInterfaces';
declare const gameById: (id: string, options: baseOptions) => Promise<import("../domain/topGamesInterfaces").baseInfo[]>;
export { gameById, };
