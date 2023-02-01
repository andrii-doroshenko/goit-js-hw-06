const categoriesEl = document.querySelector("#categories");
const itemEl = document.querySelectorAll(".item");

//1. Выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

/*2.Для каждого элемента li.item в списке ul#categories,
найдет и выведет в консоль текст заголовка элемента(тега < h2 >) 
и количество элементов в категории(всех вложенных в него < li >).*/

function getCategories() {
  const numberOfCategories = categoriesEl.childElementCount;
  console.log(`Number of categories: ${numberOfCategories}`);

  itemEl.forEach((item) => {
    const categoriesTitle = item.firstElementChild.textContent;
    const numberOfElements = item.lastElementChild.childElementCount;

    console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${numberOfElements}`);
  });
}

getCategories();
/* Number of categories: 3
Category: Animals
Elements: 4
Category: Products
Elements: 3
Category: Technologies
Elements: 5 */
