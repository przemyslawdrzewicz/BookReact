import React from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

class FindButton extends React.Component
{
  constructor(props)
  {
    super(props);

    this.sendRequest = this.sendRequest.bind(this);
    this.checkAvailability = this.checkAvailability.bind(this);

    this.state = {
      housesBoard: [],
      imagesBoard: []
    }
  }

  sendRequest(e)
  {
    var arrival = $("#datepicker1").val();
    var departure = $("#datepicker2").val();
    var peopleAmount = this.props.buttonPAmount;

    $.ajax({
      type: "POST",
      url: "http://localhost/api/index.php",
      data: {arrival: arrival ,departure: departure, peopleAmount: peopleAmount},
      cache: false,
      success: function(html){
        this.checkAvailability(html, peopleAmount);   
      }.bind(this)
    });
  }

  checkAvailability(responseServer, peopleAmount)
  {
    
    var houses = [];
    var img = [];

    var houses1p = ['Room 4', 'Room 8'];
    var houses2p = ['Room 1', 'Room 3', 'Room 6', 'Room 7', 'Room 9'];
    var houses3p = ['Room 2', 'Room 5'];
    
    for(var u=1; u<=9; u++)
    {
      houses.push("Room "+ u);
    }

    if(responseServer !== "0 results")
    {
      if(peopleAmount === 1)
      {
        houses1p = houses1p.filter(val => !responseServer.includes(val));
        houses = houses1p.slice();
      }
      else if(peopleAmount === 2)
      {
        houses2p = houses2p.filter(val => !responseServer.includes(val));
        houses = houses2p.slice();
      }
      else if(peopleAmount === 3)
      {
        houses3p = houses3p.filter(val => !responseServer.includes(val));
        houses = houses2p.slice();
      }     
    }
    else
    {
      if(peopleAmount === 1)
      {
        houses = houses1p.slice();
      }
      else if(peopleAmount === 2)
      {
        houses = houses2p.slice();
      }
      else if(peopleAmount === 3)
      {
        houses = houses3p.slice();
      }
    }

    img = houses.slice();

    for(var i=0; i<img.length; i++)
    {
      img[i] = img[i]+".jpg";
    }

      this.setState({
        housesBoard: houses,
        imagesBoard: img
      });

      this.props.bHouses(this.state.housesBoard);
      this.props.bImages(this.state.imagesBoard);

      $([document.documentElement, document.body]).animate({
        scrollTop: $(".availableHouses").offset().top
      }, 1000);
  }

    render()
    {
      return(
          <button type="button" onClick={this.sendRequest}className="btn btn-warning yellow-background" id="searchHousesButton">Znajdź</button>
      );
    }
}

export default FindButton;