import React from 'react';
import {Link} from 'react-router-dom';
import {Wrapper} from './styles';

const Header = () => {
    return (
        <>            
            <Link to='/' style={{textDecoration: 'none'}}>
                    <Wrapper>
                        <h1>Movies</h1>
                    </Wrapper>
            </Link>
        </>
    );
}

export default Header;