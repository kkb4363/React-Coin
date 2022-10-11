import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Coin from './Routes/Coin';
import Coins from './Routes/Coins';

function Router(){
    return <BrowserRouter basename="/Coin-App/">
    <Routes>
    <Route path='/:coinId/*' element={<Coin/>}/>
    <Route path='/' element={<Coins/>}/>
    </Routes>
    </BrowserRouter>
}

export default Router;