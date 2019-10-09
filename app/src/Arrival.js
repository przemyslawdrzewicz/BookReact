import React from 'react';

class Arrival extends React.Component
{
    render()
    {
      return(
            <table className="mx-auto table-bordered">
                <tbody>
                    <tr>
                        <td>
                        <p>Przyjazd</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <input type="text" id="datepicker1"/>
                        </td>
                    </tr>
                </tbody>
            </table>
      );
    }
}

export default Arrival;