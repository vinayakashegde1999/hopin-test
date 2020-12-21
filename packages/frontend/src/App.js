  import React, {Component} from 'react';

const serverPort = 3001; 
const serverURL = `http://localhost:${serverPort}/`;

class CustomerApp extends Component {

  state = {
    name: null,
    timestamp: null,
    customers: null,
    customer: null
  };

  async getCustomer(customer){
    this.setState({customer})
  }

  async getCustomers(){
    const userName = document.getElementById("name").value;
    if(!userName || userName === ""){
      alert("Please provide your name");
      return;
    }

    const axios = require('axios');
    const server = axios.create({
      baseURL: serverURL
    });

    try {
      const response = await server.post('/', { name: userName });
      const { name, timestamp, customers } = response.data;
      this.setState({name, timestamp, customers });
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <div>
        { !this.state.name &&
          <div>
            <p data-cy="name-text">Please provide your name:</p>
            <p>
              <input type="text" data-cy="input-text" id="name"/>
              <input type="button" data-cy="submit-button" data value="Submit" onClick={this.getCustomers.bind(this)}/>
            </p>
          </div>
        }
        { this.state.name && 
          <div>
            <p data-cy="information">Hi <b>{this.state.name}</b>. It is now <b>{this.state.timestamp}</b> and here is our customer list. Click on each of them to view their contact details.</p>
            { !this.state.customer &&
            <div>
              <table data-cy="customerTable" border="1">
                <thead>
                  <tr data-cy="customer-header">
                    <th data-cy="customer-company-name">Name</th>
                    <th data-cy="customer-employee-count"># of Employees</th>
                    <th data-cy="customer-company-size" >Size</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.customers.map(customer => 
                    <tr  data-cy={`customer-row-name-${customer.id}`}  key={customer.id}>
                      <td><a   data-cy="customer-row-link" href="#" onClick={() => this.getCustomer(customer)}>{customer.name}</a></td>
                      <td data-cy="customer-row-employees">{customer.employees}</td>
                      <td data-cy="customer-row-size">{customer.size}</td>
                    </tr>  
                  )}
                </tbody>
              </table>
            </div>
            }
            { this.state.customer &&
              <div data-cy="customer-details">
                <p  data-cy="customer-details-heading"><b>Customer Details</b></p>
                <p data-cy="customer-details-name"><b>Name:</b> {this.state.customer.name}</p>
                <p data-cy="customer-details-employees"><b># of Employees:</b> {this.state.customer.employees}</p>
                <p data-cy="customer-details-size"><b>Size:</b> {this.state.customer.size}</p>
                <p data-cy="customer-details-contact"><b>Contact:</b> {this.state.customer.contactInfo.name} ({this.state.customer.contactInfo.email})</p>
                <input data-cy="customer-details-back-button" type="button" value="Back to the list" onClick={() => this.setState({customer: null})}/>
              </div>
            }
          </div>
        }
        
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <h1 data-cy="app-heading">Welcome to Customer App</h1>
      <CustomerApp/>
    </div>
  );
}

export default App;
