import React from 'react';
import { useState } from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App(props) {
  const [dataObj, setData] = useState({});
  const [requestParamsObj, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  function callApi(requestParamsObj) {
    setLoading(true);
    // mock output
    const data = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    setLoading(false);
    setData({ ...dataObj, data });
    setRequestParams({ ...requestParamsObj, requestParamsObj });
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParamsObj.method}</div>
      <div>URL: {requestParamsObj.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={dataObj} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
