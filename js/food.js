const searchFood = () => {
  const foodField = document.getElementById("search-input");
  const searchText = foodField.value;
  const url = `https://themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  searchText.value = "";
  // console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMeal(data.meals));
};

const displayMeal = (meals) => {
  console.log(meals);
  const mealSection = document.getElementById("meal-section");
  meals.forEach((meal) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
          <div onclick="loadMealDetails('${meal.idMeal}')" class="card h-100">

          <div class="card-header bg-transparent border-success text-center"><h3>${
            meal.strTags
          }</h3>
          </div>
            <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />

            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">
               ${meal.strInstructions.slice(0, 200)}
              </p>
            </div>
          </div>
      `;

    mealSection.appendChild(div);
    // console.log(meal);
  });
};

const loadMealDetails = (mealId) => {
  const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  //fetch data by id
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals[0]));
};

const displayMealDetails = (mealInfo) => {
  const mealDetails = document.getElementById("meal-details");
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <img src="${mealInfo.strMealThumb}" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${mealInfo.strMeal}</h5>
    <p class="card-text">
      ${mealInfo.strInstructions.slice(0, 200)}
    </p>
    <div class="mx-auto">
      <a class="btn btn-primary" href='${mealInfo.strYoutube}'>Youtube Video</a>
    </div>
  </div>
  `;
  mealDetails.appendChild(card);
};
