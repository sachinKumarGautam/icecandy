import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { IKImage, IKContext } from "imagekitio-react";

const tilesObj = [
  {
    innerTileImage: "Tile_inside_main__images_A.jpg",
    innerTileMobile: "Tile_inside_main__images_A_PORTRAIT.jpg",
    smallTile: "Tile_images_A.png",
    hoverText: "Cat vs Keet",
    hoverColor: "rgb(99,202,58)",
  },
  {
    innerTileImage: "TILE_INSIDE_MAIN_IMAGE_B.jpg",
    innerTileMobile: "Tile_inside_main__images_B_PORTRAIT.jpg",
    smallTile: "Tile_images_B.png",
    hoverText: "Simple Samosa",
    hoverColor: "rgb(254,255,105)",
    hoverTextColor: "red",
  },
  {
    innerTileImage: "TILE_INSIDE_MAIN_IMAGE_C.jpg",
    innerTileMobile: "Tile_inside_main__images_C_PORTRAIT.jpg",
    smallTile: "Tile_images_C.png",
    hoverText: "Kaun Banega <br/> Super star",
    hoverColor: "rgb(255,22,55)",
  },
  {
    innerTileImage: "TILE_INSIDE_MAIN_IMAGE_D.jpg",
    innerTileMobile: "Tile_inside_main__images_D_PORTRAIT.jpg",
    smallTile: "Tile_images_D.png",
    hoverText: "Durga",
    hoverColor: "rgb(63,25,142)",
  },
  {
    innerTileImage: "TILE_INSIDE_MAIN_IMAGE_E.jpg",
    innerTileMobile: "Tile_inside_main__images_E_PORTRAIT.jpg",
    smallTile: "Tile_images_E.png",
    hoverText: "BAJI",
    hoverColor: "rgb(0,0,0)",
    hoverTextColor: "red",
  },
  {
    innerTileImage: "TILE_INSIDE_MAIN_IMAGE_F.jpg",
    innerTileMobile: "Tile_inside_main__images_F_PORTRAIT.jpg",
    smallTile: "Tile_images_F.png",
    hoverText: "Super <br/> Heroes",
    hoverColor: "rgb(17,53,203)",
  },
  {
    innerTileImage: "TILE_INSIDE_MAIN_IMAGE_G.jpg",
    innerTileMobile: "Tile_inside_main__images_G_PORTRAIT.jpg",
    smallTile: "Tile_images_G.png",
    hoverText: "Sanju",
    hoverColor: "rgb(233,129,3)",
  },
  {
    innerTileImage: "TILE_INSIDE_MAIN_IMAGE_H.jpg",
    innerTileMobile: "Tile_inside_main__images_H_PORTRAIT.jpg",
    smallTile: "Tile_images_H.png",
    hoverText: "Pi Lagu",
    hoverColor: "rgb(146,159,155)",
  },
  {
    innerTileImage: "TILE_INSIDE_MAIN_IMAGE_I.jpg",
    innerTileMobile: "Tile_inside_main__images_I_PORTRAIT.jpg",
    smallTile: "Tile_images_I.png",
    hoverText: "Bhoot <br/> busters",
    hoverColor: "rgb(154,12,225)",
  },
  {
    innerTileImage: "TILE_INSIDE_MAIN_IMAGE_J.jpg",
    innerTileMobile: "Tile_inside_main__images_J_PORTRAIT.jpg",
    smallTile: "Tile_images_J.png",
    hoverText: "Welcome",
    hoverColor: "rgb(252,41,73)",
  },
  {
    innerTileImage: "TILE_INSIDE_MAIN_IMAGE_K.jpg",
    innerTileMobile: "Tile_inside_main__images_K_PORTRAIT.jpg",
    smallTile: "Tile_images_K.png",
    hoverText: "Cric X",
    hoverColor: "rgb(4,117,204)",
  },
  {
    innerTileImage: "TILE_INSIDE_MAIN_IMAGE_L.jpg",
    innerTileMobile: "Tile_inside_main__images_L_PORTRAIT.jpg",
    smallTile: "Tile_images_L.png",
    hoverText: "Bhagam bhag",
    hoverColor: "rgb(87,37,180)",
  },
  {
    innerTileImage: "TILE_INSIDE_MAIN_IMAGE_M.jpg",
    innerTileMobile: "Tile_inside_main__images_M_PORTRAIT.jpg",
    smallTile: "Tile_images_M.png",
    hoverText: "Gajar ka halwa",
    hoverColor: "rgb(202,58,164)",
  },
  {
    innerTileImage: "TILE_INSIDE_MAIN_IMAGE_N.jpg",
    innerTileMobile: "Tile_inside_main__images_N_PORTRAIT.jpg",
    smallTile: "Tile_images_N.png",
    hoverText: "Hey Bobby!",
    hoverColor: "rgb(117,198,244)",
  },
  {
    innerTileImage: "TILE_INSIDE_MAIN_IMAGE_O.jpg",
    innerTileMobile: "Tile_inside_main__images_O_PORTRAIT.jpg",
    smallTile: "Tile_images_O.png",
    hoverText: "Chote Jasoos",
    hoverColor: "rgb(254,3,2)",
  },
  {
    innerTileImage: "TILE_INSIDE_MAIN_IMAGE_P.jpg",
    innerTileMobile: "Tile_inside_main__images_P_PORTRAIT.jpg",
    smallTile: "Tile_images_P.png",
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

  toggleTiles = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let homescreen = document.getElementById("homescreen");

    this.setState(
      (prevState) => ({ showTile: true || !prevState.showTile }),
      () => {
        setTimeout(() => {
          window.scrollTo({
            top: homescreen.offsetHeight,
            left: 0,
            behavior: "smooth",
          });
        }, 100);
      }
    );
  };

  openTile = (item) => {
    this.setState(
      () => ({ selectedTile: item, openPopup: true }),
      () => {
        if (this.state.openPopup) {
          document.body.style.overflow = "hidden";
        } else {
          // document.body.style.overflow = "auto";
          // document.body.style.top = "auto";
          // document.body.style.left = "auto";
          // document.body.style.right = "auto";
          // document.body.style.position = "static";
        }
      }
    );
  };

  closePopup = () => {
    this.setState({ openPopup: false });
    document.body.style.overflow = "auto";
  };

  render() {
    const { selectedTile } = this.state;
    return (
      <div className="container">
        <div
          id="homescreen"
          style={{ height: "100vh", textAlign: "center", width: "100vw" }}
        >
          <IKContext urlEndpoint="https://ik.imagekit.io/nr8jbipyb/">
            <IKImage
              path={
                window.innerWidth > 600
                  ? "/Home_page.jpg"
                  : "/Home_page_PORTRAIT.jpg"
              }
              lqip={{ active: true }}
              style={{ width: "inherit", height: "100%" }}
            />
          </IKContext>
          <div className="ctaContainer">
            <div
              style={{ cursor: "pointer" }}
              onClick={(e) => this.toggleTiles(e)}
            >
              WORK
            </div>
            <Link className="ctaLink" to={"/about"}>
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
                      <IKContext urlEndpoint="https://ik.imagekit.io/nr8jbipyb/">
                        <IKImage
                          className="tile-img"
                          path={`${item.smallTile}`}
                          lqip={{ active: true }}
                          loading="lazy"
                        />
                      </IKContext>
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
                <div
                  className="overlay"
                  style={{ backgroundColor: selectedTile.hoverColor }}
                >
                  <div onClick={() => this.closePopup()} className="close-btn">
                    X
                  </div>
                  <IKContext urlEndpoint="https://ik.imagekit.io/nr8jbipyb/">
                    <IKImage
                      className="tile-bg"
                      path={
                        window.innerWidth > 600
                          ? `${selectedTile.innerTileImage}`
                          : `${selectedTile.innerTileMobile}`
                      }
                      lqip={{ active: true }}
                      loading="lazy"
                    />
                  </IKContext>
                  {/* <img
                    className="tile-bg"
                    loading="lazy"
                    src={
                      window.innerWidth > 600
                        ? selectedTile.innerTileImage
                        : selectedTile.innerTileMobile
                    }
                    alt="tile-bg"
                  /> */}
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
