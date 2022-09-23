const robots = {
  userInput: require("./robots/user-input"),
  text: require("./robots/text"),
};

function start() {
  const content = {};

  robots.text(content);
  robots.userInput(content);

  console.log(content);
}

start();
