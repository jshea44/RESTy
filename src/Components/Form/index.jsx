import { useState } from 'react';
import './Form.scss';

function Form(props) {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [method, setMethod] = useState('GET');
  const [json, setJson] = useState('');

  const handleMethodChange = (selectedMethod) => {
    setMethod(selectedMethod);
  };

  const handleJsonChange = (e) => {
    setJson(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: setUrl(e.target.url.value),
    };
    props.handleApiCall(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span
            id="get"
            className={method === 'GET' ? 'selected' : ''}
            onClick={() => handleMethodChange('GET')}
          >
            GET
          </span>
          <span
            id="post"
            className={method === 'POST' ? 'selected' : ''}
            onClick={() => handleMethodChange('POST')}
          >
            POST
          </span>
          <span
            id="put"
            className={method === 'PUT' ? 'selected' : ''}
            onClick={() => handleMethodChange('PUT')}
          >
            PUT
          </span>
          <span
            id="delete"
            className={method === 'DELETE' ? 'selected' : ''}
            onClick={() => handleMethodChange('DELETE')}
          >
            DELETE
          </span>
        </label>
        <label>
          <span>JSON: </span>
          <textarea name="json" value={json} onChange={handleJsonChange} />
        </label>
      </form>
    </>
  );
}

export default Form;
