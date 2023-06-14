export interface IForecast {
  id: number;
  city: {
    id: number;
    name: string;
  };
  date: Date;
  shift: string;
  weather: string;
  maxTemperature: number;
  minTemperature: number;
  precipitation: number;
  humidity: number;
  airSpeed: number;
  weatherStatus: string;
}
