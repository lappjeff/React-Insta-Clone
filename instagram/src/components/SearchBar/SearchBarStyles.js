import styled from 'styled-components'

const SearchForm = styled.form`

  grid-column: 5 / 8

  input {
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
  }
`

const Header = styled.nav `
  height: 50px;
  font-size: 20px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  margin: 30px 0 50px 0;

  .icons {
    grid-column: 10 / -1;
    display: flex;
    justify-content: space-between;
  }
`

const LogoHeader = styled.div`
  grid-column: 1 / 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export {Header, LogoHeader, SearchForm}
