import { API_REQUEST_URL } from '../utils/appConfig';

class Api {
  constructor(url) {
    this._baseUrl = url;
  }

  _sendRequest(urlEnding, method, data = null) {
    const init = {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    };

    const requestUrl = this._baseUrl + urlEnding;

    if (method !== 'GET' && method !== 'DELETE') {
      init.body = JSON.stringify(data);
    }

    return fetch(url, init).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    });
  }

  // Flashcards Methods

  getAllFlashcards() {
    return this._sendRequest('/flashcards', 'GET');
  }

  postFlashcard(data) {
    return this._sendRequest('/flashcards', 'POST', data);
  }

  deleteFlashcard(flashcardId) {
    return this._sendRequest(`/flashcards/${flashcardId}`, 'DELETE');
  }
}

export const api = new Api(API_REQUEST_URL);
