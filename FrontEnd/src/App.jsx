import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  function api(){
  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('http://20.244.56.144/test/primes', {
                  method: 'GET',
                  headers: {
                      'Authorization': `Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4NjkyMjM5LCJpYXQiOjE3MTg2OTE5MzksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjA0MTA3NDcyLWQwNzEtNDcyYy05MjVmLTQ4ZTJhYTgwN2EyMCIsInN1YiI6InN1ZGhpcmcuMjFjc2VAa29uZ3UuZWR1In0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiIwNDEwNzQ3Mi1kMDcxLTQ3MmMtOTI1Zi00OGUyYWE4MDdhMjAiLCJjbGllbnRTZWNyZXQiOiJxbVZkRWdkRlR1bFBsVWliIiwib3duZXJOYW1lIjoiU3VkaGlyIiwib3duZXJFbWFpbCI6InN1ZGhpcmcuMjFjc2VAa29uZ3UuZWR1Iiwicm9sbE5vIjoiMjFDU1IyMTQifQ.tyZsqNrK5nPB_mPvhgra_0Xq4ZT5WctMCdYUY58KA7Y}`,
                      'Content-Type': 'application/json'
                  }
              });

              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }

              const jsonData = await response.json();
              setData(jsonData.numbers);
              console.log(data);
          } catch (error) {
              console.error('Fetch error:', error);
          }
      };
      fetchData();
  }, []); 
};
  api();
  return (
    <>
      <ol>
        {data.map(Data => {
          return <li>{Data}</li>;
        })}
      </ol>
    </>
  )
}

export default App
