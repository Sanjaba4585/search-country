import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ setQuery }) => {
  const [value, setValue] = useState('');

  const inputChange = e => {
    setValue(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    setQuery({ query: value });
  };

  return (
    <SearchFormStyled onSubmit={submitForm}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select aria-label="select" name="region" required onChange={inputChange}>
        <option disabled defaultValue="">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
