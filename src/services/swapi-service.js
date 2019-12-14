export default class SwapiService {
  _apiBase = 'https://swapi.co/api/';

  async getResource(url) {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch:\n${url}\nStatus: ${response.status}`);
    }

    return await response.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`people/${id}`);
  }

  async getAllPlanets() {
    const res = await this.getResource(`planets`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`planets/${id}`);
  }

  async getAllStarships() {
    const res = await this.getResource(`starships`);
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`starships/${id}`);
  }
}
