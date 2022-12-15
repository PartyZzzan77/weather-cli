import { printError, printSuccess } from '../services/log.services.js';
import { saveKeyValue } from '../services/storage.services.js';

export const setToken = async(token) => {
  try {
    await saveKeyValue(token);
    printSuccess('Token written successfully');
  } catch (e) {
    printError(e);
  }
};
