const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className="row align-center">
              <div className="col">
                <img className="img1" src="/images/cat_latte.jpg" alt="latte picture"/>
              </div>
              <div className="col">
              <h1>{ data.place.name }</h1>
                <h2>Rating</h2>
                <h5>Not rated</h5>
                <br></br>
                <h2>Description</h2>
                <h5>Located in{data.place.city},  {data.place.state} and serving {data.place.cuisines}</h5>
              </div>
                <hr></hr>
                <div>
                <h2>Comments</h2>
                <h5>No comments yet!</h5>
          
              </div>
            </div>
           
            <div className="row align-center">
              <div className="col text-right">
              <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit<span><i class="fas fa-pencil-alt"></i></span>
              </a>
              </div> 
              <div className="col text-left">
              <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                Delete<span><i class="fas fa-trash"></i></span>
                </button>
              </form> 
              </div>
            </div>
          </main>
        </Def>
    )
}

module.exports = show
