import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import { fetchItems, addItem} from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import slugify from "slugify";
import AddForm from "./AddForm";
import Item from "./Item";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      snacks : [],
      drinks: []
    };
    this.addItem = this.addItem.bind(this);
  }

  async componentDidMount() {
      let snacks = await fetchItems("snacks");
      let drinks = await fetchItems("drinks");
      this.setState({ snacks, drinks, isLoading: false });
  }

  async addItem(type, { name, description, recipe, serve}) {
    let id = slugify(name, { lower: true });
    let objData = { id, name, description, recipe, serve };
    console.log(this.state);
    await addItem(type, objData);
    this.setState(st => ({
      [type]: [...st[type], objData]
    }));
  }
  
  render() {
    let { snacks, drinks } = this.state;

    if (this.state.isLoading) {
      return <p>Loading &hellip;</p>;
    }  

  return (
    <div className="App">

        <NavBar />
        <main>
          <Switch>
            <Route exact path="/"
              render={() => 
              <Home snacks={snacks} drinks={drinks} />}
            />
          
            
            <Route exact path="/snacks/"
              render={() =>
              <Menu items={snacks} title="Snacks" />}
              />
          
            
            <Route exact path="/drinks/"
              render={() => 
              <Menu items={drinks} title="Drinks" />}
            />

            <Route path="/snacks/:id"
              render={props => (
              <Item items={snacks} cantFind="/snacks/"  {...props} />)}
            />

            <Route path="/drinks/:id"
              render={props => (
              <Item items={drinks} cantFind="/drinks/"  {...props} />)}
            />

            <Route
              path="/add/"
              render={props => 
              <AddForm addItem={this.addItem} {...props} /> }
            />

            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
    </div>
  );
}
}
export default App;
