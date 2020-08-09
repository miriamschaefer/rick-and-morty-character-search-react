import React from 'react';
import Portal from '../../images/portal.png';
import Header from './Header';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="landing">
          <Link to="/mainpage">
            <div className="landing__imgs">
              <img
                className="landing__imgs__portal"
                src={Portal}
                alt="Rick and Morty"
              />

              <img
                className="landing__imgs__morty"
                src="https://media.giphy.com/media/dxP1UmiavDWDTR6yYd/giphy.gif"
                alt="Rick and Morty"
              />
            </div>
            <h1 className="landing__title">Come in! Burgertime!</h1>
          </Link>
        </main>
      </>
    );
  }
}

export default LandingPage;
