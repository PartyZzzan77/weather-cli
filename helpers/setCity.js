import { printError, printSuccess } from '../services/log.services.js';
import { saveKeyValue } from '../services/storage.services.js';

export const setCity = async (city) => {
  if (!city.length) {
    printError('Incorrect city specified');
    return;
  }

  try {
    await saveKeyValue('city', city);
    printSuccess('City written successfully');
  } catch (e) {
    printError(e.message);
  }
};
