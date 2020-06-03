import React, { Fragment } from 'react'

// A classe "Fragment" torna uma tag html oculta dentro do "inspect" da aplicação.

const AboutApp = () => {
    return (
        <Fragment>
            <h1>About This App</h1>
            <p>App to search Github users</p>
            <p>Version: 1.0.0</p>
        </Fragment>
    )
}
export default AboutApp
