export class Personagem {
  constructor(
    protected _nome: string,
    protected _forca: number,
    protected _habilidadeMental: number,
    protected _poderAtaque: number,
    protected _esquiva: number,
    protected _resistencia: number,
    protected _vidaMax: number,
    protected _vidaAtual: number
  ) {}

  public atacar(personagem: Personagem): void {
    console.log("Um comportamento desconhecido");
  }

  public contra_atacar(personagem: Personagem): void {
    console.log("Um comportamento desconhecido");
  }

  public aprimorarHab(): void {
    console.log("Um comportamento desconhecido");
  }

  public regenVida(): void {
    console.log("Um comportamento desconhecido");
  }

  public get esquiva(): number {
    return this._esquiva;
  }

  public set esquiva(value: number) {
    this._esquiva = value;
  }

  public get resistencia(): number {
    return this._resistencia;
  }

  public set resistencia(value: number) {
    this._resistencia = value;
  }

  public get vidaAtual(): number {
    return this._vidaAtual;
  }

  public set vidaAtual(value: number) {
    this._vidaAtual = value;
  }
}
