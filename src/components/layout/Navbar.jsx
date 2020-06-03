import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/* 
    Link: com React-router, a diferença para o "<a href>" é que neste caso os componentes ficam carregados
    mesmo que o usuário vá para outra página, por isso é bem melhor usar este 
    link (Além de não carregar a página).
*/

const Navbar = (props) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={props.icon}></i> {props.title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

// valores padrâo das "props" do componente "Navbar"
Navbar.defaultProps = {
    title: 'default title',
    icon: 'default icon'
};

// Tipagem dos valores "props" do componente "Navbar"
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar

