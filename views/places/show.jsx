const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
          <div className="col-sm-6">
            {/* <img src={place.pic}/> */}
            <img className="img1" src="/images/cat_latte.jpg" alt="latte picture"/>
            {/* <h1>Show Page</h1> */}
            </div>
            <div className="col-sm-6">
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
            <h5>Not rated</h5>
            <br></br>
            <div className="col-sm-6">
            <h2>Description</h2>
            <h5>Located in Phoenix,AZ and serving Coffee,Bakery</h5>
            </div>
            <br></br>
            <br></br>
            </div>
            <div>
            <hr></hr>
            <p className="text-center">
            <h2>Comments</h2>
            <h5>No comments yet!</h5>
            </p>
            </div>
            <div className="col-sm-6">
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            Edit<span><i class="bi bi-pencil-square"></i></span>
            </a>
            </div> 
            <br></br> 
            <div>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
            Delete<span><i class="bi bi-trash3"></i></span>
            </button>
            </form> 
            </div>    
          </main>
        </Def>
    )
}

module.exports = show
