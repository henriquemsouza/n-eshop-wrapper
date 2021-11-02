import { baseOptions, completeOptions } from './domain/baseInterfaces';
declare const game: (id: unknown) => Promise<any>;
declare const search: (query: unknown, options: baseOptions) => Promise<any>;
declare const filter: (options: completeOptions) => Promise<any>;
export { game, search, filter, };
