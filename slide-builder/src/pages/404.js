import React from 'react'

const styles = {
  root: {
    width: '50%',
    margin: '0 auto',
    textAlign: 'center',
    marginTop: '20%'
  }
}

const NotFoundPage = () => (
  <main css={styles.root}>
    <h1>404 - Page not found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </main>
)

export default NotFoundPage
