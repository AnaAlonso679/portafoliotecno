let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#FF0080">Ingeniera en Tecnologias de la informacion en Proceso.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
