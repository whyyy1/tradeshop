import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../Authorize/AuthContext';
import './Nav.css';



function AppNavBar({ userId }) { // Receive userId as a prop
    const { state, dispatch } = useAuthContext();
    const navigate = useNavigate()
    console.log(userId)
    return (
        <nav className="navbar z-50">

            <ul className="nav-links">
                {/* <!-- USING CHECKBOX HACK --> */}
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" className="hamburger">&#9776;</label>
                <div className='menu'>

                    <li>
                        <a onClick={() => navigate(`/${userId}`)}>Home</a>

                    </li>
                    <li>
                        <a onClick={() => navigate(`/collection/${userId}`)}>Collection</a>
                    </li>
                    <li className="services">
                        <a >Cards</a>
                        <ul className="dropdown z-50">
                        <li><a onClick={() => navigate(`/pokemoncards/${userId}`)}>Pokemon Cards</a></li>
                            <li><a onClick={() => navigate(`/magiccards/${userId}`)}>Magic Cards</a></li>
                            {/* <li><a onClick={() => navigate(`/yugiohcards/${userId}`)}>Yugioh Cards</a></li> */}
                        </ul>
                    </li>
                    <li>
                        <a onClick={() => {
                            dispatch({ type: 'LOGOUT', payload: state })
                            // console.log(dispatch({ type: 'LOGOUT', payload: state }))
                            navigate(`/`)
                        }
                        }>
                            Sign Out
                        </a>
                    </li>
                </div>
            </ul>
        </nav >
    );
}

export default AppNavBar;
