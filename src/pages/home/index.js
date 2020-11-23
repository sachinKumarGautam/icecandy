import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const tilesObj = [
  {
    innerTileImage: "",
    bgTile: "",
    hoverText: "Sanju",
    hoverColor: "orange",
  },
  {
    innerTileImage: "",
    bgTile: "",
    hoverText: "Sanju",
    hoverColor: "red",
  },
  {
    innerTileImage: "",
    bgTile: "",
    hoverText: "Sanju",
    hoverColor: "blue",
  },
  {
    innerTileImage: "",
    bgTile: "",
    hoverText: "Sanju",
    hoverColor: "teal",
  },
  {
    innerTileImage: "",
    bgTile: "",
    hoverText: "Sanju",
    hoverColor: "orange",
  },
  {
    innerTileImage: "",
    bgTile: "",
    hoverText: "Sanju",
    hoverColor: "red",
  },
  {
    innerTileImage: "",
    bgTile: "",
    hoverText: "Sanju",
    hoverColor: "blue",
  },
  {
    innerTileImage: "",
    bgTile: "",
    hoverText: "Sanju",
    hoverColor: "teal",
  },
  {
    innerTileImage: "",
    bgTile: "",
    hoverText: "Sanju",
    hoverColor: "orange",
  },
  {
    innerTileImage: "",
    bgTile: "",
    hoverText: "Sanju",
    hoverColor: "red",
  },
  {
    innerTileImage: "",
    bgTile: "",
    hoverText: "Sanju",
    hoverColor: "blue",
  },
  {
    innerTileImage: "",
    bgTile: "",
    hoverText: "Sanju",
    hoverColor: "teal",
  },
];

class Home extends React.Component {
  state = {
    showTile: false,
    selectedTile: {},
    openPopup: false,
  };

  toggleTiles = () => {
    this.setState(
      (prevState) => ({ showTile: true || !prevState.showTile }),
      () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: "smooth",
          });
        }, 100);
      }
    );
  };

  openTile = (item) => {
    this.setState({ selectedTile: item, openPopup: true });
  };

  closePopup = () => {
    this.setState({ openPopup: false });
  };

  render() {
    return (
      <div className="container">
        <div>
          <img
            className="home"
            src="/assets/IC-WEBSITE_1920X1080.jpg"
            alt="Homepage"
          />
          <div className="ctaContainer">
            <div className="cta" onClick={this.toggleTiles}>
              WORK
            </div>
            <Link className="cta" to={"/about"}>
              ABOUT
            </Link>
          </div>
        </div>
        {this.state.showTile ? (
          <React.Fragment>
            <div className="tiles-container">
              {/* <div className="tiles-header">
              <a href="/" className="backLink">
                GO BACK
              </a>
              <a href="/about" className="aboutLink">
                ABOUT
              </a>
            </div> */}
              <div className="tiles-grid-wrapper">
                {tilesObj.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="tile"
                      onClick={() => this.openTile(item)}
                    >
                      <img
                        src="/assets/TILES01.png"
                        alt="tile"
                        className="tile-img"
                      />
                      <div
                        className="tile-hover-text"
                        style={{ backgroundColor: item.hoverColor }}
                      >
                        {item.hoverText}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {this.state.openPopup ? (
              <div className="popup">
                <div className="overlay">
                  <div onClick={() => this.closePopup()} className="close-btn">
                    X
                  </div>
                  <img
                    className="tile-bg"
                    src="/assets/ICECANDY-WEBSITE_TILE_MAIN_PAGE.jpg"
                    alt="tile-bg"
                  />
                </div>
              </div>
            ) : null}
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

export default Home;
