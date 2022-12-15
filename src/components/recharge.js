import React from 'react';
import {Link} from 'react-router-dom';

const recharge = () => {
  return (
    <>
    <div data-v-7d87b156="" class="main">
    <div class="header" style={{background: "#cae025"}}>
        {/* <div class="goback" style={{color: "#fff!important"}}>
            <span class="icon iconfont icon-fanhui" style={{font: "14px"}} onclick="window.history.back(-1)"></span>
            <a href="javascript:history.go(-1)" style={{color:" #fff!important"}}></a>
        </div> */}
        <p style={{color: "#fff!important"}}>Recharge</p>
    </div>
    <div data-v-7d87b156="" class="Cash_num main2">
        <h3 data-v-7d87b156="">Enter amount:</h3>
        <div data-v-7d87b156="" class="Cash_num_money">
            <span data-v-7d87b156="">₹</span>
            <input data-v-7d87b156="" name="price" type="text" placeholder="Amount" spellcheck="false" data-ms-editor="true" />
        </div>
        <div data-v-7d87b156="" class="Cash_num_password" style={{display: "block",background:"#cae025",padding:" 1px 4px",color:"#fff"}}>
            <span data-v-7d87b156="" class="col-xs-3">500₹</span>
            <span data-v-7d87b156="" class="col-xs-3">600₹</span>
            <span data-v-7d87b156="" class="col-xs-3">1000₹</span>
            <span data-v-7d87b156="" class="col-xs-3">1500₹</span>
            <span data-v-7d87b156="" class="col-xs-3">3500₹</span>
            <span data-v-7d87b156="" class="col-xs-3">5000₹</span>
            <span data-v-7d87b156="" class="col-xs-3">8000₹</span>
            <span data-v-7d87b156="" class="col-xs-3">10000₹</span>
            <span data-v-7d87b156="" class="col-xs-3">25000₹</span>
            <span data-v-7d87b156="" class="col-xs-3">50000₹</span>
        </div>
        <Link to="/payment"><button data-v-7d87b156="" class="save-btn" id="submits" style={{font:"20px"}}>Confirm recharge</button></Link>
        <h4 data-v-7d87b156="" style={{color:"red"}}>1:Follow the recharge video operation to help you quickly recharge successfully.</h4>
        <h4 data-v-7d87b156="" style={{color:"red"}}>2:If the funds do not arrive in time, please contact the APP online customer service immediately.</h4>
        <h4 data-v-7d87b156="" style={{color:"red"}}>3:Only the online customer service obtained in the APP is authentic and credible, do not trust impostors outside the APP.</h4>
        <h4 data-v-7d87b156="" style={{color:"red"}}>4:Fill in the UTR number correctly, the funds will arrive soon.</h4>
    </div>
    <div data-v-7d87b156="" class="Cash_num paytype" style={{display: "none "}}>
        <h3 data-v-7d87b156="">Please select payment channel</h3>
        <ul data-v-7d87b156="" class="open_Lottery_ul">
            <li data-v-7d87b156="" class="save-btn2" data-id="6">
                <img data-v-7d87b156="" src="/pic/head.jpg" style={{background: "#fff"}} alt=""/>
                    <div data-v-7d87b156="" class="open_Lottery_ul_con">
                        <h3 data-v-7d87b156="">hr<span data-v-7d87b156="" >HOT</span></h3>
                        <h4 data-v-7d87b156="">hr&nbsp;</h4>
                    </div>
            </li>
            <li data-v-7d87b156="" class="save-btn2" data-id="1">
                <img data-v-7d87b156="" src="/pic/head.jpg" style={{background: "#fff"}} alt="" />
                <div data-v-7d87b156="" class="open_Lottery_ul_con">
                    <h3 data-v-7d87b156="">we</h3>
                    <h4 data-v-7d87b156="">we&nbsp;</h4>
                </div>
            </li>
            <li data-v-7d87b156="" class="save-btn2" data-id="5">
                <img data-v-7d87b156="" src="/pic/head.jpg" style={{background: "#fff"}} alt="" />
                <div data-v-7d87b156="" class="open_Lottery_ul_con">
                    <h3 data-v-7d87b156="">alla</h3>
                    <h4 data-v-7d87b156="">alla&nbsp;</h4>
                </div>
            </li>
            <li data-v-7d87b156="" class="save-btn2" data-id="4">
                <img data-v-7d87b156="" src="/pic/head.jpg" style={{background: "#fff"}} alt="" />
                <div data-v-7d87b156="" class="open_Lottery_ul_con">
                    <h3 data-v-7d87b156="">wow</h3>
                    <h4 data-v-7d87b156="">wow&nbsp;</h4>
                </div>
            </li>
        </ul>
    </div>
</div>
    </>
  )
}

export default recharge