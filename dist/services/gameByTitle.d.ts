import { baseOptions } from '../domain/baseInterfaces';
declare const gameByTitle: (title: string, options: baseOptions) => Promise<import("../domain/topGamesInterfaces").baseInfo[]>;
export { gameByTitle, };
