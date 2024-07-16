'use strict';

//1er Ejercicio
function nombre(array, nombre) {
    if (array.includes(nombre)) {
        alert("Si se encuentra");
    } else {
        alert("No se encuentra");
    }
}
let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];
nombre(students, "Alejandra","Juan"); 
nombre(students, "Carlos");

//2do ejercicio
function contarPalabras(frase) {
    let numeroPalabras = frase.split(' ').length;
    return numeroPalabras;
}
let phrase = 'La programación web es fundamental para el progreso';
let resultado = contarPalabras(phrase);
alert(`La frase tiene ${resultado} palabras.`);

//3er Ejercicio
function filtrarPalabras(frase) {
  let palabras = frase.split(' '); //dividir la frase 
  let palabrasFiltradas = palabras.filter(palabra => palabra.length > 3); //nuevo Array con las palabras 
  return palabrasFiltradas;
}
let phrase1 = 'Me gusta jugar mucho al futbol los fines de semana con mis amigos';
let result = filtrarPalabras(phrase1);
alert(result);

//4to Ejercicio
const programmingBooks = [
    "JavaScript: The Good Parts",
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Code Complete: A Practical Handbook of Software Construction",
    "Design Patterns: Elements of Reusable Object-Oriented Software",
    "The Pragmatic Programmer: Your Journey to Mastery",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "You Don't Know JS",
    "Python Crash Course",
    "Learning Python",
    "Java: The Complete Reference",
    "Head First Java",
    "C# in Depth",
    "The Go Programming Language",
    "Programming in Scala",
    "Effective Java",
    "Ruby on Rails Tutorial: Learn Web Development with Rails",
    "Node.js Design Patterns",
    "Angular Up and Running",
    "React: Up and Running",
    "Vue.js: Up and Running",
    "Django for Beginners",
    "Flask Web Development",
    "Full Stack Development with Spring Boot and React",
    "Machine Learning Yearning",
    "Data Science for Business",
    "Artificial Intelligence: A Modern Approach",
    "Introduction to Algorithms",
    "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
    "Domain-Driven Design: Tackling Complexity in the Heart of Software",
    "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation",
    "Refactoring: Improving the Design of Existing Code",
    "The Mythical Man-Month: Essays on Software Engineering",
    "DevOps Handbook",
    "Git Pro",
    "The Docker Book: Containerization is the New Virtualization",
    "Site Reliability Engineering: How Google Runs Production Systems",
    "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win",
    "Accelerate: The Science of Lean Software and DevOps",
    "Code: The Hidden Language of Computer Hardware and Software",
    "The C Programming Language",
    "Effective Python: 90 Specific Ways to Write Better Python",
    "Programming Rust",
    "Rust in Action",
    "Go in Practice",
    "Pro Git",
    "Java Concurrency in Practice",
    "The Rust Programming Language",
  ];
  
  function getBooksByTechnology(books, technology) {
    return books.filter(book => book.toLowerCase().includes(technology.toLowerCase()));
  }

  let  technology = "JavaScript";
  let booksForTechnology = getBooksByTechnology(programmingBooks, technology);
  alert(booksForTechnology);

  'use strcit';

// 5to Ejercicio
const programiBooks = [
    "JavaScript: The Good Parts",
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Code Complete: A Practical Handbook of Software Construction",
    "Design Patterns: Elements of Reusable Object-Oriented Software",
    "The Pragmatic Programmer: Your Journey to Mastery",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "You Don't Know JS",
    "Python Crash Course",
    "Learning Python",
    "Java: The Complete Reference",
    "Head First Java",
    "C# in Depth",
    "The Go Programming Language",
    "Programming in Scala",
    "Effective Java",
    "Ruby on Rails Tutorial: Learn Web Development with Rails",
    "Node.js Design Patterns",
    "Angular Up and Running",
    "React: Up and Running",
    "Vue.js: Up and Running",
    "Django for Beginners",
    "Flask Web Development",
    "Full Stack Development with Spring Boot and React",
    "Machine Learning Yearning",
    "Data Science for Business",
    "Artificial Intelligence: A Modern Approach",
    "Introduction to Algorithms",
    "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
    "Domain-Driven Design: Tackling Complexity in the Heart of Software",
    "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation",
    "Refactoring: Improving the Design of Existing Code",
    "The Mythical Man-Month: Essays on Software Engineering",
    "DevOps Handbook",
    "Git Pro",
    "The Docker Book: Containerization is the New Virtualization",
    "Site Reliability Engineering: How Google Runs Production Systems",
    "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win",
    "Accelerate: The Science of Lean Software and DevOps",
    "Code: The Hidden Language of Computer Hardware and Software",
    "The C Programming Language",
    "Effective Python: 90 Specific Ways to Write Better Python",
    "Programming Rust",
    "Rust in Action",
    "Go in Practice",
    "Pro Git",
    "Java Concurrency in Practice",
    "The Rust Programming Language",
  ];
  
  function convertToObjects(books, title) {
    let id = 1;
    
    const bookObjects = books.map(book => ({
      id: id++,
      title: book
    }));
    const book = bookObjects.find(book => book.title === title);
    
    return book ? book.id : null;
  }
  const title = "JavaScript: The Good Parts";
  const id = convertToObjects(programiBooks, title);
  alert(id); 

