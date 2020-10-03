import React from 'react';

class Ledger extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        const rows = this.props.history.map((record, step) => {
            console.log("step:", step, "record:", record);
            return (
                <tr key={step}>
                    <td>{record.id}</td>
                    <td>{record.action}</td>
                    <td>{record.amount}</td>
                    <td>{record.value}</td>
                    <td><button onClick={() => this.props.showDetail(step)}>Detail</button></td>
                </tr>
            );
        });
        console.log("rows:", rows);
        return(
            <div>
                <h1>{this.props.data.title}</h1>
                <p>{this.props.data.description}</p>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>TransactionID</th>
                            <th>Action</th>
                            <th>Amount</th>
                            <th>Value</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        )
    }
}

export default Ledger;
