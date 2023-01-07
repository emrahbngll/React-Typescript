import axios from 'axios';
import { useEffect, useState } from 'react';
import Country from './components/Country';
import { CountyType } from './types';

function App() {
  const [countries, setCountries] = useState<CountyType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getCountries = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<CountyType[]>(
        'https://restcountries.com/v3.1/all'
      );
      setCountries(data);
    } catch {
      console.log('Error!!!');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      {loading
        ? 'Loading...'
        : countries.map((country) => {
            return <Country key={country.name} country={country} />;
          })}
    </div>
  );
}

export default App;
