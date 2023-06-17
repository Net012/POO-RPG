import { Personagem } from "./Personagem";

class Guerreiro extends Personagem {

     

  constructor(nome: string) {
    super(
      nome + "Warrior",
      Math.floor(1 + Math.random() * 1000),
      0,
      0,
      Math.round(Math.random() * 50),
      Math.round(Math.random() * 90),
      Math.round(1 + Math.random() * 40000),
      0
    )

    this._poderAtaque = this._forca * 10
    this._vidaAtual = this._vidaMax

  }

  public atacar(personagemAtacado: Personagem): void {

    let acerto = Math.floor(Math.random()*100)
    let dano
    
    if(personagemAtacado.esquiva < acerto){
        dano = this._poderAtaque / personagemAtacado.resistencia
        personagemAtacado.vidaAtual - dano
    } else {
        
    }

    // ordem esquiva, resistencia, vida
  }

  public contraAtaqueOponente(personagem: Personagem): void{
    let acerto = Math.floor(Math.random()*100)
    let dano
    
    if(personagem.esquiva < acerto){
        dano = this._poderAtaque / personagem.resistencia
        personagem.vidaAtual - dano
  }
}

  public aprimorarHab(): void {
    this._forca + (this._forca * 0.10)
  }

  public regenVida(): void {
    this._vidaAtual + (this._vidaMax * 0.05)
  }

}
