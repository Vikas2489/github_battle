import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { darkMode } = this.props;
    return (
      <div
        className={
          this.props.darkMode
            ? 'bg-[#24292B] my-[32px] basis-[29%] flex flex-col items-center p-6'
            : 'bg-[#EAEBEA] my-[32px] basis-[29%] flex flex-col items-center p-6'
        }
      >
        <h3
          className={
            darkMode
              ? 'text-center font-normal text-3xl text-greyish'
              : 'text-center font-normal text-3xl textDarkColor'
          }
        >
          #{this.props.index + 1}
        </h3>
        <figure className="text-center w-40 my-4">
          <img
            src={this.props.image}
            className="w-full object-contain"
            alt={this.props.name}
          />
        </figure>
        <h2 className="active-red my-3 text-2xl font-semibold text-center">
          {this.props.name}
        </h2>
        <ul className="self-start ml-2">
          <li className="flex items-center cursor-pointer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              color="rgb(255, 191, 116)"
              size="22"
              height="22"
              width="22"
              style={{ color: 'rgb(255, 191, 116)' }}
            >
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
            </svg>
            <a
              href={`https://github.com/${this.props.name}`}
              className={
                darkMode
                  ? 'text-l font-semibold ml-2 my-1 text-greyish'
                  : 'text-l font-semibold ml-2 my-1'
              }
            >
              {this.props.name}
            </a>
          </li>
          <li className="flex items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              color="rgb(255, 215, 0)"
              size="22"
              height="22"
              width="22"
              style={{ color: 'rgb(255, 215, 0)' }}
            >
              <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
            </svg>
            <span
              className={
                darkMode
                  ? 'text-l font-semibold ml-2 my-1 text-greyish'
                  : 'text-l font-semibold ml-2 my-1'
              }
            >
              {this.props.stars} stars
            </span>
          </li>
          <li className="flex items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 384 512"
              color="rgb(129, 195, 245)"
              size="22"
              height="22"
              width="22"
              style={{ color: 'rgb(129, 195, 245)' }}
            >
              <path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"></path>
            </svg>
            <span
              className={
                darkMode
                  ? 'text-l font-semibold ml-2 my-1 text-greyish'
                  : 'text-l font-semibold ml-2 my-1'
              }
            >
              {this.props.forks} forks
            </span>
          </li>
          <li className="flex items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              color="rgb(241, 138, 147)"
              size="22"
              height="22"
              width="22"
              style={{ color: 'rgb(241, 138, 147)' }}
            >
              <path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
            </svg>
            <span
              className={
                darkMode
                  ? 'text-l font-semibold ml-2 my-1 text-greyish'
                  : 'text-l font-semibold ml-2 my-1'
              }
            >
              {this.props.openIssues} open issues
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
