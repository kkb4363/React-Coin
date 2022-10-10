import {HashRouter,BrowserRouter,Routes,Route} from 'react-router-dom';
import Coin from './Routes/Coin';
import Coins from './Routes/Coins';

function Router(){
    return <HashRouter>
    <Routes>
    <Route path='/:coinId/*' element={<Coin/>}/>
    <Route path='/' element={<Coins/>}/>
    </Routes>
    </HashRouter>
}

export default Router;