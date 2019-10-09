import React from 'react';
import {Link} from "react-router-dom";

class HotelContainer extends React.Component
{
    constructor(props)
    {
      super(props);
      this.clickedRoom = this.clickedRoom.bind(this);

      this.state ={
        room: ""
      };
    }
  
    clickedRoom(e)
    {
      var r = e.target.id;
      this.setState({
        room: r
      });

      this.props.returnedRoom(r);
    }

    render()
    {
      //console.log(this.props.housesProps);
      var tabLength = this.props.imagesProps.length;
      var bootClass = "";
      
      if(tabLength === 2)
      {
        bootClass = "col-lg-6 col-md-12 ";
      }
      else if(tabLength === 3)
      {
        bootClass = "col-lg-4 col-md-6 "; 
      }
      else
      {
        bootClass = "col-lg-12 ";
      }

      return(

        <div className="row text-center size housesHeight"> 
          <div className="col-lg-12 availableHousesDiv">
          <p className="availableHouses">Dostępne pokoje</p>
        </div>
            {this.props.imagesProps.map((value, index) => {
              return (
                  <div key={index} className={bootClass}>
                    <Link to="/book">
                      <img id={this.props.housesProps[index]} onClick={this.clickedRoom} className="imgHouses" key={index} src={"/img/"+value} alt={value} height="173" width="300"/>
                        <p className="pRoomName">{this.props.housesProps[index]}</p>
                    </Link>
                  </div>
                )            
            })}
        </div>
      );
    }
}

export default HotelContainer;