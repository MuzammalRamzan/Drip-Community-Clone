import React from "react";
import "./Main.css";
import I from "../../images/l.png";
import user from "../../images/user.png";
import curve from "../../images/curve.png";
import van from "../../images/van.png";
import transfer from "../../images/transfer.png";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="images">
      <div className="router-view">
        <div>
          <div className="container landing-page">
            <div className="row mb-4 mt-2">
              <div className="container col-xl-12">
                <div className="home-text text-center row">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <span class="luck-title notranslate">
                          <b> {t("DRIPNETWORK.1")}</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container col-12 col-xl-8 col-lg-8 col-md-8 text-white text1">
                {t("DRIPNetworkisthelatestprojectdevelopedby.1")}{" "}
                <a href="">{t("Forex_Shark.1")}</a>, <a href="">{t("BB.1")}</a>{" "}
                {t("andteam..1")}
              </div>
              <div className="container col-12 col-xl-8 col-lg-8 col-md-8 text-white text2">
                {t(
                  "TheofficialtokenoftheDRIPNetworkisDRIP(BEP-20)ontheBinanceSmartblockchain(BSC)thatcapturesvaluebybeingscarce,deflationary,censorshipresistant,andbybeingbuiltonarobust,trulydecentralizedblockchain..1"
                )}
              </div>
              <br />
              <div className="container col-12 col-xl-8 col-lg-8 col-md-8 text-white text3">
                {t(
                  "TherecommendedexchangefortradingDRIPistheFountaincontractwhichcanbefounddirectlyontheplatformswebsiteundertheswaptab,asitallowsustowaivetheinitial10%taxonbuysandprovidesthelowestpricesandhighestliquidity,resultinginlessslippageforlargertrades..1"
                )}
              </div>
              <div className="raw mainrow">
                <div className="col-xl-6 col-lg-6 col-md-6 mb-4 pt-4 ">
                  <p className="col-11 white mb-3 text-justify" />
                  <p className="col-11 white text-center ">
                    <a href="http://pearl.survey4earn.com/swap" className>
                      <button
                        type="button"
                        className="btn btn-outline-light btn-block m-3"
                      >
                        {t("TRADE.1")}
                      </button>
                    </a>
                    <a href="http://pearl.survey4earn.com/faucet" className>
                      <button
                        type="button"
                        className="btn btn-outline-light btn-block m-3"
                      >
                        {t("STAKE.1")}
                      </button>
                    </a>
                    <a
                      href="http://pearl.survey4earn.com/frontend/assets/invetment plans.pdf"
                      target="_blank"
                      className
                    >
                      <button
                        type="button "
                        className="btn btn-outline-light btn-block m-3"
                      >
                        {t("LIQUIDITYFARM.1")}
                      </button>
                    </a>
                  </p>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-4 mb-5 pt-4"
                  style={{ justifyContent: "center" }}
                >
                  <img src={I} />
                </div>
              </div>
            </div>

            <div className="row mb-4 mt-2">
              <div className="container col-12 text-center">
                <h1 data-v-2b20e1ea id="mainh1">
                  {t("STATS.1")}
                </h1>
                <p data-v-2b20e1ea id="mainpp">
                  {t(
                    "TheDRIPtokencapturestheentirevalueoftheDripNetworkandmakesitavailabletotheentireBNBCommunity.1"
                  )}
                  !
                </p>
              </div>
              <div className="container col-6 col-xl-3 col-lg-3 col-md-3 text-center">
                <div className="price-top-part">
                  <img src={user} alt="" />
                  <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-4 text-white">
                    {t("Players.1")}
                  </h5>
                  <p className="text-large mb-2 text-white">
                    <span className="notranslate">0</span>
                  </p>
                  <p className="text-small"> {t("count.1")}</p>
                </div>
              </div>
              <div className="container col-6 col-xl-3 col-lg-3 col-md-3 text-center">
                <div className="price-top-part">
                  <img src={curve} alt="" width="60px" />
                  <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-4 text-white">
                    {t("Maxdailyreturn.1")}
                  </h5>
                  <p className="text-large mb-2 text-white">
                    <span className="notranslate" />
                  </p>
                  <p className="text-small" />
                </div>
              </div>
              <div className="container col-6 col-xl-3 col-lg-3 col-md-3 text-center">
                <div className="price-top-part">
                  <img src={van} alt="" width="60px" />
                  <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-4 text-white">
                    {t("Totalsupply.1")}{" "}
                  </h5>
                  <p className="text-large mb-2 text-white">
                    <span className="notranslate">0</span>
                  </p>
                  <p className="text-small">{t("DRIP.1")} ≈ N/A</p>
                </div>
              </div>
              <div className="container col-6 col-xl-3 col-lg-3 col-md-3 text-center">
                <div className="price-top-part">
                  <img src={transfer} alt="" width="60px" />
                  <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-4 text-white">
                    {t("Transactions.1")}{" "}
                  </h5>
                  <p className="text-large mb-2 text-white">
                    <span className="notranslate">0</span>
                  </p>
                  <p className="text-small ">{t("count.1")}</p>
                </div>
              </div>
            </div>
            <div className="conatiner">
              <div className="row pt-4 mt-4 ">
                <div className="col-12 mb-4 ">
                  <div className="card bg-dark text-white">
                    <div className="tabs" id="__BVID__241">
                      <div className="card-header">
                        <ul
                          role="tablist"
                          className="nav nav-tabs card-header-tabs"
                          id="__BVID__241__BV_tab_controls_"
                        >
                          <li role="presentation" className="nav-item">
                            <a
                              role="tab"
                              aria-selected="true"
                              aria-setsize={1}
                              aria-posinset={1}
                              href="#"
                              target="_self"
                              className="nav-link active"
                              id="__BVID__242___BV_tab_button__"
                              aria-controls="__BVID__242"
                            >
                              {t("Activity.1")}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="tab-content"
                        id="__BVID__241__BV_tab_container_"
                      >
                        <div
                          role="tabpanel"
                          aria-hidden="false"
                          className="tab-pane active card-body"
                          id="__BVID__242"
                          aria-labelledby="__BVID__242___BV_tab_button__"
                        >
                          <p className="card-text"></p>
                          <div className="row">
                            <div className="col-12 list">
                              <div className="card d-flex flex-row mb-3">
                                <div className="d-flex flex-grow-1 min-width-zero">
                                  <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                                    <p className="w-20 w-xs-100">
                                      {t("From.1")}
                                    </p>
                                    <p className="w-20 w-xs-100">{t("To.1")}</p>
                                    <span className="mb-1 w-15 w-xs-100">
                                      {t("Amount.1")}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="header">
            <div>
              <svg
                data-v-ab5e3c86
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
                className="waves"
              >
                <defs data-v-ab5e3c86>
                  <path
                    data-v-ab5e3c86
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  />
                </defs>
                <g data-v-ab5e3c86 className="parallax">
                  <use
                    data-v-ab5e3c86
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={0}
                    fill="rgba(255,255,255,0.7"
                  />
                  <use
                    data-v-ab5e3c86
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={3}
                    fill="rgba(255,255,255,0.5)"
                  />
                  <use
                    data-v-ab5e3c86
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={5}
                    fill="rgba(255,255,255,0.3)"
                  />
                  <use
                    data-v-ab5e3c86
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={7}
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
