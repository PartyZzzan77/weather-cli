import axios from 'axios';
import { getIcon } from '../helpers/getIcon.js';
import { printWeather } from './log.services.js';
import { getKeyValue } from './storage.services.js';

export const getWeather = async (city) => {
  const token = process.env.TOKEN ?? (await getKeyValue('token'));
  
  if (!token) {
    throw new Error(`Token not transferred, -t [API_KEY] to save token`);
  }

  const { data } = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather',
    {
      params: { q: city, appid: token, units: 'metric' },
    }
  );
  printWeather(data, getIcon(data.weather[0].icon));
  return data;
};
