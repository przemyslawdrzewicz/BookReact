import React from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import {Link} from "react-router-dom";

class Booked extends React.Component
{
    componentDidMount()
    {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".availableHouses").offset().top
        }, 1000);

        $('#booked').hide().fadeIn(2000);
    }

    render()
    {
        return(
            <div id="booked" className="row text-center size housesHeight formStyle"> 
                    <div className="col-lg-12  availableHousesDiv ">
                        <p className="availableHouses">Rezerwacja</p>
                    </div>
                        <div className="col-lg-12">
                            <p id="bookedInfo">
                                Rezerwacja została dokonana.
                            </p>
                            <Link to="/">
                                <button id="mainPage" type="button" className="btn btn-success">Przejdź do strony głównej</button>
                            </Link>
                        </div>
            </div>
        );
    }
}

export default Booked;