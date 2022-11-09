import React from 'react';
import { NavLink, activeClassName, Route, Switch } from 'react-router-dom';
import Popular from './Popular';
import Battle from './Battle';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      darkMode: false,
    };
  }

  render() {
    let body = document.querySelector('body');
    if (this.state.darkMode) {
      body.className = 'dark-bg';
    } else {
      body.classList.remove('dark-bg');
    }

    return (
      <>
        <header className="pt-10  container flex justify-between items-center pb-5">
          <div>
            <NavLink
              activeClassName="active-red"
              className={
                this.state.darkMode
                  ? 'text-gray-50 text-xl font-semibold'
                  : 'text-[#010100] ml-3 text-xl font-semibold'
              }
              to="/"
              exact
            >
              Popular
            </NavLink>
            <NavLink
              activeClassName="active-red"
              className={
                this.state.darkMode
                  ? 'text-gray-50 text-xl ml-3 font-semibold'
                  : 'text-[#010100] ml-3 text-xl font-semibold'
              }
              to="/battle"
            >
              Battle
            </NavLink>
          </div>

          <div className="relative">
            <button
              onClick={() => {
                this.setState({
                  darkMode: !this.state.darkMode,
                });
              }}
              className="text-2xl absolute  hover:text-3xl transition-all duration-1000"
              type="button"
            >
              {this.state.darkMode ? '💡' : '🔦'}
            </button>
          </div>
        </header>

        <Switch>
          <Route path="/" exact>
            <Popular darkMode={this.state.darkMode} />
          </Route>
          <Route path="/battle" exact>
            <Battle darkMode={this.state.darkMode} />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
