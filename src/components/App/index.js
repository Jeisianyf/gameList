import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';

import {
  Card,
  Container, GamesList, HeaderGameList, InputSearchContainer, ListContainer,
} from './styles';

import Loader from '../Loader';

function App() {
  const [datas, setDatas] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/', {
      method: 'GET',
      headers: new Headers({
        'dev-email-address': 'exemplo@gmail.com',
      }),
    })
      .then(async (response) => {
        const json = await response.json();
        setDatas(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  const allGenre = [];
  datas.map((data) => (
    allGenre.push(data.genre) // Agrupa todos os gêneros, até mesmo os repetidos
  ));

  // remover os generos repetidos
  const genres = allGenre.filter((item, i) => allGenre.indexOf(item) === i);

  function handleOrderBy(event) {
    setSelectedGenre(event.target.value);
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  const filteredGames = datas.filter((data) => (
    // eslint-disable-next-line max-len
    data.title.toLowerCase().includes(searchTerm.toLowerCase()) && data.genre.includes(selectedGenre)
  ));

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        {isLoading && <Loader />}

        <Header />
        <InputSearchContainer>
          <input
            value={searchTerm}
            type="text"
            placeholder="Pesquise por algum jogo..."
            onChange={handleChangeSearchTerm}
          />
        </InputSearchContainer>

        <GamesList>
          <HeaderGameList>
            <strong>
              {filteredGames.length}
              {filteredGames.length === 1 ? ' Jogo' : ' Jogos'}
            </strong>
            <select onChange={handleOrderBy}>
              <option selected value="">Todos</option>
              {genres.map((genre) => (
                <option value={String(genre)}>{genre}</option>
              ))}

            </select>
          </HeaderGameList>

          <hr color="#E6E6E6" size="2" />

          <ListContainer>

            {filteredGames.map((data) => (
              <Card key={data.id}>
                <div className="info">
                  <img alt="imagem do jogo" src={data.thumbnail} width="248" />

                  <div className="game-name-category">
                    <strong>{data.title}</strong>
                    <small>{data.genre}</small>
                  </div>
                </div>
              </Card>

            ))}

          </ListContainer>

        </GamesList>

      </Container>
    </ThemeProvider>
  );
}

export default App;
