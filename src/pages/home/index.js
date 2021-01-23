import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { IKImage, IKContext } from "imagekitio-react";

// import "Tile_images_A.png"A from "../../assets/Tile images A.png";
// import "Tile_images_A.png"B from "../../assets/Tile images B.png";
// import "Tile_images_A.png"C from "../../assets/Tile images C.png";
// import "Tile_images_A.png"D from "../../assets/Tile images D.png";
// import "Tile_images_A.png"E from "../../assets/Tile images E.png";
// import "Tile_images_A.png"F from "../../assets/Tile images F.png";
// import "Tile_images_A.png"G from "../../assets/Tile images G.png";
// import "Tile_images_A.png"H from "../../assets/Tile images H.png";
// import "Tile_images_A.png"I from "../../assets/Tile images I.png";
// import "Tile_images_A.png"J from "../../assets/Tile images J.png";
// import "Tile_images_A.png"K from "../../assets/Tile images K.png";
// import "Tile_images_A.png"L from "../../assets/Tile images L.png";
// import "Tile_images_A.png"M from "../../assets/Tile images M.png";
// import "Tile_images_A.png"N from "../../assets/Tile images N.png";
// import "Tile_images_A.png"O from "../../assets/Tile images O.png";
// import "Tile_images_A.png"P from "../../assets/Tile images P.png";

// import "TILE_INSIDE_MAIN_IMAGE_A from "../../assets/TILE INSIDE MAIN IMAGE A.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_B from "../../assets/TILE INSIDE MAIN IMAGE B.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_C from "../../assets/TILE INSIDE MAIN IMAGE C.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_D from "../../assets/TILE INSIDE MAIN IMAGE D.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_E from "../../assets/TILE INSIDE MAIN IMAGE E.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_F from "../../assets/TILE INSIDE MAIN IMAGE F.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_G from "../../assets/TILE INSIDE MAIN IMAGE G.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_H from "../../assets/TILE INSIDE MAIN IMAGE H.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_I from "../../assets/TILE INSIDE MAIN IMAGE I.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_J from "../../assets/TILE INSIDE MAIN IMAGE J.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_K from "../../assets/TILE INSIDE MAIN IMAGE K.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_L from "../../assets/TILE INSIDE MAIN IMAGE L.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_M from "../../assets/TILE INSIDE MAIN IMAGE M.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_N from "../../assets/TILE INSIDE MAIN IMAGE N.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_O from "../../assets/TILE INSIDE MAIN IMAGE O.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_P from "../../assets/TILE INSIDE MAIN IMAGE P.jpg";

// import "TILE_INSIDE_MAIN_IMAGE_AMobile from "../../assets/Tile inside main  images A PORTRAIT.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_BMobile from "../../assets/Tile inside main  images B PORTRAIT.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_CMobile from "../../assets/Tile inside main  images C PORTRAIT.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_DMobile from "../../assets/Tile inside main  images D PORTRAIT.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_EMobile from "../../assets/Tile inside main  images E PORTRAIT.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_FMobile from "../../assets/Tile inside main  images F PORTRAIT.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_GMobile from "../../assets/Tile inside main  images G PORTRAIT.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_HMobile from "../../assets/Tile inside main  images H PORTRAIT.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_IMobile from "../../assets/Tile inside main  images I PORTRAIT.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_JMobile from "../../assets/Tile inside main  images J PORTRAIT.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_KMobile from "../../assets/Tile inside main  images K PORTRAIT.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_LMobile from "../../assets/Tile inside main  images L PORTRAIT.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_MMobile from "../../assets/Tile inside main  images M PORTRAIT.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_NMobile from "../../assets/Tile inside main  images N PORTRAIT.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_OMobile from "../../assets/Tile inside main  images O PORTRAIT.jpg";
// import "TILE_INSIDE_MAIN_IMAGE_PMobile from "../../assets/Tile inside main  images P PORTRAIT.jpg";
//ik.imagekit.io/nr8jbipyb/Tile_inside_main_images_A_PORTRAIT.jpg?ik-sdk-version=react-1.0.9
//ik.imagekit.io/nr8jbipyb/TILE_INSIDE_MAIN_IMAGE_A.jpg
//ik.imagekit.io/nr8jbipyb/Tile_inside_main__images_A_PORTRAIT.jpg
const tilesObj = [
  {
    innerTileImage: "TILE_INSIDE_MAIN_IMAGE_A.jpg",
    innerTileMobile: "Tile_inside_main__images_A_PORTRAIT.jpg",
    smallTile: "Tile_images_A.png",
    hoverText: "Kit vs Kat",
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
        <div style={{ height: "100vh" }}>
          <IKContext urlEndpoint="https://ik.imagekit.io/nr8jbipyb/">
            <IKImage
              path={
                window.innerWidth > 600
                  ? "/Home_page.jpg"
                  : "/Home_page_PORTRAIT.jpg"
              }
              lqip={{ active: true }}
              style={{ width: "100%" }}
            />
          </IKContext>
          {/* <img
            className="home"
            src={window.innerWidth > 600 ? HomepageImage : HomepageImageMobile}
            alt="Homepage"
          /> */}
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
                      {/* <img
                        src={`${item.smallTile}`}
                        alt="tile"
                        width="414"
                        height="414"
                        className="tile-img"
                        loading="lazy"
                      /> */}
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
