import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countreas, setCountreas] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const fatchData = async () => {
      setLoader(true);
      try {
        const data = await getCountries();
        setCountreas(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fatchData();
  }, []);

  return (
    <Section>
      <Container>
        {error && <Heading>Ops!</Heading>}
        {loader && <Loader />}
        <CountryList countries={countreas} />
      </Container>
    </Section>
  );
};
