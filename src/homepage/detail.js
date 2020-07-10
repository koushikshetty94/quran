import React from "react";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null,
    };
  }
  componentDidMount() {
    fetch(`http://api.alquran.cloud/v1/page/${this.props.data}/en.asad`)
      .then((res) => res.json())
      .then((page) => this.setState({ details: page }));
  }
  render() {
    console.log(this.state.details && this.state.details);
    return this.state.details ? (
      <div className="container">
          {this.state.details && this.state.details.data.ayahs.map((ayah)=>{
              return(
                <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{ayah.number}</h5>
                        <p className="card-text">{ayah.text}
                        </p>
                    <a href="#" className="card-link">
                        Card link
                    </a>
                    <a href="#" className="card-link">
                        Another link
                    </a>
                </div>
                </div>
          )})} 
        
      </div>
    ) :null;
  }
}
export default Detail;
