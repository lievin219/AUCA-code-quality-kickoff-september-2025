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

// option. 

function greet2(name) {
    return `Hello${name ? `, ${name}` : ""}!`;
    return name ? `Hello ${name}!` : "Hello!"
  }
