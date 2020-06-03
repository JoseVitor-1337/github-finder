import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const UserItem = (props) => {
    const { login, avatar_url} = props.user // usando o destruct nas propriedades (props) passadas para a classe UserItem

    return (
        <div className="card text-center">
            <img 
                src={avatar_url} 
                alt="Avatar" 
                className="round-img" 
                style={ {width: '60px'} }
            />
            <h3>{login}</h3>

            <div>
                <Link to={`/user/${login}`} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm my-1">
                    More
                </Link>
            </div>
        </div>
    )
}

UserItem.propTypes = { // Tipagem das propriedades (props)
    user: PropTypes.object.isRequired, // ptor + enter.
}

export default UserItem