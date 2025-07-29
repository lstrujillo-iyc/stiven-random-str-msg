const messages = [
  'This is where it all begins...',
  'Commit committed',
  'Version control is awful',
  'COMMIT ALL THE FILES!',
  'The same thing we do every night, Pinky - try to take over the world!',
  'Lock S-foils in attack position',
  'This commit is a lie',
  "I'll explain when you're older!",
  'Here be Dragons',
  'Reinventing the wheel. Again.',
  'This is not the commit message you are looking for',
  'Batman! (this commit has no parents)',
  'Here be Dragons',
];

const funnyCommit = () => {
  // Genera un número aleatorio entre 0 y 1, lo multiplica por la longitud del array
  // y usa Math.floor para obtener un índice entero válido
  const message = messages[Math.floor(Math.random() * messages.length)];

  // Imprime el mensaje usando códigos ANSI para colores:
  // \x1b[34m - establece el color de texto a azul
  // \x1b[89m - restablece el color al valor por defecto
  console.log(`\x1b[34m${message}\x1b[89m`);
};

module.exports = {
  funnyCommit,
};
