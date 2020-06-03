import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from './../layout/Spinner.jsx'
import GithubContext from '../../context/github/GithubContext'

const Users = () => {
    const githubContext = useContext(GithubContext);

    // destructing os valores de GithubContext
    const { loading, users } = githubContext;

    if (loading){
        return <Spinner />
    }else {
        return (
            <div style={userGridStyle}>
                {users.map( (user) => ( // as propriedades passados em "<Users />"
                    <UserItem key={user.id} user={user}/> 
                    // passando as "props" para a classe UserItem manipula-las da maneira que quiser (dinamicamente)
                ))}
            </div>
        )
    }
}

const userGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1ram'
}

export default Users
