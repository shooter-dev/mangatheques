export class SerieModel {
    /**
    * Properties
    */
    private id: number;
    private nom: string;
    private resume: string;

    /**
    * Getter
    */
    public GetId(): number {
        return this.id;
    }
    public GetNom(): string {
        return this.nom;
    }
    public GetResume(): string {
        return this.resume;
    }

    /**
    * Setter
    */
    public SetId(id: number) {
        this.id = id;
    }
    public SetNom(nom: string) {
        this.nom = nom;
    }
    public SetResume(resume: string) {
        this.resume = resume;
    }

    public constructor() { }
}
