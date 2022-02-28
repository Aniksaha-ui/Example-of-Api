const loadBuddies = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((data) => displayBuddies(data));
};

const displayBuddies = (data) => {
  const result = data.results;
  console.log(result);
  const buddies = document.getElementById("buddies");
  for (const buddy of result) {
    const createNewDivElement = document.createElement("p");
    createNewDivElement.innerText = `Name : ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} Email:${buddy.email}`;
    buddies.appendChild(createNewDivElement);
  }
};
