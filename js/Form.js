class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder","Introduce tu nombre:");

    this.playButton = createButton("Jugar");

    this.titleImg = createImg("assets/title.png","Título del Juego");

    this.greeting = createElement("h1");
  }

  setElementsPos() {
    this.input.position(width/2-110,height/2-80);

    this.playButton.position(width/2-90,height/2-20);

    this.titleImg.position(120,10);

    this.greeting.position(width/2-300,height/2-100);
  }

  handleMousePressed(){
    this.playButton.mousePressed(() => {
      this.input.hide();

      this.playButton.hide();

      var message = ` Hola ${this.input.value()} </br>Espera a que se una otro jugador...`;

      this.greeting.html(message);

      playerCount += 1;

      player.name = this.input.value;

      player.index = playerCount;
      
      player.updateCount(playerCount)

    });
  }

  hide(){
    this.greeting.hide();

    this.playButton.hide();

    this.input.hide();
  }

  display(){
    this.setElementsPos();

    this.handleMousePressed()
  }
}
