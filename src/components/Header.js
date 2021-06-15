import React, { useRef, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Switch from './Switch';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.headerBackground};

  font-family: 'Lato', sans-serif;
  padding: 0 60px;
  height: 100px;

`;

const NavTool = styled.div`
  display: flex;
  align-items: center;
  margin-left: -180px;

`;

const Logo = styled.a`
  font-family: 'Suez One', serif;
  color: ${({ theme }) => theme.colors.color};
  font-size: 1.8rem;

`;

const SearchContainer = styled.div`

`;

const SearchInput = styled.input`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.color};
  outline: 0;
  border-width: 0 0 2px;
  border-color: ${({ theme }) => theme.colors.color};
  width: 170px;
  height: 30px;
`;

const SearchBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.color};
  font-size: 1rem;
  width: 100px;
  height: 30px;
  &:hover {
    color: #548687;
  }
`;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.switchColor};
    font-size: 0.8rem;
  }
`;

const MyLocation = styled.button`
  background-color: ${({ theme }) => theme.colors.btnBackground};
  color: ${({ theme }) => theme.colors.btnFontColor};
  font-weight: 900;
  border-radius: 20px;
  width: 180px;
  height: 30px;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.btnFontColor};
    color: #a8dba8;
  }
`;

const Header = ({ onSearch, onLocation, onThemeColor }) => {
  const theme = useContext(ThemeContext);
  const inputElement = useRef(null);

  const onSubmit = e => {
    e.preventDefault();
    const value = inputElement.current.value;
    onSearch(value);
  };

  const onKeyPress = e => {
    if (e.keyCode === 13) {
      const value = inputElement.current.value;
      onSearch(value);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        onLocation(lat, lng);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const toggleThemeColor = () => {
    if (theme.name === 'light') {
      onThemeColor('dark');
    } else {
      onThemeColor('light');
    }
  };

  return (
    <>
      <Nav>
        <Logo href='/'>SeoulWifi</Logo>
        <SearchContainer>
          <SearchBtn onClick={onSubmit}>SEARCH</SearchBtn>
          <SearchInput
            type='text'
            placeholder='e.g. 서울역(Seoul station)'
            ref={inputElement}
            onKeyDown={onKeyPress}
          />
        </SearchContainer>
        <NavTool>
          <SwitchContainer>
            {theme.name === 'dark' ? (
              <p>Switch to Light Mode</p>
            ) : (
              <p>Switch to Dark Mode</p>
            )}
            <Switch
              isOn={theme.name === 'light'}
              onColor='#333'
              handleToggle={toggleThemeColor}
            ></Switch>
          </SwitchContainer>

          <MyLocation onClick={getCurrentLocation}>MY LOCATION</MyLocation>
        </NavTool>
      </Nav>
    </>
  );
};

export default Header;
