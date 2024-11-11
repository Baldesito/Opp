class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  valutaEta(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} ${this.lastName} Ha piu eta di ${otherUser.firstName} ${otherUser.lastName}.`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} ${this.lastName}  Ha meno eta di  ${otherUser.firstName} ${otherUser.lastName}.`;
    } else {
      return `${this.firstName} ${this.lastName} Hanno la stessa eta ${otherUser.firstName} ${otherUser.lastName}.`;
    }
  }
}

let user1 = new User("Alice", "Dupont", 30, "Paris");
let user2 = new User("Bob", "Martin", 25, "Palermo");
let user3 = new User("Clara", "Durand", 30, "New york");

console.log(user1.valutaEta(user2));
console.log(user2.valutaEta(user3));
console.log(user1.valutaEta(user3));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static sameOwner(pet1, pet2) {
    return pet1.ownerName === pet2.ownerName;
  }
}

// 2

document.getElementById("add").addEventListener("click", function () {
  let petName = document.getElementById("petName-field").value;
  let ownerName = document.getElementById("ownerName-field").value;
  let species = document.getElementById("species-field").value;
  let breed = document.getElementById("breed-field").value;

  if (petName && ownerName && species && breed) {
    let newPet = new Pet(petName, ownerName, species, breed);
    displayPet(newPet);
    clearForm();
  } else {
    alert("Per favore, compila tutti i campi.");
  }
});

let pets = [];

function displayPet(pet) {
  pets.push(pet);
  let petList = document.getElementById("petList");
  let listItem = document.createElement("li");
  listItem.textContent = `Nome: ${pet.petName}, Padrone: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
  petList.appendChild(listItem);
}

function clearForm() {
  document.getElementById("petName-field").value = "";
  document.getElementById("ownerName-field").value = "";
  document.getElementById("species-field").value = "";
  document.getElementById("breed-field").value = "";
}
