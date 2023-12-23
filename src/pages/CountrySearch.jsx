import { useState, useEffect } from 'react';
import { fetchByRegion } from '../service/country-service';

import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useSearchParams } from 'react-router-dom';

export const CountrySearch = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const [countreas, setCountreas] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const region = searchParams.get('query');
    if (!region) {
      return;
    }
    const fatchData = async () => {
      setLoader(true);
      try {
        const data = await fetchByRegion(region);
        setCountreas(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fatchData();
  }, [searchParams]);
  console.log('countreas :>> ', countreas);

  return (
    <Section>
      <Container>
        <SearchForm setQuery={setSearchParams} />
        <CountryList countries={countreas} />
      </Container>
    </Section>
  );
};
