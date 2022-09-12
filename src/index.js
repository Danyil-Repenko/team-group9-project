const axios = require('axios');
import ApiQuery from './js_components/api_query';

import { renderTrendMovies } from './js_components/trendMoviesCards';
import { onSearchMovie } from './js_components/searchMovie';

renderTrendMovies();
const form = document.querySelector('.form-header');
form.addEventListener('submit', onSearchMovie);
import './js_components/close-modal';
import loadingspiner from './js_components/loading-spinner';
import loading from './js_components/loading-spinner';