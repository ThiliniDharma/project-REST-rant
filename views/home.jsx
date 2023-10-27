//import react and Def ()
const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img className="homeimg" src="/images/burger.jpg" alt="burger picture"/>
                <div className="hyper">
        Photo by <a href="AUTHOR_LINK"> Amirali Mirhashemian</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
              </div>
                
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  module.exports = home

