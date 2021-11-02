import { baseOptions } from '../domain/baseInterfaces';
declare const topGames: (options: baseOptions) => Promise<{
    _id: any;
    title: any;
    url: string;
    price: any;
    strikePrice: null;
    onSale: boolean;
    discount: null;
    psPlusPrice: null;
    lastUpdated: number;
    image: string;
    details: {
        platforms: any;
    };
}[]>;
export { topGames, };
