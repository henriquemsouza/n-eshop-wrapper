declare const game: (id: unknown) => Promise<any>;
declare const search: (query: unknown, options: baseOptions) => Promise<any>;
export interface baseOptions {
    sort?: any;
    direction?: any;
    system?: any;
    limit?: any;
    availability?: any;
    offset?: any;
    category?: any;
    price?: any;
    number?: any;
}
export interface options {
    search: any;
    sort?: any;
    direction?: any;
    system?: any;
    limit?: any;
    availability?: any;
    offset?: any;
    category?: any;
    price?: any;
    number?: any;
}
declare const filter: (options: options) => Promise<any>;
export { game, search, filter, };
