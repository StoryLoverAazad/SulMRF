import "./home.css"
import React from "react";
//import { Button } from "react-bootstrap";
//import { useState } from 'react';
//import Alert from 'react-bootstrap/Alert';
import {Carousel} from "react-bootstrap";
//import { useNavigate,useState } from "react-router";
//import { useUserAuth } from "../context/UserAuthContext";
import cards from "../assets/sulo.jpeg";
import app from "../assets/app.png";
import telegram from "../assets/telegram.png";
import recharge from "../assets/recharge.png";
import invite from "../assets/invite.png";
import gift from "../assets/gift.png";
import home from "../assets/home.png";
import company from "../assets/company.png";
import team from "../assets/team.png";
import mine from "../assets/mine.png";
import { Link } from "react-router-dom";

const Home = () => {
  // const { logOut, user } = useUserAuth();
  // const navigate = useNavigate();
  // const [visible,setVisible]=React.useState(false);
  // const onClick = () => setVisible(user.phoneNumber===+919120496636);

  // const handleLogout = async () => {
  //   try {
  //     await logOut();
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <>
    <div className="wholebody">
      {/* <div className="p-4 box mt-3 text-center">
        <h2>Hello Welcome </h2><br /> */}
        {/* let user = firebase.auth().currentUser; */}
        {/* {user && user.phoneNumber}
        <div style={{display: user.phoneNumber===+919120496634 ? 'block': 'none'}}>
          <div className="d-grid gap-2 mt-3">
            <Link to="/admin"><Button variant="success" type="Submit">
              Admin Login
            </Button></Link>
          </div>
          </div>
          <div style={{display: (user.phoneNumber===+919120496634)? "block": "none"}}>Hello</div>
      </div> */}

<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cards}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cards}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cards}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

<div >
<ul className="apps">
   <Link to=""><li><img src={app} alt=" " width={"50px"}/><figcaption>Online</figcaption></li></Link>
   <Link to=""><li><img src={telegram} alt=" " width={"50px"}/><figcaption>App</figcaption></li></Link>
   <Link to=""><li><img src={recharge} alt=" " width={"50px"}/><figcaption>Activity</figcaption></li></Link>
   <Link to="/recharge"><li><img src={invite} alt=" " width={"50px"}/><figcaption>Recharge</figcaption></li></Link>
   <Link to="/invite"><li><img src={gift} alt=" " width={"50px"}/><figcaption>invite</figcaption></li></Link>
</ul>
</div>

<div className="announcement-content" >
<marquee direction="up">
  <ul>
            <li>91700*****34 Member withdrawl 100000 Rs</li>
            <li>91962*****24 Member withdrawl 30000 Rs</li>
            <li>91994*****84 Member withdrawl 50000 Rs</li>
            <li>91997*****44 Member withdrawl 20000 Rs</li>
            <li>91837*****25 Member withdrawl 5000 Rs</li>
            <li>91895*****43 Member withdrawl 10000 Rs</li>
            <li>91826*****36 Member withdrawl 30000 Rs</li>
            <li>91976*****21 Member withdrawl 50000 Rs</li>
            <li>91967*****50 Member withdrawl 5000 Rs</li>
            <li>91907*****51 Member withdrawl 20000 Rs</li>
            <li>91867*****39 Member withdrawl 500 Rs</li>
            <li>91709*****39 Member withdrawl 5000 Rs</li>
            <li>91629*****90 Member withdrawl 10000 Rs</li>
            <li>91939*****47 Member withdrawl 2000 Rs</li>
            <li>91993*****89 Member withdrawl 500 Rs</li>
            <li>91809*****63 Member withdrawl 20000 Rs</li>
            <li>91873*****00 Member withdrawl 500 Rs</li>
            <li>91926*****06 Member withdrawl 2000 Rs</li>
            <li>91965*****51 Member withdrawl 30000 Rs</li>
            <li>91970*****85 Member withdrawl 20000 Rs</li>
            <li>91889*****01 Member withdrawl 10000 Rs</li>
            <li>91976*****44 Member withdrawl 50000 Rs</li>
            <li>91936*****71 Member withdrawl 20000 Rs</li>
            <li>91978*****78 Member withdrawl 10000 Rs</li>
            <li>91936*****09 Member withdrawl 5000 Rs</li>
            <li>91882*****41 Member withdrawl 10000 Rs</li>
            <li>91939*****27 Member withdrawl 20000 Rs</li>
            <li>91726*****51 Member withdrawl 20000 Rs</li>
            <li>91888*****35 Member withdrawl 20000 Rs</li>
            <li>91886*****36 Member withdrawl 500 Rs</li>
            <li>91741*****54 Member withdrawl 10000 Rs</li>
            <li>91837*****74 Member withdrawl 30000 Rs</li>
            <li>91967*****08 Member withdrawl 50000 Rs</li>
            <li>91924*****58 Member withdrawl 50000 Rs</li>
            <li>91814*****68 Member withdrawl 100000 Rs</li>
            <li>91905*****31 Member withdrawl 500 Rs</li>
            <li>91999*****21 Member withdrawl 50000 Rs</li>
            <li>91653*****55 Member withdrawl 100000 Rs</li>
            <li>91810*****22 Member withdrawl 10000 Rs</li>
            <li>91812*****17 Member withdrawl 30000 Rs</li>
            <li>91945*****75 Member withdrawl 5000 Rs</li>
            <li>91953*****17 Member withdrawl 30000 Rs</li>
            <li>91930*****86 Member withdrawl 5000 Rs</li>
            <li>91805*****28 Member withdrawl 10000 Rs</li>
            <li>91701*****65 Member withdrawl 30000 Rs</li>
            <li>91904*****85 Member withdrawl 20000 Rs</li>
            </ul>
            </marquee>
            </div>
 <div className="card-deck">
  <div className="card">
    <div className="card-footer">
      <small className="text-muted">Sula Wine Estate</small>
    </div>
    <img className="card-img-top" src={cards} alt=""/>
    <Link to="/payment"><div className="card-body">
      <h5 className="card-title">Sula Investment Project</h5>
      <p className="card-text"> Project Amount:₹5900 <br/>
      Daily Earning:₹610 <br/>
      Project Cycle:90 day<br/>
      Total Earning:₹54900</p>
    </div></Link>
  </div>
  <div className="card">
    <div className="card-footer">
    <small className="text-muted">Sula Wine Estate</small>
    </div>
    <img className="card-img-top" src={cards} alt=""/>
    <Link to="/payment"><div className="card-body">
      <h5 className="card-title">Sula Investment Project</h5>
      <p className="card-text"> Project Amount:₹5900 <br/>
      Daily Earning:₹610 <br/>
      Project Cycle:90 day<br/>
      Total Earning:₹54900</p>
    </div></Link>
  </div>
</div>

<div className="card-deck">
  <div className="card">
    <div className="card-footer">
    <small className="text-muted">Sula Wine Estate</small>
    </div>
    <img className="card-img-top" src={cards} alt=""/>
    <Link to="/payment"><div className="card-body">
      <h5 className="card-title">Sula Investment Project</h5>
      <p className="card-text"> Project Amount:₹5900 <br/>
      Daily Earning:₹610 <br/>
      Project Cycle:90 day<br/>
      Total Earning:₹54900</p>
    </div></Link>
  </div>
  <div className="card">
    <div className="card-footer">
    <small className="text-muted">Sula Wine Estate</small>
    </div>
    <img className="card-img-top" src={cards} alt=""/>
    <Link to="/payment"><div className="card-body">
      <h5 className="card-title">Sula Investment Project</h5>
      <p className="card-text"> Project Amount:₹5900 <br/>
      Daily Earning:₹610 <br/>
      Project Cycle:90 day<br/>
      Total Earning:₹54900</p>
    </div></Link>
  </div>
</div>

<div className="card-deck">
  <div className="card">
    <div className="card-footer">
      <small className="text-muted">Sula Wine Estate</small>
    </div>
    <img className="card-img-top" src={cards} alt=""/>
    <Link to="/payment"><div className="card-body">
      <h5 className="card-title">Sula Investment Project</h5>
      <p className="card-text"> Project Amount:₹5900 <br/>
      Daily Earning:₹610 <br/>
      Project Cycle:90 day<br/>
      Total Earning:₹54900</p>
    </div></Link>
  </div>
  <div className="card">
    <div className="card-footer">
    <small className="text-muted">Sula Wine Estate</small>
    </div>
    <img className="card-img-top" src={cards} alt=""/>
    <Link to="/payment"><div className="card-body">
      <h5 className="card-title">Sula Investment Project</h5>
      <p className="card-text"> Project Amount:₹5900 <br/>
      Daily Earning:₹610 <br/>
      Project Cycle:90 day<br/>
      Total Earning:₹54900</p>
    </div></Link>
  </div>
</div>

<div className="card-deck">
  <div className="card">
    <div className="card-footer">
      <small className="text-muted">Sula Wine Estate</small>
    </div>
    <img className="card-img-top" src={cards} alt=""/>
    <Link to="/payment"><div className="card-body">
      <h5 className="card-title">Sula Investment Project</h5>
      <p className="card-text"> Project Amount:₹5900 <br/>
      Daily Earning:₹610 <br/>
      Project Cycle:90 day<br/>
      Total Earning:₹54900</p>
    </div></Link>
  </div>
  <div className="card">
    <div className="card-footer">
    <small className="text-muted">Sula Wine Estate</small>
    </div>
    <img className="card-img-top" src={cards} alt=""/>
    <Link to="/payment"><div className="card-body">
      <h5 className="card-title">Sula Investment Project</h5>
      <p className="card-text"> Project Amount:₹5900 <br/>
      Daily Earning:₹610 <br/>
      Project Cycle:90 day<br/>
      Total Earning:₹54900</p>
    </div></Link>
  </div>
</div>

<div className="card-deck">
  <div className="card">
    <div className="card-footer">
      <small className="text-muted">Sula Wine Estate</small>
    </div>
    <img className="card-img-top" src={cards} alt=""/>
    <Link to="/payment"><div className="card-body">
      <h5 className="card-title">Sula Investment Project</h5>
      <p className="card-text"> Project Amount:₹5900 <br/>
      Daily Earning:₹610 <br/>
      Project Cycle:90 day<br/>
      Total Earning:₹54900</p>
    </div></Link>
  </div>
  <div className="card">
    <div className="card-footer">
    <small className="text-muted">Sula Wine Estate</small>
    </div>
    <img className="card-img-top" src={cards} alt=""/>
    <Link to="/payment"><div className="card-body">
      <h5 className="card-title">Sula Investment Project</h5>
      <p className="card-text"> Project Amount:₹5900 <br/>
      Daily Earning:₹610 <br/>
      Project Cycle:90 day<br/>
      Total Earning:₹54900</p>
    </div></Link>
  </div>
</div>

<div className="card-deck">
  <div className="card">
    <div className="card-footer">
      <small className="text-muted">Sula Wine Estate</small>
    </div>
    <img className="card-img-top" src={cards} alt=""/>
    <Link to="/payment"><div className="card-body">
      <h5 className="card-title">Sula Investment Project</h5>
      <p className="card-text"> Project Amount:₹5900 <br/>
      Daily Earning:₹610 <br/>
      Project Cycle:90 day<br/>
      Total Earning:₹54900</p>
    </div></Link>
  </div>
  <div className="card">
    <div className="card-footer">
    <small className="text-muted">Sula Wine Estate</small>
    </div>
    <img className="card-img-top" src={cards} alt=""/>
    <Link to="/payment"><div className="card-body">
      <h5 className="card-title">Sula Investment Project</h5>
      <p className="card-text"> Project Amount:₹5900 <br/>
      Daily Earning:₹610 <br/>
      Project Cycle:90 day<br/>
      Total Earning:₹54900</p>
    </div></Link>
  </div>
</div> 

      {/* <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div> */}

      <footer>
      <ul>
      <Link to="/home"><li><img src={home} alt=" " width={"30px"}/><figcaption>Home</figcaption></li></Link>
  <Link to="/company"><li><img src={company} alt=" " width={"30px"}/><figcaption>Company</figcaption></li></Link>
  <Link to="/team"><li><img src={team} alt=" " width={"30px"}/><figcaption>Team</figcaption></li></Link>
    <Link to="/mine"><li><img src={mine} alt=" " width={"30px"}/><figcaption>Mine</figcaption></li></Link>
</ul>
      </footer>
      </div>
    </>
  );
};

export default Home;
