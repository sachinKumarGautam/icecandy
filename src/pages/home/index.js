import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

import HomepageImageMobile from "../../assets/Home page PORTRAIT.jpg";
import HomepageImage from "../../assets/Home page.jpg";

import TilesImageA from "../../assets/TILE-IMAGES-A.png";
import TilesImageB from "../../assets/TILE-IMAGES-B.png";
import TilesImageC from "../../assets/TILE-IMAGES-C.png";
import TilesImageD from "../../assets/TILE-IMAGES-D.png";
import TilesImageE from "../../assets/TILE-IMAGES-E.png";
import TilesImageF from "../../assets/TILE-IMAGES-F.png";
import TilesImageG from "../../assets/TILE-IMAGES-G.png";
import TilesImageH from "../../assets/TILE-IMAGES-H.png";
import TilesImageI from "../../assets/TILE-IMAGES-I.png";
import TilesImageJ from "../../assets/TILE-IMAGES-J.png";
import TilesImageK from "../../assets/TILE-IMAGES-K.png";
import TilesImageL from "../../assets/TILE-IMAGES-L.png";
import TilesImageM from "../../assets/TILE-IMAGES-M.png";
import TilesImageN from "../../assets/TILE-IMAGES-N.png";
import TilesImageO from "../../assets/TILE-IMAGES-O.png";
import TilesImageP from "../../assets/TILE-IMAGES-P.png";

import TilesImageInsideA from "../../assets/TILE INSIDE MAIN IMAGE A.jpg";
import TilesImageInsideB from "../../assets/TILE INSIDE MAIN IMAGE B.jpg";
import TilesImageInsideC from "../../assets/TILE INSIDE MAIN IMAGE C.jpg";
import TilesImageInsideD from "../../assets/TILE INSIDE MAIN IMAGE D.jpg";
import TilesImageInsideE from "../../assets/TILE INSIDE MAIN IMAGE E.jpg";
import TilesImageInsideF from "../../assets/TILE INSIDE MAIN IMAGE F.jpg";
import TilesImageInsideG from "../../assets/TILE INSIDE MAIN IMAGE G.jpg";
import TilesImageInsideH from "../../assets/TILE INSIDE MAIN IMAGE H.jpg";
import TilesImageInsideI from "../../assets/TILE INSIDE MAIN IMAGE I.jpg";
import TilesImageInsideJ from "../../assets/TILE INSIDE MAIN IMAGE J.jpg";
import TilesImageInsideK from "../../assets/TILE INSIDE MAIN IMAGE K.jpg";
import TilesImageInsideL from "../../assets/TILE INSIDE MAIN IMAGE L.jpg";
import TilesImageInsideM from "../../assets/TILE INSIDE MAIN IMAGE M.jpg";
import TilesImageInsideN from "../../assets/TILE INSIDE MAIN IMAGE N.jpg";
import TilesImageInsideO from "../../assets/TILE INSIDE MAIN IMAGE O.jpg";
import TilesImageInsideP from "../../assets/TILE INSIDE MAIN IMAGE P.jpg";

import TilesImageInsideAMobile from "../../assets/Tile inside main  images A PORTRAIT.jpg";
import TilesImageInsideBMobile from "../../assets/Tile inside main  images B PORTRAIT.jpg";
import TilesImageInsideCMobile from "../../assets/Tile inside main  images C PORTRAIT.jpg";
import TilesImageInsideDMobile from "../../assets/Tile inside main  images D PORTRAIT.jpg";
import TilesImageInsideEMobile from "../../assets/Tile inside main  images E PORTRAIT.jpg";
import TilesImageInsideFMobile from "../../assets/Tile inside main  images F PORTRAIT.jpg";
import TilesImageInsideGMobile from "../../assets/Tile inside main  images G PORTRAIT.jpg";
import TilesImageInsideHMobile from "../../assets/Tile inside main  images H PORTRAIT.jpg";
import TilesImageInsideIMobile from "../../assets/Tile inside main  images I PORTRAIT.jpg";
import TilesImageInsideJMobile from "../../assets/Tile inside main  images J PORTRAIT.jpg";
import TilesImageInsideKMobile from "../../assets/Tile inside main  images K PORTRAIT.jpg";
import TilesImageInsideLMobile from "../../assets/Tile inside main  images L PORTRAIT.jpg";
import TilesImageInsideMMobile from "../../assets/Tile inside main  images M PORTRAIT.jpg";
import TilesImageInsideNMobile from "../../assets/Tile inside main  images N PORTRAIT.jpg";
import TilesImageInsideOMobile from "../../assets/Tile inside main  images O PORTRAIT.jpg";
import TilesImageInsidePMobile from "../../assets/Tile inside main  images P PORTRAIT.jpg";

const tilesObj = [
  {
    innerTileImage: TilesImageInsideA,
    innerTileMobile: TilesImageInsideAMobile,
    smallTile: TilesImageA,
    hoverText: "Kit vs Kat",
    hoverColor: "rgb(99,202,58)",
  },
  {
    innerTileImage: TilesImageInsideB,
    innerTileMobile: TilesImageInsideBMobile,
    smallTile: TilesImageB,
    hoverText: "Simple Samosa",
    hoverColor: "rgb(254,255,105)",
    hoverTextColor: "red",
  },
  {
    innerTileImage: TilesImageInsideC,
    innerTileMobile: TilesImageInsideCMobile,
    smallTile: TilesImageC,
    hoverText: "Kaun Banega <br/> Super star",
    hoverColor: "rgb(255,22,55)",
  },
  {
    innerTileImage: TilesImageInsideD,
    innerTileMobile: TilesImageInsideDMobile,
    smallTile: TilesImageD,
    hoverText: "Durga",
    hoverColor: "rgb(63,25,142)",
  },
  {
    innerTileImage: TilesImageInsideE,
    innerTileMobile: TilesImageInsideEMobile,
    smallTile: TilesImageE,
    hoverText: "BAJI",
    hoverColor: "rgb(0,0,0)",
    hoverTextColor: "red",
  },
  {
    innerTileImage: TilesImageInsideF,
    innerTileMobile: TilesImageInsideFMobile,
    smallTile: TilesImageF,
    hoverText: "Super <br/> Heroes",
    hoverColor: "rgb(17,53,203)",
  },
  {
    innerTileImage: TilesImageInsideG,
    innerTileMobile: TilesImageInsideGMobile,
    smallTile: TilesImageG,
    hoverText: "Sanju",
    hoverColor: "rgb(233,129,3)",
  },
  {
    innerTileImage: TilesImageInsideH,
    innerTileMobile: TilesImageInsideHMobile,
    smallTile: TilesImageH,
    hoverText: "Pi Lagu",
    hoverColor: "rgb(146,159,155)",
  },
  {
    innerTileImage: TilesImageInsideI,
    innerTileMobile: TilesImageInsideIMobile,
    smallTile: TilesImageI,
    hoverText: "Bhoot <br/> busters",
    hoverColor: "rgb(154,12,225)",
  },
  {
    innerTileImage: TilesImageInsideJ,
    innerTileMobile: TilesImageInsideJMobile,
    smallTile: TilesImageJ,
    hoverText: "Welcome",
    hoverColor: "rgb(252,41,73)",
  },
  {
    innerTileImage: TilesImageInsideK,
    innerTileMobile: TilesImageInsideKMobile,
    smallTile: TilesImageK,
    hoverText: "Cric X",
    hoverColor: "rgb(4,117,204)",
  },
  {
    innerTileImage: TilesImageInsideL,
    innerTileMobile: TilesImageInsideLMobile,
    smallTile: TilesImageL,
    hoverText: "Bhagam bhag",
    hoverColor: "rgb(87,37,180)",
  },
  {
    innerTileImage: TilesImageInsideM,
    innerTileMobile: TilesImageInsideMMobile,
    smallTile: TilesImageM,
    hoverText: "Gajar ka halwa",
    hoverColor: "rgb(202,58,164)",
  },
  {
    innerTileImage: TilesImageInsideN,
    innerTileMobile: TilesImageInsideNMobile,
    smallTile: TilesImageN,
    hoverText: "Hey Bobby!",
    hoverColor: "rgb(117,198,244)",
  },
  {
    innerTileImage: TilesImageInsideO,
    innerTileMobile: TilesImageInsideOMobile,
    smallTile: TilesImageO,
    hoverText: "Chote Jasoos",
    hoverColor: "rgb(254,3,2)",
  },
  {
    innerTileImage: TilesImageInsideP,
    innerTileMobile: TilesImageInsidePMobile,
    smallTile: TilesImageP,
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
            src={window.innerWidth > 600 ? HomepageImage : HomepageImageMobile}
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
                        src={`${item.smallTile}`}
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
                    src={`${selectedTile.innerTileImage}`}
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
