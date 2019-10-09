import React from 'react';

class PeopleNumber extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            number: 1
        }
        
        this.IncrementNumber = this.IncrementNumber.bind(this);
        this.DecrementNumber = this.DecrementNumber.bind(this);
        this.sendIncDecToParent = this.sendIncDecToParent.bind(this);
    }

    IncrementNumber()
    {
        if(this.state.number < 3)
        {
            this.setState({
                number: this.state.number + 1
            },
                this.sendIncDecToParent
            );
        }
    }

    sendIncDecToParent()
    {
        this.props.amount(this.state.number);
    }

    DecrementNumber()
    {
        if (this.state.number > 1)
        {
            this.setState({
                number: this.state.number - 1
            },
                this.sendIncDecToParent
            );
        }
    }

    render()
    {
      return(
            <table className="mx-auto table-bordered">
                <tbody>
                    <tr>
                        <td>
                        <p>Ilość osób</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <div id="my-center">
                            <button type="button" onClick={this.DecrementNumber} className="float-left but">-</button>
                            <p className="float-left p-amount-people">{this.state.number}</p>
                            <button type="button"  onClick={this.IncrementNumber} className="float-left but">+</button>
                        </div>
                        </td>
                    </tr>
                </tbody>
            </table>
      );
    }
}

export default PeopleNumber;