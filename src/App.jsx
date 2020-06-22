import React from "react";

import api from "./service/api";

import TopBar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      inputFilter: "",
      filterType: "name",
      originalData: [],
    };
  }

  handleOrder = (filterType) => {
    let orderedArray = this.state.originalData.sort((a, b) => {
      if (a[filterType] > b[filterType]) {
        return 1;
      }
      if (a[filterType] < b[filterType]) {
        return -1;
      }
      return 0;
    });

    this.setState({
      ...this.state,
      inputFilter: "",
      data: orderedArray,
      filterType,
    });
  };

  handleFilter = (e) => {
    if (e.target.value === "") {
      this.setState({
        ...this.state,
        data: this.state.originalData,
        inputFilter: e.target.value,
      });
      return;
    }

    let newContacts = this.state.originalData.reduce((array, object) => {
      if (object[this.state.filterType].includes(e.target.value)) {
        array.push(object);
      }
      return array;
    }, []);

    this.setState({
      ...this.state,
      inputFilter: e.target.value,
      data: newContacts,
    });
  };

  async componentWillMount() {
    await api.get("contacts").then((response) => {
      this.setState({
        ...this.state,
        data: response.data,
        originalData: response.data,
      });
      this.handleOrder(this.state.filterType);
    });
  }

  render() {
    return (
      <React.Fragment>
        <div class="app container" data-testid="app">
          <TopBar />
          <Filters
            handleOrder={this.handleOrder}
            handleFilter={this.handleFilter}
            filterType={this.state.filterType}
            inputData={this.state.inputFilter}
          />
          <Contacts data={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
