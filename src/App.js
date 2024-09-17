import logo from './logo.svg';
import './App.css';
import navs from './assets/navs.jpg';
import headerdesign from './assets/headerdesign.png'
import inds from './assets/inds.jpg';
import search from './assets/search.jpg';
import searchtext from './assets/searchtext.jpg';
import Vector from './assets/Vector.jpg';
import sky from './assets/sky.jpg';
import pseudo from './assets/pseudo.jpg';
import city from './assets/city.jpg';
import aiphone from './assets/aiphone.jpg';
import shopping from './assets/shopping.jpg';
import rahulgandhis from './assets/rahulgandhis.jpg';
import awardprice from './assets/awardprice.jpg';
import downarrow1 from './assets/downarrow1.jpg';
import marrage from './assets/marrage.jpg';
import flowers from './assets/flowers.jpg';
import smallline from './assets/smallline.jpg';
import manstanding from './assets/manstanding.jpg';
import malls from './assets/malls.jpg';

function App() {
  let t = "navs.jpg"
  return (
    <div className="App">

        <header>
          <section>
            <div className='boxes'>
            <img src={headerdesign} alt="" />
            </div>
          </section>
          
            <div className = "nextheader">
              <div className = "searchtexts">
              <img className = "search" src={search} alt="" />
              <img className = "textsearch" src={searchtext} alt="" />
              </div>
            <img src={inds} alt="" />
            <div className = "mybuttonsonheader">
            <button className = "btnsubscribe">subscribe</button>
            <button className = "btnsign">sign in</button>
            </div>
            </div>
            <hr className = "hr1"/>
            <div className = "header2">
              <div>
              <img src={Vector} alt="" />
              </div>
            <div className = "h4s">
              <h4 className = "h4forred">Home</h4>
              <h4>Categories</h4>
              <h4>IR Prime</h4>
              <h4>Events</h4>
              <h4>Books Store</h4>
              <h4>News Letter</h4>
              <h4>Videos</h4>
            </div>
            <div>
              <section className = "skyandtext">
              <img src={sky} alt="" />
              <h3>Friday,30 June 20</h3>
              </section>
            </div>
            </div>
            <section className = "textandpseudo">
              
              <p>Fashion & LifeStyle</p>
              <img src={pseudo} alt="" />
              
              <div>
              <p>Fashion & LifeStyle</p>
              <img src={pseudo} alt="" />
              </div>
              <p>Fashion & LifeStyle</p>
              <div>
              <p>Fashion & LifeStyle</p>
              <img src={pseudo} alt="" />
              </div>
              <div>
              <p>Fashion & LifeStyle</p>
              <img src={pseudo} alt="" />
              </div>
              <div>
              <p>Fashion & LifeStyle</p>
              <img src={pseudo} alt="" />
              </div>
              <div>
              <p>Fashion & LifeStyle</p>
              <img src={pseudo} alt="" />
              </div>
              <div>
              <p>Fashion & LifeStyle</p>
              <img src={pseudo} alt="" />
              </div>
            </section>
          
        </header>
        <main>
          <section className = "bodysection1">
            <div className = "divfor3posters">
              <div className = "myimgdiv1">
                <div>
                <img className = "cities" src={city} alt="" />
                </div>
                <div className = "divshs">
                <h4>HotSpots</h4>
                <div className = "forp">
                <p>Luxury HotSpot : 5 most expensives high streets in the...</p>
                {/* <p>high streets in the...</p> */}
                </div>
                </div>
              </div>
              <div className = "myimgdiv1">
                <div>
                <img className = "cities" src={aiphone} alt="" />
                </div>
                <div className = "divshs">
                <h4>AI</h4>
                <div className = "forp">
                <p>Luxury HotSpot : 5 most expensives high streets in the...</p>
                </div>
                </div>
              </div>
              <div className = "myimgdiv1">
                <div>
                <img className = "cities" src={shopping} alt="" />
                </div>
                <div className = "divshs">
                <h4>Shopping</h4>
                <div className = "forp">
                <p>Luxury HotSpot : 5 most expensives high streets in the...</p>
                </div>
                </div>
              </div>
            </div>
          </section>
          <div className = "bodypartflex">
          <section className = "bodysection2">
            <div>
              <div>
              <img className = "rg" src={rahulgandhis} alt="" />
              </div>
            <section className = "rightsect1"> 
              <img className = "rightsect1img" src={awardprice} alt="" />
              <div className = "forhss1">
                <h5>SELECT CITYWALK</h5>
                <h4>WoW! Momo foods enters here WoW!</h4>
                <p>#city walk #reel story prodcast</p>
              </div>
              <img src={downarrow1} alt="" />
            </section>
            <br />
            <hr className = "hr1div"/>
            <section className = "rightsect1"> 
              <img className = "rightsect1img" src={marrage} alt="" />
              <div className = "forhss1">
                <h5>FOODS & BEVERAGES</h5>
                <h4>WoW! Momo foods enters here WoW!</h4>
                <p>#city walk #reel story prodcast</p>
              </div>
              <img src={downarrow1} alt="" />
            </section>
            <br />
            <hr className = "hr1div"/>
            <section className = "rightsect1"> 
              <img className = "rightsect1img" src={flowers} alt="" />
              <div className = "forhss1">
                <h5>SELECT CITYWALK</h5>
                <h4>WoW! Momo foods enters here WoW!</h4>
                <p>#city walk #reel story prodcast</p>
              </div>
              <img src={downarrow1} alt="" />
            </section>
            <br />
            <hr className = "hr1div"/>
            </div>
          </section>
          <section className = "section2forbody">
            <div> 
              <h3 className = "h3s">
              Latest News
              </h3>
              <img className="redline" src={smallline} alt="" />
              <br />
              <div>
              <img className = "manstandingimg" src={manstanding} alt="" />
            </div>
            <div>
              <img className = "manstandingimg" src={malls} alt="" />
              <h3>How is AI is enhancing stores in tech</h3>
            </div>
            <hr />
            <p>crome opens 68 outlets in 6,crome retails more</p>
            <p className = "p-crome">normally these companies create alot of hype</p>
            <hr />
            <p>crome opens 68 outlets in 6,crome retails more</p>
            <p className = "p-crome">normally these companies create alot of hype</p>
            </div>
          </section>
          </div>
        </main>
        {/* <img src="pic_trulli.jpg" alt="imgs" /> */}
        {/* <h1>hello</h1> */}
        {/* <img src={city} alt="" /> */}
    </div>
  );
}

export default App;
