import fetchSportEnergy from './api/apiSport';
import { message } from './toasts/message';
import * as pagination from './pagination/pagination';
import { capitalizeFirstLetter } from './utils/firstLater';
import { loader } from './loader/loader';

const categoryList = document.querySelector('.wrap-button');
const musclesList = document.querySelector('.muscles-list');
const paginationNumbers = document.querySelector('.pagination-numbers');
const exercisesTag = document.querySelector('.title-exercises');

if (categoryList) {
  categoryList.addEventListener('click', handleCategoryClick);
}

// ✅ Автозавантаження "Muscles" має спрацювати навіть якщо DOMContentLoaded вже був
const initDefaultCategory = () => {
  loadSectionOnClick({ filter: 'Muscles', page: 1, limit: 12 });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDefaultCategory, { once: true });
} else {
  initDefaultCategory();
}

export async function handleCategoryClick(event) {
  event.preventDefault();

  if (exercisesTag) exercisesTag.textContent = 'Exercises';

  // ✅ правильніше ловити кнопку через closest (бо клік може бути по span/p тощо)
  const btn = event.target.closest('button[data-name]');
  if (!btn || !categoryList?.contains(btn)) return;

  // прибираємо active з усіх
  const buttons = categoryList.querySelectorAll('button');
  buttons.forEach(b => b.classList.remove('btn-filter-active'));
  btn.classList.add('btn-filter-active');

  const categoryName = btn.dataset.name;

  const dataFilter = {
    filter: categoryName,
    page: 1,
    limit: 12,
  };

  if (musclesList) musclesList.innerHTML = '';

  await loadSectionOnClick(dataFilter);
}

export async function loadSectionOnClick(dataFilter) {
  // ховаємо форму пошуку, бо ми зараз на списку фільтрів
  document.querySelector('.filter-list-js')?.classList.remove('exercises_list');
  document.querySelector('.form-js')?.classList.add('hidden-form');

  try {
    loader.open();
    const filter = await fetchSportEnergy.getByFilterName(dataFilter);

    const filteredResult = filter?.results ?? [];
    if (!filteredResult.length) {
      message.error("Sorry, we didn't find anything according to your request.");
      return;
    }

    if (musclesList) {
      musclesList.innerHTML = makeMarkupMuscles(filteredResult);
    }

    // LocalStorage для пагінації
    const totalPages = filter?.totalPages ?? 1;
    localStorage.setItem('infoRequest', JSON.stringify({ totalPages, categoryName: dataFilter.filter }));

    document.querySelector('.filter-list-js')?.classList.add('muscles-list');

    if (paginationNumbers) paginationNumbers.innerHTML = '';
    pagination.getPaginationNumbers(totalPages, dataFilter);
    pagination.setCurrentPage(1);
  } catch (error) {
    message.error(error?.message || String(error));
  } finally {
    loader.close();
  }
}

export function makeMarkupMuscles(filteredResult) {
  return filteredResult
    .map(({ filter, name, imgURL }) => {
      let filterCurrent = (filter || '').toLocaleLowerCase().replaceAll(' ', '');
      if (filterCurrent === 'bodyparts') filterCurrent = 'bodypart';

      return `
        <li class="muscles-item" data-name="${name}" data-filter="${filterCurrent}">
          <a href="" class="muscles-link" data-alt="${name}">
            <img loading="lazy" class="muscles-image" src="${imgURL}" alt="${name}" width="290" height="242">
            <button class="muscles-box-menu" type="button">
              <h3 class="muscles-small-title">${capitalizeFirstLetter(name)}</h3>
              <p class="muscles-text">${filter}</p>
            </button>
          </a>
        </li>
      `;
    })
    .join('');
}
