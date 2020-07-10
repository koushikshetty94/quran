import React, { useRef } from "react";

function Home(props){
   let verseNum = useRef(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
    props.setData(verseNum.current.value)
    props.history.push('/details');

  }
  console.log(props.history);
    return (
      <div className="App">
        <form>
          <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control w-25 p-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              ref={verseNum}
            />
            <small id="emailHelp" className="form-text text-muted text-left">
              We'll never share your email with anyone else.
            </small>
          </div>
          <button
            type="submit text-left"
            className="btn btn-primary"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  
}

export default Home;
