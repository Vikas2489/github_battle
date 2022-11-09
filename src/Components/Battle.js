import React from 'react';
import Winner_And_Looser from './Winner_And_Loser';

export default class Battle extends React.Component {
  constructor(props) {
    super();
    this.state = {
      playerOne: '',
      playerOneInfo: '',
      playerTwo: '',
      playerTwoInfo: '',
      winner: '',
      looser: '',
      winnerScore: '',
      looserScore: '',
    };
  }

  handleSubmit = (e, player) => {
    e.preventDefault();
    if (player == 'playerOne') {
      fetch(`https://api.github.com/users/${this.state.playerOne}`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            playerOneInfo: data,
          });
        });
    } else if (player == 'playerTwo') {
      fetch(`https://api.github.com/users/${this.state.playerTwo}`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            playerTwoInfo: data,
          });
        });
    }
  };

  handleChange = (e, player) => {
    if (player == 'playerOne') {
      this.setState({
        playerOne: e.target.value,
      });
    } else {
      this.setState({
        playerTwo: e.target.value,
      });
    }
  };

  clearPlayerInfo = (player) => {
    if (player == 'playerOne') {
      this.setState({
        playerOneInfo: '',
      });
    } else {
      this.setState({
        playerTwoInfo: '',
      });
    }
  };

  addStylesToSubmit = (player) => {
    let { playerOne, playerTwo } = this.state;
    let { darkMode } = this.props;

    if (player == 'playerOne') {
      if (!darkMode && !playerOne) {
        return 'tracking-[0.2rem] rounded bg-[#F3F2F3] text-[#CCCDCC] border-color-[#F3F2F3] px-6 py-1 border-t-[1.9px] border-solid';
      } else if (!darkMode && playerOne) {
        return 'tracking-[0.2rem] bg-[black] text-[white] border-color-[black] px-6 py-1 border-t-[2px] rounded border-solid ';
      } else if (darkMode && !playerOne) {
        return 'tracking-[0.2rem] bg-[#282829] text-[#444444]  px-6 py-1  rounded ';
      } else {
        return 'tracking-[0.2rem] bg-[#282829] text-[#444444] bg-[#ABA9A8] px-6 py-1  rounded ';
      }
    } else {
      if (!darkMode && !playerTwo) {
        return 'tracking-[0.2rem] rounded bg-[#F3F2F3] text-[#CCCDCC] border-color-[#F3F2F3] px-6 py-1 border-t-[1.9px] border-solid';
      } else if (!darkMode && playerTwo) {
        return 'tracking-[0.2rem] bg-[black] text-[white] border-color-[black] px-6 py-1 border-t-[2px] rounded border-solid ';
      } else if (darkMode && !playerTwo) {
        return 'tracking-[0.2rem] bg-[#282829] text-[#444444]  px-6 py-1  rounded ';
      } else {
        return 'tracking-[0.2rem] bg-[#282829] text-[#444444] bg-[#ABA9A8] px-6 py-1  rounded ';
      }
    }
  };

  handleReset = () => {
    console.log('reset');
    return this.setState({
      playerOne: '',
      playerOneInfo: '',
      playerTwo: '',
      playerTwoInfo: '',
      winner: '',
      looser: '',
      winnerScore: '',
      looserScore: '',
    });
  };

  handleClickOnBattle = () => {
    let player1 =
      this.state.playerOneInfo.followers * 20 +
      this.state.playerOneInfo.public_repos;
    let player2 =
      this.state.playerTwoInfo.followers * 20 +
      this.state.playerTwoInfo.public_repos;

    if (player1 > player2) {
      return this.setState({
        winner: this.state.playerOneInfo,
        looser: this.state.playerTwoInfo,
        winnerScore: player1,
        looserScore: player2,
      });
    } else {
      return this.setState({
        winner: this.state.playerTwoInfo,
        looser: this.state.playerOneInfo,
        winnerScore: player2,
        looserScore: player1,
      });
    }
  };

  render() {
    let { playerOneInfo, playerTwoInfo, winner } = this.state;
    let { darkMode } = this.props;
    return winner ? (
      <Winner_And_Looser
        handleReset={this.handleReset}
        winner={this.state.winner}
        winnerScore={this.state.winnerScore}
        looserScore={this.state.looserScore}
        darkMode={darkMode}
        looser={this.state.looser}
      />
    ) : (
      <div className="container">
        <h3
          className={
            darkMode
              ? 'text-center text-3xl text-greyish'
              : 'text-center text-3xl'
          }
        >
          Instructions
        </h3>
        <ul className="flex justify-center my-16 space-x-24">
          <li>
            <p
              className={
                darkMode
                  ? 'text-center text-xl mb-3 font-thin text-greyish'
                  : 'text-center text-xl mb-3 font-thin'
              }
            >
              Enter two Github users
            </p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              color="rgb(255, 191, 116)"
              size="140"
              height="180"
              width="180"
              style={{
                color: 'rgb(255, 191, 116)',
                background: darkMode ? '#24292B' : '#EAEBEA',
                padding: '1.7rem',
                fontSize: '3rem',
              }}
            >
              <path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path>
            </svg>
          </li>
          <li>
            <p
              className={
                darkMode
                  ? 'text-center text-xl mb-3 font-thin text-greyish'
                  : 'text-center text-xl mb-3 font-thin'
              }
            >
              Battle
            </p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              color="#727272"
              size="140"
              height="180"
              width="180"
              style={{
                color: 'rgb(114, 114, 114)',
                background: darkMode ? '#24292B' : '#EAEBEA',
                padding: '1.7rem',
                fontSize: '3rem',
              }}
            >
              <path d="M544 224l-128-16-48-16h-24L227.158 44h39.509C278.333 44 288 41.375 288 38s-9.667-6-21.333-6H152v12h16v164h-48l-66.667-80H18.667L8 138.667V208h8v16h48v2.666l-64 8v42.667l64 8V288H16v16H8v69.333L18.667 384h34.667L120 304h48v164h-16v12h114.667c11.667 0 21.333-2.625 21.333-6s-9.667-6-21.333-6h-39.509L344 320h24l48-16 128-16c96-21.333 96-26.583 96-32 0-5.417 0-10.667-96-32z"></path>
            </svg>
          </li>
          <li>
            <p
              className={
                darkMode
                  ? 'text-center text-xl mb-3 font-thin text-greyish'
                  : 'text-center text-xl mb-3 font-thin'
              }
            >
              See the winner
            </p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              color="rgb(255, 215, 0)"
              size="140"
              height="180"
              width="180"
              style={{
                color: 'rgb(255, 215, 0)',
                background: darkMode ? '#24292B' : '#EAEBEA',
                padding: '1.7rem',
                fontSize: '3rem',
              }}
            >
              <path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path>
            </svg>
          </li>
        </ul>
        <div>
          <h4
            className={
              darkMode
                ? 'text-center text-3xl mb-9 text-greyish'
                : 'text-center text-3xl mb-9'
            }
          >
            Players
          </h4>
          <div className="container flex justify-around items-center">
            {!this.state.playerOneInfo ? (
              <form
                className="basis-[46%]"
                onSubmit={(e) => this.handleSubmit(e, 'playerOne')}
              >
                <label
                  htmlFor="player1"
                  className={
                    darkMode
                      ? 'block mb-2 font-normal text-xl text-greyish'
                      : 'block mb-2 font-normal text-xl'
                  }
                >
                  Player One
                </label>
                <input
                  type="text"
                  id="player1"
                  name="playerOne"
                  value={this.state.playerOne}
                  onChange={(e) => this.handleChange(e, 'playerOne')}
                  className={
                    darkMode
                      ? `rounded px-2 pr-14 py-1 mr-3 placeholder:text-sm  placeholder:text-[#757474] text-greyish
                           bg-[#141618] `
                      : `border-t-[1.9px] border-r-[1.9px] rounded px-2 pr-14 py-1 mr-3 placeholder:text-sm  border-solid bg-[#FAFBFB] border-color-[#EEEEEF]`
                  }
                  placeholder="github username"
                />
                <button className={this.addStylesToSubmit('playerOne')}>
                  SUBMIT
                </button>
              </form>
            ) : (
              <>
                <div
                  className={
                    darkMode
                      ? 'basis-[46%]  py-6 px-3 bg-[#24292B]'
                      : 'basis-[46%]  py-6 px-3 bg-[#EAEBEA]'
                  }
                >
                  <div className="flex justify-between items-center">
                    <p
                      className={
                        darkMode
                          ? 'basis-full block mb-2 font-normal text-xl text-white'
                          : 'basis-full block mb-2 font-normal text-xl'
                      }
                    >
                      Player One
                    </p>
                    <span onClick={() => this.clearPlayerInfo('playerOne')}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        color="rgb(194, 57, 42)"
                        size="26"
                        height="26"
                        width="26"
                        style={{ color: 'rgb(194, 57, 42)' }}
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                      </svg>
                    </span>
                  </div>

                  {playerOneInfo.message == 'Not Found' ? (
                    <p className="text-red-800">Not Found!!!!!!</p>
                  ) : (
                    <div className="flex items-center mt-3">
                      <figure>
                        <img
                          className="w-20 h-20 rounded-full"
                          src={playerOneInfo.avatar_url}
                          alt={playerOneInfo.login}
                        />
                      </figure>
                      <h2 className={darkMode ? 'ml-3 text-red-600' : 'ml-3'}>
                        {playerOneInfo.login}
                      </h2>
                    </div>
                  )}
                </div>
              </>
            )}

            {!this.state.playerTwoInfo ? (
              <form
                className="basis-[46%]"
                onSubmit={(e) => this.handleSubmit(e, 'playerTwo')}
              >
                <label
                  htmlFor="player2"
                  className={
                    darkMode
                      ? 'block mb-2 font-normal text-xl text-greyish'
                      : 'block mb-2 font-normal text-xl'
                  }
                >
                  Player Two
                </label>
                <input
                  type="text"
                  id="player2"
                  name="playerTwo"
                  value={this.state.playerTwo}
                  onChange={(e) => this.handleChange(e, 'playerTwo')}
                  className={
                    darkMode
                      ? `rounded px-2 pr-14 py-1 mr-3 placeholder:text-sm  placeholder:text-[#757474] text-greyish
                           bg-[#141618] `
                      : `border-t-[1.9px] border-r-[1.9px] rounded px-2 pr-14 py-1 mr-3 placeholder:text-sm  border-solid bg-[#FAFBFB] border-color-[#EEEEEF]`
                  }
                  placeholder="github username"
                />
                <button className={this.addStylesToSubmit('playerTwo')}>
                  SUBMIT
                </button>
              </form>
            ) : (
              <>
                <div
                  className={
                    darkMode
                      ? 'basis-[46%]  py-6 px-3 bg-[#24292B]'
                      : 'basis-[46%]  py-6 px-3 bg-[#EAEBEA]'
                  }
                >
                  <div className="flex justify-between items-center">
                    <p
                      className={
                        darkMode
                          ? 'basis-full block mb-2 font-normal text-xl text-white'
                          : 'basis-full block mb-2 font-normal text-xl'
                      }
                    >
                      Player Two
                    </p>
                    <span onClick={() => this.clearPlayerInfo('playerTwo')}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        color="rgb(194, 57, 42)"
                        size="26"
                        height="26"
                        width="26"
                        style={{ color: 'rgb(194, 57, 42)' }}
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                      </svg>
                    </span>
                  </div>

                  {playerTwoInfo.message == 'Not Found' ? (
                    <p className="text-red-800">Not Found!!!!!!</p>
                  ) : (
                    <div className="flex items-center mt-3">
                      <figure>
                        <img
                          className="w-20 h-20 rounded-full"
                          src={playerTwoInfo.avatar_url}
                          alt={playerTwoInfo.login}
                        />
                      </figure>
                      <h2 className={darkMode ? 'ml-3 text-red-600' : 'ml-3'}>
                        {playerTwoInfo.login}
                      </h2>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
          <div className="text-center my-4">
            {this.state.playerOneInfo && this.state.playerTwoInfo ? (
              <button
                onClick={this.handleClickOnBattle}
                type="submit"
                className={
                  darkMode
                    ? 'text-[#C1C0C0] bg-[#141414] tracking-[0.3rem] px-16 py-[5px]'
                    : 'text-[#C1C0C0] tracking-[0.3rem] bg-black px-16 py-[5px]'
                }
              >
                BATTLE
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    );
  }
}
