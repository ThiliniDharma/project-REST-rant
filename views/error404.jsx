// import React and the Def()
const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
        <div>
            <img className="errorimg" src="/images/cat.jpg" alt="funny cat picture"/>
        </div> 
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }

  module.exports =error404