import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOSITORY,
  GET_USER,
} from "../types";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACt_APP_GITHUB_CLIENTE_ID;
  githubClientSecret = process.env.REACt_APP_GITHUB_CLIENTE_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

/* 
    Trabalhar com "ContextApp" é forneçer todas as suas ações (funções) e propriedades (state), em um só lugar
    e deste local mandar tudos para sua aplicação. Acaba usando 2 hooks, o "useReducer()" e o "useContext()" 
*/

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  // este "hook" faz com que altere o valor do state de acordo com a ação chamada e o tipo da ação
  // passando o estado "state" e as alterações "dispatch".
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Github Users - Pesquisa sem carregar a página, Impressionante!
  const searchUsers = async (text) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/search/users?q=${text}
                                    &cliente_id=${githubClientId}
                                    &cliente_secret=${githubClientSecret}`);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // Get single github user
  const getUser = async (login) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${login}?&cliente_id=${githubClientId}&cliente_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  // Get a repository from a sinle github user
  const getUserRepository = async (login) => {
    setLoading(true);

    const res =
      await axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc
                                    &cliente_id=${githubClientId}
                                    &cliente_secret=${githubClientSecret}`);

    dispatch({
      type: GET_REPOSITORY,
      payload: res.data,
    });
  };

  // Clear Users in Page, if has appears someone
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  /* 
        irá retornar um provedor (Provider) com todos os status e as ações dentro do contexto do github
        (GithubContext) isso quer dizer que tudo o que o github dentro desta aplicação pode fazer está dentro
        do contexto, seus estados (state) e ações (métodos)
    */

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepository,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
