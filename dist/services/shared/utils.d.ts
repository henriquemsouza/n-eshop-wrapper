import { baseInfo } from '../../domain/topGamesInterfaces';
declare const normalizeTitle: (title: string) => string;
declare const validateId: (gameId: string) => boolean;
declare const processMultipleResultGameInfo: (results: any, maxResults?: number) => baseInfo[];
export { normalizeTitle, processMultipleResultGameInfo, validateId, };
