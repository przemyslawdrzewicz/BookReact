import React from 'react';

class Departure extends React.Component
{
    render()
    {
      return(
            <table className="mx-auto table-bordered" >
                <tbody>
                    <tr>
                        <td>
                        <p>Wyjazd</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <input type="text" id="datepicker2"/>
                        </td>
                    </tr>
                </tbody>
            </table>
      );
    }
}

export default Departure;