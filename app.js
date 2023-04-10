//1. Write a function that creates a closure and returns a function that can add
//   a specific number to any number passed to it. For example, if the closure is
//   created with 5, the returned function should add 5 to any number passed to it.


function createAdder(numberToAdd) {
  return function () {
    return 8 + numberToAdd;
  };

}
const add5 = createAdder(5);
console.log(add5(10));


//2. Write a recursive function that searches an array for a specific value. The
//   function should return true if the value is found, and false if it is not. You
//   can assume that the array is not nested.

function searchArray(array, value) {
  if (array.length === 0) {
    return false;
  } else if (array[0] === value) {
    return true;
  } else {
    return searchArray(array.slice(1), value);
  }
}

const array = [1, 2, 3, 4, 5];
console.log(searchArray(array, 3));
console.log(searchArray(array, 6));


//3. Write a function that adds a new paragraph element to the bottom of an
//   HTML document. The function should take a string argument that will be
//   used as the text content of the new paragraph element.

function addParagraph(text) {
  const newParagraph = document.createElement('p');
  const newText = document.createTextNode(text);
  newParagraph.appendChild(newText);
  document.body.appendChild(newParagraph);
}

addParagraph(`1-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`);
addParagraph(`2-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`);
addParagraph(`3-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`);

//4. Write a function that adds a new list item to an unordered list in an HTML
//   document. The function should take a string argument that will be used as
//   the text content of the new list item.

function addListItem(text) {
  const newList = document.querySelector('ul');
  const newListItem = document.createElement('li');
  const newText = document.createTextNode(text);
  newListItem.appendChild(newText);
  newList.appendChild(newListItem);
}

addListItem('1-This is a new list item!');
addListItem('2-This is a new list item!');
addListItem('3-This is a new list item!');


//5.  Write a function that changes the background color of an HTML element.
//    The function should take two arguments: the first argument is a reference
//    to the HTML element, and the second argument is a string representing
//    the new background color.

function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
  element.style.width = "200px";
  element.style.height = "200px";
}

const myElement = document.getElementById('my-element');
changeBackgroundColor(myElement, 'blue');


//6. Write a function that saves an object to localStorage. The function should
//   take two arguments: the first argument is a string representing the key to
//   use for storing the object, and the second argument is the object to store.

function saveToLocalStorage(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}
const personObj = { eyes: 2, feet: 2, hands: 2, eyeColor: "blue" };
saveToLocalStorage('Obj', personObj);


//7. Write a function that retrieves an object from localStorage. The function
//   should take one argument, which is a string representing the key used to
//   store the object. The function should return the object.

function retrievesObj(obj) {
  return obj;
}

const retrieves = retrievesObj(JSON.parse(localStorage.getItem('Obj')));
console.log(retrieves);


//8. Write a function that takes an object and saves each property to
//   localStorage using the property name as the key and the property value as
//   the value. The function should also retrieve the object from localStorage
//   and return it as a new object.

function saveObjectToLocalStorage(object) {
  Object.keys(object).forEach((key,value) => {
    localStorage.setItem(key, JSON.stringify(object[key]));
  });
  

  const savedObject = {};
  Object.keys(object).forEach((key) => {
    savedObject[key] = JSON.parse(localStorage.getItem(key));
  });
  
  return savedObject;
}

const myObject = {name: "Douglas Adams", email: "douglas@gmail.com", postcode: "pe22 22a", phoneNumber: "07428233312",city: "London", country: "England"};
const savedObject = saveObjectToLocalStorage(myObject); 
console.log(savedObject); 