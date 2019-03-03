import { Type } from './type.entity';
import { Genre } from './genre.entity';

export class Serie {
    id: number;
    type: Type;
    genres: Genre[];
    name: string;
    cover: string;
}
