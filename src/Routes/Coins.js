import styled from 'styled-components';
import React from 'react';
import {Link} from 'react-router-dom';

function Coins({toggleDark}){
    return(
        <div>
        <h1>Coins</h1>
        <button type='button'
                onClick={toggleDark}>다크모드/라이트모드
        </button>

      <button>
        <Link to='/'>home</Link>
      </button>

        </div>
    )
}

export default Coins;