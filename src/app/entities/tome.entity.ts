import { Serie } from './serie.entity';
import { Editeur } from './editeur.entity';
import { Personne } from './personne.entity';

export class Tome {
    code: number;
    serie: Serie;
    editeur: Editeur;
    personnes: Personne[];
    name: string;
    dateVF: Date;
    dateVO: Date;
    dateAchat: Date;
    volume: number;
    pages: number;
    resum: string;
    cover: string;
}
