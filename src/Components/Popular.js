import React from 'react';
import Card from './Card';

export default class Popular extends React.Component {
  constructor(props) {
    super();
    this.state = {
      languageToSearchFor: 'All',
      isLoading: false,
      dataArray: [],
    };
  }

  handleClick = (lang) => {
    this.setState({
      isLoading: true,
      languageToSearchFor: lang,
    });

    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.languageToSearchFor}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'check data');
        let repos = data.items
          ? data.items.reduce((acc, cv, i) => {
              if (i <= 19) {
                acc = acc.concat(cv);
              }
              return acc;
            }, [])
          : '';
        this.setState({
          dataArray: repos,
          isLoading: false,
        });
      });
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.languageToSearchFor}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => {
        let repos = data.items.reduce((acc, cv, i) => {
          if (i <= 19) {
            acc = acc.concat(cv);
          }
          return acc;
        }, []);
        this.setState({
          dataArray: repos,
          isLoading: false,
        });
      });
  }

  addClass = (lang) => {
    if (this.props.darkMode && this.state.languageToSearchFor == lang) {
      return 'active-red font-bold ml-3 cursor-pointer';
    } else if (this.props.darkMode && this.state.languageToSearchFor != lang) {
      return 'text-greyish font-bold ml-3 cursor-pointer';
    } else if (!this.props.darkMode && this.state.languageToSearchFor == lang) {
      return 'active-red font-bold ml-3 cursor-pointer';
    } else if (!this.props.darkMode && this.state.languageToSearchFor != lang) {
      return 'font-bold ml-3 cursor-pointer';
    }
  };

  render() {
    let { darkMode } = this.props;
    let allLanguages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    let { languageToSearchFor, isLoading, dataArray } = this.state;
    return (
      <>
        <ul className="flex justify-center items-center">
          {allLanguages.map((lang, i) => {
            return (
              <li
                onClick={() => this.handleClick(lang)}
                className={this.addClass(lang)}
                key={i}
              >
                {lang}
              </li>
            );
          })}
        </ul>
        {isLoading ? (
          <div
            className={
              darkMode
                ? 'classic-1  flex justify-center font-semibold text-2xl my-5 text-greyish'
                : 'classic-1  flex justify-center font-semibold text-2xl my-5'
            }
          ></div>
        ) : (
          <div className="my-5 flex container justify-around flex-wrap">
            {dataArray.map((obj, i) => {
              return (
                <Card
                  key={obj.created_at}
                  index={i}
                  name={obj.name}
                  image={obj.owner.avatar_url}
                  stars={obj.watchers}
                  forks={obj.forks}
                  openIssues={obj.openIssues}
                  darkMode={this.props.darkMode}
                />
              );
            })}
          </div>
        )}
      </>
    );
  }
}
