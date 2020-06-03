import React, { Fragment, useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import Repository from '../Repository/Repository'
import { Link } from 'react-router-dom'
import GithubContext from '../../context/github/GithubContext'

/* 
    O useEffect Hook ele praticamente imita as funcionalidades do componentes de ciclo de vida
    a maneira como ele faz isso dependo do 2° parâmetro dele (que neste caso é "[]" ). Desta forma
    sabendo o que passar como 2° parâmetro pode escolher o componente de ciclo de vida que quiser.
*/


// destruction the "props"
const User = (props) => {

    const githubContext = useContext(GithubContext)

    // destructing os valores de dentro de "githubContext"
    const { getUser, loading, user, getUserRepository, repos} = githubContext

    useEffect(() => {
        getUser(props.match.params.login)
        getUserRepository(props.match.params.login)
        // eslint-disable-next-line
    }, []) // ComponentDidMount()

  

    if (loading) return <Spinner />

    return (
        <Fragment>
            <Link to='/' className='btn btn-light'>
                Back to Search
            </Link>
            Hireable: {''}
            {user.hireble ? (
            <i className="fas fa-check text-sucess"/> 
            )  : ( 
            <i className="fas fa-times-circle text-danger"/>
            )}
            <div className="card grid-2">
                <div className="all-center">
                    <img 
                        src={user.avatar_url} 
                        className="round-img" 
                        alt="Avatar" 
                        style={{width: '150px'}}
                    />
                    <h1>
                        {user.name}
                    </h1>
                </div>
                <div>
                    {user.bio && (
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{user.bio}</p>
                        </Fragment>
                    )}
                    <a href={user.html_url} className="btn btn-dark my-1">
                        Visit Github Profile
                    </a>
                    <ul>
                        <li>
                            {user.login && (
                                <Fragment>
                                    <strong>Username: </strong> {user.login}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {user.company && (
                                <Fragment>
                                    <strong>Company: </strong> {user.company}
                                </Fragment>
                            )}
                        </li>
                        <li>    
                            {user.blog && (
                                <Fragment>
                                    <strong>Website: </strong> {user.blog}
                                </Fragment>
                            )}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card text-center">
                <div className="badge badge-primary"> Followers: {user.followers}</div>
                <div className="badge badge-sucess"> Following: {user.following}</div>
                <div className="badge badge-light"> Public Repository: {user.public_repos}</div>
                <div className="badge badge-dark">Public Gist: {user.public_gists}</div>
            </div>

            <Repository repos={repos} />
        </Fragment>
    )
}


export default User
