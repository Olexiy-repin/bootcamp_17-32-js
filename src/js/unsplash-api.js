'use strict';
import axios from 'axios';

export class UnsplashApi {
  #BASE_URL = 'https://api.unsplash.com';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  constructor() {
    this.query = null;
    this.page = 1;
  }

  fetchPhotos() {
    return axios.get('/search/photos', {
      baseURL: this.#BASE_URL,
      params: {
        query: this.query,
        page: this.page,
        per_page: 12,
        orientation: 'portrait',
        client_id: this.#API_KEY,
      },
    });
  }

  fetchRandomPhotos() {
    return axios.get(`${this.#BASE_URL}/photos/random`, {
      params: {
        count: 12,
        orientation: 'portrait',
        client_id: this.#API_KEY,
      },
    });
  }

  incrementPage() {
    this.page += 1;
  }
}
