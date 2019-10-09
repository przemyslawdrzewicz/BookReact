import React from 'react';

import { BrowserRouter as
  Router,
  Switch,
  Route
} from "react-router-dom";
import {Link} from "react-router-dom";


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Main";
import Arrival from "./Arrival";
import Departure from "./Departure";
import PeopleNumber from "./PeopleNumber";
import FindButton from "./FindButton";
import HotelContainer from "./HotelContainer";
import FormBook from "./FormBook";
import Booked from "./Booked";

import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';


class App extends React.Component
{
  constructor(props)
  {
    super(props);

    this.updateAmount = this.updateAmount.bind(this);
    this.updateHouses = this.updateHouses.bind(this);
    this.updateImages = this.updateImages.bind(this);
    this.returnRoom = this.returnRoom.bind(this);

    this.state = {
      peopleAmount: 1,
      housesBoard: [],
      imagesBoard: [],
      room: ""
    }
  }

  componentDidMount() {
    $("#datepicker1").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker("setDate", new Date());
    $("#datepicker2").datepicker({ dateFormat: 'yy-mm-dd' }).datepicker("setDate", new Date());
  }

  updateAmount(e)
  {
    this.setState({
      peopleAmount: e
    });
  }

  updateHouses(house)
  {
    this.setState({
      housesBoard: house
    });
  }

  updateImages(img)
  {
    this.setState({
      imagesBoard: img
    });
  }

  returnRoom(r)
  {
    this.setState({
      room: r
    });
  }

  render()
  {
    return(
      <Router>
        <div>
          <div className="backgr">
                <div className="row text-center size my-auto">       
                  <div className="col-lg-4 col-md-6">
                    <Arrival/>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <Departure />
                  </div>
                  <div className="col-lg-4">
                    <PeopleNumber amount={this.updateAmount} /> 
                  </div>
                  <div className="col-lg-12">
                    <Link to="/houses"><FindButton buttonPAmount={this.state.peopleAmount} bHouses={this.updateHouses} bImages={this.updateImages}/></Link>
                  </div> 
                </div>
          </div>
              <div>
                <Switch>
                  <Route path="/" exact component={Main} />
                  <Route path='/houses' render={(props) => <HotelContainer {...props} housesProps=          {this.state.housesBoard} imagesProps={this.state.imagesBoard} returnedRoom={this.returnRoom} />}/>
                  <Route path='/book' render={(props) => <FormBook {...props} roomNumber={this.state.room} people={this.state.peopleAmount}/>}/>
                  <Route path='/success' render={(props) => <Booked />}/>
                </Switch>
              </div>
        </div>
    </Router>
    )
  }
}

export default App;
