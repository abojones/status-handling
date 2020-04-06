import React, {Component} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    }
  }

  handleAdd = (type) => {
    const {orders} = this.state;
    switch (type) {
      case "processing":
      case "success":
        this.setState({
          orders: orders.concat({
            state: type
          })
        });
        break;
      case "NO_STOCK":
      case "INCORRECT_DETAILS":
        this.setState({
          orders: orders.concat({
            state: 'error',
            errorCode: type
          })
        });
        break;
      case "null":
        this.setState({
          orders: orders.concat({
            state: 'error',
            errorCode: null
          })
        });
        break;
      case "undefined":
        this.setState({
          orders: orders.concat({
            state: 'error'
          })
        });
        break;
    }
  };

  /* The core helper method for the challenge */
  handleSubmit = (e) => {
    e.preventDefault();
    const { orders } = this.state;
    let delay = 0;
    let timeouts = [];
    for (let i=0; i<orders.length; i++) {
      let currOrder = orders[i];
      let id = setTimeout(() => {
        switch (currOrder.state) {
          case "processing":
            break;
          case "success":
            return alert("title: 'Order complete', message: null");
          case "error":
            if (currOrder.errorCode) {
              switch (currOrder.errorCode) {
                case "NO_STOCK":
                  return alert("title: 'Error page', message: 'No stock has been found'");
                case "INCORRECT_DETAILS":
                  return alert("title: 'Error page', message: 'Incorrect details have been entered'")
              }
            } else {
              return alert("title: 'Error page', message: null")
            }
            break;
        }
      }, delay);
      timeouts.push(id);

      if (currOrder.state === "processing") {
        delay += 2000
      } else {
        break;
      }
    }
  };
  /***********/

  renderList = () => {
    const {orders} = this.state;
    let list = [];
    orders.map((elem, index) => (
      list.push(
        <div className="list__status" key={index}>
          <div>State: {elem.state}</div>
          <div>{elem.errorCode ? `errorCode: ${elem.errorCode}` : null}</div>
        </div>)
    ));
    return list;
  };

  clearList = () => {
    this.setState({
      orders: []
    })
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="controls">
            <div className="controls__status">
              <h3>Processing</h3>
              <button onClick={() => this.handleAdd("processing")}>Add</button>
            </div>
            <div className="controls__status">
              <h3>Success</h3>
              <button onClick={() => this.handleAdd("success")}>Add</button>
            </div>
            <div className="controls__status">
              <h3>Error - No Stock</h3>
              <button onClick={() => this.handleAdd("NO_STOCK")}>Add</button>
            </div>
            <div className="controls__status">
              <h3>Error - Incorrect details</h3>
              <button onClick={() => this.handleAdd("INCORRECT_DETAILS")}>Add</button>
            </div>
            <div className="controls__status">
              <h3>Error - null</h3>
              <button onClick={() => this.handleAdd("null")}>Add</button>
            </div>
            <div className="controls__status">
              <h3>Error - undefined</h3>
              <button onClick={() => this.handleAdd("undefined")}>Add</button>
            </div>
          </div>
          <button onClick={this.handleSubmit} type="submit">Submit</button>
          <button onClick={this.clearList}>Clear list</button>
        </div>
        <div className="list">
          {this.renderList()}
        </div>
      </div>
    );
  }

}