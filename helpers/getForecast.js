import { getWeather } from '../services/api.services.js';
import { printError } from '../services/log.services.js';

export const getForecast = async (city) => {
  try {
    await getWeather(city);
  } catch (e) {
    if (e?.response?.status === 404) {
      printError('Incorrect city specified');
    } else if (e?.response?.status === 401) {
      printError('Incorrectly specified token');
    } else if (e?.response?.status === 400) {
      printError('City not transferred, -s [city name] to save city`');
    } else {
      printError(e.message);
    }
  }
};
