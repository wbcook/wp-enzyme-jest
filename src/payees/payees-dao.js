const dao = {};

dao.baseUrl = 'http://localhost:8000/payees';

dao.getById = id => {
  return fetch(`${dao.baseUrl}/${id}`).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      if (response.status === 404) return dao.handleError(1, `Payee ${id} not found`);
      return dao.handleError(-1, 'Generic error');
    }
  });
};

dao.search = (criteria = {}) => {
  return fetch(dao.baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      if (response.status === 404) return dao.handleError(1, `Payees not found`);
      return dao.handleError(-1, 'Generic error');
    }
  });
};

dao.handleError = (code, message = 'ERROR') => {
  return Promise.reject({ code, message });
};

export { dao };
