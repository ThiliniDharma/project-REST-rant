const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            {/* <div className="row align-center"> */}
            <div className="row">
              <div className="col-sm-6">
                {/* <img className="img1" src="/images/cat_latte.jpg" alt="latte picture"/> */}
                <img className="img1" src={data.place.pic} alt={data.place.name} />
                <h3>
                Located in {data.place.city}, {data.place.state}
                </h3>
              </div>
              <div className="col-sm-6">
              <h1>{ data.place.name }</h1>
                <h2>Rating</h2>
                <h5>Not rated</h5>
                <br></br>
                <h2>
                    Description
                </h2>
               <h3>
                {data.place.showEstablished()}
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>
                <br></br>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit<span><i class="fas fa-pencil-alt"></i></span>
              </a>
              <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                Delete<span><i class="fas fa-trash"></i></span>
                </button>
              </form> 
              </div>
            </div>
                <hr></hr>
                <h2>Comments</h2>
                <div className="row">
                <h5>No comments yet!</h5>         
                </div>
           
            {/* <div className="row align-center"> */}
            {/* <div className="row"> */}
              {/* <div className="col text-right">
              <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit<span><i class="fas fa-pencil-alt"></i></span>
              </a>
              </div>  */}
              {/* <div className="col text-left"> */}
              {/* <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                Delete<span><i class="fas fa-trash"></i></span>
                </button>
              </form>  */}
            
          
          </main>
        </Def>
    )
}

module.exports = show

