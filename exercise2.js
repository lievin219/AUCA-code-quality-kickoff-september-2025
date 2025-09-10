// function greet(name) {
//     if (name) {
//       return "Hello, " + name + "!";
//     } else {
//       return "Hello!";
//     }
//   }

function greet(name) {
    return `Hello${name ? `, ${name}` : ""}!`;
  }