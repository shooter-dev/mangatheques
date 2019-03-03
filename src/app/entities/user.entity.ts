import { Serie } from './serie.entity';

export class User {
    id: number;
    name: string;
    firstname: string;
    email: string;
    password: string;
    sexe: string;
    cover: string;
    keyAPI: string;
    series: Serie[];
}