import React, { useState, useContext } from 'react' 
import GithubContext from './../../context/github/GithubContext'
import AlertContext from './../../context/alert/AlertContext'

const Search = (props) => {

    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)

    const [ text, setText ] = useState('') // 1° Hook - usar o "state" mesmo em um componente de função, muito útil

    // Ao submeter o formulário.
    const onSubmit = (event) => {
        event.preventDefault();
        if (text === '')
            alertContext.setAlert('Please write some text', 'light');
        else {
            githubContext.searchUsers(text); // mandando a "props" de dentro da fora (sim, também pode fazer isto)
            setText('') // limpando o text: ""
        }
    }

    // Manipulando eventos com React, usando "hooks", em componentes de função.
    const onChange = (event) => setText(event.target.value );

    return (    
        <div>
            <form onSubmit  ={onSubmit} className="form">
                <input 
                    type="text" 
                    name="text" 
                    placeholder = "Search users..." 
                    value={text}
                    onChange={onChange} 
                />                  
                <input 
                    type="submit" 
                    onClick={onSubmit}
                    value="Search" 
                    className = "btn btn-dark btn-block"
                />
            </form>

            {/* Vai mostrar o botão apenas se houver algum usuario na página */}
            {githubContext.users.length > 0 && (
                <button 
                    className="btn btn-light btn-block" 
                    onClick={githubContext.clearUsers}
                >Clear</button> 
            )}
        </div>
    )
}

export default Search
