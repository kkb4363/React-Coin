import {BrowserRouter, Routes , Route} from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Coin from './Routes/Coin';
import Coins from './Routes/Coins';
import {lightTheme, darkTheme} from './theme';
import reset from 'styled-reset';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
${reset}
body{
  background-color:${(props) => props.theme.bgColor};
  color:${(props)=> props.theme.textColor};
}
`;

function App() {
  const [isDark,setisDark] = useState(false);

  const toggleDark = () => {
    setisDark((prev) => !prev);
  }
  return (
    <BrowserRouter>
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle/>
    <Routes>
      <Route path='/' element={<Coin toggleDark={toggleDark}/>}/>
      <Route path='/Coins' element={<Coins toggleDark={toggleDark}/>}/>
    </Routes>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
