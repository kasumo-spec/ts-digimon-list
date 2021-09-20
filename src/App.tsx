import React from 'react';
import './App.css';
import {useFavoriteDigimons} from "./providers/digimons";
import {Container, FavoritesList, List} from "./style";
import DigimonList from "./components/DigimonList";

function App() {
    const {favorites,deleteDigimon,addDigimon,digimons,error} = useFavoriteDigimons()
  return (
    <div className="App">
      <header className="App-header">
        <Container>
            {error === "" ?
                (
                    <>
                        <FavoritesList>
                            <DigimonList
                                digimons={favorites}
                                isFavoritList={true}
                                handleRemove={deleteDigimon}
                            />
                         </FavoritesList>
                         <List>
                            <DigimonList
                                digimons={digimons}
                                func={addDigimon}
                            />
                         </List>
                    </>
            ) : <div>{error}</div>}
        </Container>
      </header>
    </div>
  );
}

export default App;
