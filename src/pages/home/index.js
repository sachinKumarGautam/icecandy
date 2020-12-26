import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const tilesObj = [
  {
    innerTileImage: "TILE INSIDE MAIN IMAGE A.jpg",
    smallTile: "TILE-IMAGES-A.png",
    hoverText: "Kit vs Kat",
    hoverColor: "rgb(99,202,58)",
    innerTileMobile: "PORTRAIT.jpg",
  },
  {
    innerTileImage: "TILE INSIDE MAIN IMAGE B.jpg",
    smallTile: "TILE-IMAGES-B.png",
    hoverText: "Simple Samosa",
    hoverColor: "rgb(254,255,105)",
    hoverTextColor: "red",
  },
  {
    innerTileImage: "TILE INSIDE MAIN IMAGE C.jpg",
    smallTile: "TILE-IMAGES-C.png",
    hoverText: "Kaun Banega <br/> Super star",
    hoverColor: "rgb(255,22,55)",
  },
  {
    innerTileImage: "TILE INSIDE MAIN IMAGE D.jpg",
    smallTile: "TILE-IMAGES-D.png",
    hoverText: "Durga",
    hoverColor: "rgb(63,25,142)",
  },
  {
    innerTileImage: "TILE INSIDE MAIN IMAGE E.jpg",
    smallTile: "TILE-IMAGES-E.png",
    hoverText: "BAJI",
    hoverColor: "rgb(0,0,0)",
    hoverTextColor: "red",
  },
  {
    innerTileImage: "TILE INSIDE MAIN IMAGE F.jpg",
    smallTile: "TILE-IMAGES-F.png",
    hoverText: "Super <br/> Heroes",
    hoverColor: "rgb(17,53,203)",
  },
  {
    innerTileImage: "TILE INSIDE MAIN IMAGE G.jpg",
    smallTile: "TILE-IMAGES-G.png",
    hoverText: "Sanju",
    hoverColor: "rgb(233,129,3)",
  },
  {
    innerTileImage: "TILE INSIDE MAIN IMAGE H.jpg",
    smallTile: "TILE-IMAGES-H.png",
    hoverText: "Pi Lagu",
    hoverColor: "rgb(146,159,155)",
  },
  {
    innerTileImage: "TILE INSIDE MAIN IMAGE I.jpg",
    smallTile: "TILE-IMAGES-I.png",
    hoverText: "Bhoot <br/> busters",
    hoverColor: "rgb(154,12,225)",
  },
  {
    innerTileImage: "TILE INSIDE MAIN IMAGE J.jpg",
    smallTile: "TILE-IMAGES-J.png",
    hoverText: "Welcome",
    hoverColor: "rgb(252,41,73)",
  },
  {
    innerTileImage: "TILE INSIDE MAIN IMAGE K.jpg",
    smallTile: "TILE-IMAGES-K.png",
    hoverText: "Cric X",
    hoverColor: "rgb(4,117,204)",
  },
  {
    innerTileImage: "TILE INSIDE MAIN IMAGE L.jpg",
    smallTile: "TILE-IMAGES-L.png",
    hoverText: "Bhagam bhag",
    hoverColor: "rgb(87,37,180)",
  },
  {
    innerTileImage: "TILE INSIDE MAIN IMAGE M.jpg",
    smallTile: "TILE-IMAGES-M.png",
    hoverText: "Gajar ka halwa",
    hoverColor: "rgb(202,58,164)",
  },
  {
    innerTileImage: "TILE INSIDE MAIN IMAGE N.jpg",
    smallTile: "TILE-IMAGES-N.png",
    hoverText: "Hey Bobby!",
    hoverColor: "rgb(117,198,244)",
  },
  {
    innerTileImage: "TILE INSIDE MAIN IMAGE O.jpg",
    smallTile: "TILE-IMAGES-O.png",
    hoverText: "Chote Jasoos",
    hoverColor: "rgb(254,3,2)",
  },
  {
    innerTileImage: "TILE INSIDE MAIN IMAGE P.jpg",
    smallTile: "TILE-IMAGES-P.png",
    hoverText: "Kaun Banega <br/> Mala Maal",
    hoverColor: "rgb(197,238,103)",
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
    const { selectedTile } = this.state;
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
                        src={`/assets/${item.smallTile}`}
                        alt="tile"
                        className="tile-img"
                      />
                      <div
                        className="tile-hover-text"
                        style={{ backgroundColor: item.hoverColor }}
                      >
                        <div
                          dangerouslySetInnerHTML={{ __html: item.hoverText }}
                          style={
                            item.hoverTextColor
                              ? { color: item.hoverTextColor }
                              : {}
                          }
                        ></div>
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
                    src={`assets/${
                      window.innerWidth > 600
                        ? selectedTile.innerTileImage
                        : selectedTile.innerTileMobile
                    }`}
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
