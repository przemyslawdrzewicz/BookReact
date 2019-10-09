import React from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import {Link} from "react-router-dom";

class FormBook extends React.Component
{
    constructor(props)
    {
        super(props);
        this.book = this.book.bind(this);

        this.state ={
            error: ""
        };
    }

    componentDidMount()
    {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".availableHouses").offset().top
        }, 1000);
    }

    book(e)
    {
        var fname = $("#fname").val();
        var sname = $("#sname").val();
        var datefrom = $("#bookDateFrom").val();
        var dateto = $("#bookDateTo").val();
        var room = this.props.roomNumber;
        var people = this.props.people;

        if(fname === "")
        {
            e.preventDefault();
            this.setState({
                error: "Uzupełnij imię."
            });
        }
        else if(sname==="")
        {
            e.preventDefault();
            this.setState({
                error: "Uzupełnij nazwisko."
            });
        }
        else
        {
            this.setState({
                error: ""
            });

            $.ajax({
                type: "POST",
                url: "http://localhost/api/book.php",
                data: {fname: fname ,sname: sname, datefrom: datefrom, dateto: dateto, room: room, people: people},
                cache: false,
                success: function(html){
                  if(html === false)
                  {
                      e.preventDefault();
                  }
                }
              });
        }
      }
    

    render()
    {
        var arrival = $("#datepicker1").val();
        var departure = $("#datepicker2").val();

        return(
            <div className="row text-center size housesHeight formStyle"> 
                    <div className="col-lg-12  availableHousesDiv ">
                        <p className="availableHouses">Rezerwacja</p>
                    </div>

                    <div className="col-lg-6">
                        <div className="col-lg-12">
                            <p>Imię:</p>
                            <input type="text" name="fname" id="fname"/>
                        </div>
                        <div className="col-lg-12">
                            <p>Nazwisko:</p>
                            <input type="text" name="sname" id="sname"/>
                        </div>
                        <div className="col-lg-12">
                            <p>Przyjazd:</p>
                            <input type="text" name="datefrom" id="bookDateFrom" defaultValue={arrival}/>
                        </div>
                        <div className="col-lg-12">
                            <p>Odjazd:</p>
                            <input type="text" name="dateto" id="bookDateTo" defaultValue={departure}/>
                        </div>
                        <div className="col-lg-12">
                        <Link to="/success">
                            <button onClick={this.book} type="button" id="formbtn" className="btn btn-dark" name="formbtn">Zarezerwuj</button>
                        </Link>
                            <p id="errForm">{this.state.error}</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                            <img className="imgHouses" src={"/img/"+this.props.roomNumber+".jpg"} alt={this.props.roomNumber} height="231" width="400"/>

                        <p className="pRoomName">{this.props.roomNumber}</p>
                    </div>
            </div>
        );
    }
}

export default FormBook;