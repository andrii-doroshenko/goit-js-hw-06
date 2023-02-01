/*Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul#ingredients. */

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//function for getting element
const makeIngredientCard = (product) => {
  const element = document.createElement("li");
  element.classList.add("item");
  element.textContent = product;

  return element;
};

const elements = ingredients.map(makeIngredientCard);

const ingredientsEl = document.querySelector("#ingredients");

ingredientsEl.append(...elements);
