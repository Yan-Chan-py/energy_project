import { makeMarkupCards } from './exercises';
import fetchSportEnergy from './api/apiSport';
import * as pagination from './pagination/pagination';
import { message } from './toasts/message';
import { loader } from './loader/loader';

const form = document.querySelector('.form-js');
const paginationNumbers = document.querySelector('.pagination-numbers');

form.addEventListener('submit', handlerSearch);

async function handlerSearch(e) {
  e.preventDefault();

  const value = e.target.elements.search.value.trim().toLowerCase();
  if (!value) return;

  try {
    loader.open();

    // беремо ВЕЛИКИЙ список (перша сторінка максимум)
    const dataExercises = {
      page: 1,
      limit: 100, // беремо більше, щоб шукати локально
    };

    const exercises = await fetchSportEnergy.getByFilterCategory(dataExercises);

    if (!exercises?.results?.length) {
      message.info('Nothing was found');
      return;
    }

    // 🔥 ГОЛОВНЕ: фільтр по name
    const filtered = exercises.results.filter(ex =>
      ex.name.toLowerCase().includes(value)
    );

    if (!filtered.length) {
      message.info('Nothing was found for this query');
      paginationNumbers.innerHTML = '';
      return;
    }

    const result = {
      ...exercises,
      results: filtered,
      totalPages: 1,
    };

    makeMarkupCards(result);

    paginationNumbers.innerHTML = '';
    pagination.getPaginationNumbers(1, dataExercises);
    pagination.setCurrentPage(1);

    form.reset();

  } catch (err) {
    console.log(err);
    message.error(err?.message || String(err));
  } finally {
    loader.close();
  }
}
