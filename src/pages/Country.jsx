import { Section, Container, CountryInfo, Loader } from 'components';
import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  
  const {countryId} = useParams()
    const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const fatchData = async () => {
      setLoader(true);
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fatchData();
  }, [countryId]);
  console.log(country);
  const location = useLocation()
  const goBackLInk = location?.state?.from ?? '/'
  console.log(location);
  return (
    <Section>
      <Link to={goBackLInk}>Go Back</Link>
      <Container>
        <CountryInfo country={country.countryName } flag={country.flag } capital={country.capital }id={country.id }languages={country.languages }population={country.population }/>
      </Container>
    </Section>
  );
};