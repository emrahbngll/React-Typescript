import { FunctionComponent } from 'react';
import { CountyType } from '../types';

interface ICountyProps {
  country: CountyType;
}

const Country: FunctionComponent<ICountyProps> = (props) => {
  const { country } = props;
  return <p>{country.capital}</p>;
};

export default Country;
