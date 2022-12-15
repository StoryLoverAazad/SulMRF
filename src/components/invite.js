import React from 'react'

export const invite = () => {
  return (
    <>
      <div data-v-dc85d3de="" class="main">
          <div data-v-dc85d3de="" class="header">
              <div class="left_btn">
                  <img src="/pic/left.png" alt="" class="return" />
                  <span>Invite</span>
              </div>
              <div class="Maintitle">
                  <h3>Promotion poster</h3>
              </div>
              <div class="right_btn"></div>
          </div>
          <input name="" id="webcopyinput" type="text" value="" spellcheck="false" data-ms-editor="true" />
          <div data-v-dc85d3de="" class="mint-swipe swiper">
              <div class="mint-swipe-items-wrap">
                  <div data-v-dc85d3de="" class="mint-swipe-item item is-active">
                      <div data-v-dc85d3de="" class="user" id="user">
                          <div>
                              Invite your friends to join our APP,<br />
                              Even if you didn't buy the product.<br />
                              You can still earn commissions every day.<br />
                              The first-tier product commission is 10%.<br />
                              Secondary product commission is 5%.<br />
                              The third-level product commission is 2%.<br />
                          </div>
                        <div id="userflex">
                            <h3 style={{font:"0.3rem",color:"#000000"}} onclick="copy_txt('http://www.bkt-machineryandtires.com/index/user/register/invite_code/f1krc.html')">
                                <li style={{font:"0.34rem"}}>Invitation link:</li>
                                <li>
                                <input value="http://www.bkt-machineryandtires.com/index/user/register/invite_code/f1krc.html" spellcheck="false" data-ms-editor="true" />
                                </li>
                                <li style={{color: "#fff",width: "80px",height: "35px",background: "#cae025"}}>copy</li>
                            </h3>
                                <h3>
                                  <li>Invitation code:</li>
                                  <li>
                                      <input value='f1krc' type='text' spellcheck='false' data-ms-editor='true' />
                                  </li>
                                  <li>copy</li>
                                </h3>
                        </div>  
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default invite;
