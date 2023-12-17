import React, { useState, useEffect } from 'react';

function ApiCaller() {
  // State to store API response
  const [apiResponse, setApiResponse] = useState('');

  // Function to call the API
  const callApi = async () => {
    try {
      const response = await fetch('http://localhost:8080/');
      const data = await response.text();
      setApiResponse(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setApiResponse('Error fetching data');
    }
  };

  // useEffect to call the API on component mount
  useEffect(() => {
    callApi();
  }, []);

  // Render the API response
  return (
    <div>
      <h1>API Response</h1>
      <p>{apiResponse}</p>
    </div>
  );
}

export default ApiCaller;