const categoriesRow = document.querySelector('.caregories__cards');



function getCategoriesCard({ id, name, image }) {
  return `
    <div class="caregories__row">
        <div class="categories__card">
            <h4>${name}</h4>
            <img src="https://picsum.photos/200/300/?category${[id]}" alt="${id}">
        </div>
    </div>
  `;
}

categories.forEach((category) => {
  categoriesRow.innerHTML += getCategoriesCard(category);
});
