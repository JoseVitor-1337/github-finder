import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' ;
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Home from './components/pages/Home';
import Alert from './components/layout/Alert';
import NotFound from './components/pages/NotFound'
import AboutApp from './components/pages/AboutApp';

import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

import './App.css'; // C.S.S global (e bem estruturado por sinal)


const App = (props) => {

    return (
      <GithubState>
        <AlertState>
          <Router>
              <div className="App">
                  <Navbar title='Githuber Finder' icon='fab fa-github'/> 
                  <div className="container">
                      <Alert />  
                      <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path='/about' component={AboutApp} />
                        <Route exact path='/user/:login' component={User} /> 
                        <Route component={NotFound} />
                      </Switch>
                  </div>
              </div>  
          </Router>  
        </AlertState>
      </GithubState>
    );
}

export default App

/* 
  props: são as propridades passadas dentro de um componente (seja dinamicamente ou não) para
  influenciar no resultado da renderização do mesmo, é um objeto javascript. Ele é passado
  omo parâmetro de função.
*/

/* 
  state: é semelhante ao props. a única diferença é que ele é gerenciado dentro do componente
  (como varíaveis dinâmicas do próprio componente), já "props" é passado como parâmetro.
*/

/*
  Router: È um componente roteador que serve para controlar os caminhos de cada página de sua
  aplicação. Link: https://reacttraining.com/react-router/web/api/Router

  Route: Sua responsabilidade mais básica é renderizar uma interface do usuário 
  quando um local corresponde ao caminho da rota. Link: https://reacttraining.com/react-router/web/api/Route

  Switch: Ele serve para controler o acesso das rotas dentro do <Router> para que um caminho (path) 
  não renderize um componente de outra rota. Link: https://reacttraining.com/react-router/web/api/Switch
*/
