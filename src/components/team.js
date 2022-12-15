import React from 'react'

const team = () => {
  return (
    <>
    <div data-v-b7e8b406="" className="main">
    <div className="header" style={{background: "#cae025"}}>
        <p style={{color: "#fff!important"}}>My team</p>
    </div>
    <div data-v-b7e8b406="" className="report" style={{width: "100%"}}>
        <div data-v-b7e8b406="" className="lf">
            <p data-v-b7e8b406="">Team assets</p>₹0.00</div>
        <div data-v-b7e8b406="" className="lf">
            <p data-v-b7e8b406="">Team recharge(₹)</p>₹0.00</div>
        <div data-v-b7e8b406="" className="lf">
            <p data-v-b7e8b406="">Team Number</p>0</div>
    </div>
    <div data-v-b7e8b406="" className="mint-loadmore">
        <div className="mint-loadmore-content">
            <div className="mint-loadmore-top">
                <span className="mint-loadmore-text">Pull down to refresh</span>
            </div>
            <div data-v-b7e8b406="" className="nav">
                <button data-v-b7e8b406="" onclick="window.location.href='/index/ctrl/junior?level=1'" className="mint-button mint-button--default mint-button--normal btn on"><label className="mint-button-text">First</label>
                </button>
                <button data-v-b7e8b406="" onclick="window.location.href='/index/ctrl/junior?level=2'" className="mint-button mint-button--default mint-button--normal btn ">
                    <label className="mint-button-text">Second</label>
                </button>
                <button data-v-b7e8b406="" onclick="window.location.href='/index/ctrl/junior?level=3'" className="mint-button mint-button--default mint-button--normal btn ">
                    <label className="mint-button-text">Third</label>
                </button>
            </div>
            <div data-v-b7e8b406="" className="page-tab-container hot">
                <div data-v-b7e8b406="" className="mint-tab-container page-tabbar-tab-container">
                    <div className="mint-tab-container-wrap">
                        <div data-v-b7e8b406="" className="mint-tab-container-item">
                            <ul data-v-b7e8b406="" style={{padding: "10px"}}>
                                <span className="notdata">No record</span>
                            </ul>
                            <div data-v-b7e8b406="" className="no_more">no data</div>
                        </div>
                        <div data-v-b7e8b406="" className="mint-tab-container-item" style={{display: "none"}}>
                            <ul data-v-b7e8b406=""></ul>
                            <div data-v-b7e8b406="" className="no_more">no data</div>
                        </div>
                        <div data-v-b7e8b406="" className="mint-tab-container-item" style={{display: "none"}}>
                            <ul data-v-b7e8b406=""></ul>
                            <div data-v-b7e8b406="" className="no_more">no data</div></div></div></div></div>
            <div className="mint-loadmore-bottom">
                <span className="mint-loadmore-text">Pull up to refresh</span>
            </div></div></div>
    <div className="footerbar">
        <div className="Home" onclick="window.location.href='/index/index/home.html'">
            <img src="/pic/icon/home.png" />
            <span>Home</span>
        </div>
        <div className="Personal" onclick="window.location.href='https://www.bkt-machineryandtires.com/app.apk'">
            <img src="/pic/icon/download.png" />
            <span>Download</span>
        </div>
        <div className="Team" onclick="window.location.href=`/index/ctrl/junior`">
            <img src="/pic/icon/team.png" />
            <span>Team</span>
        </div>
        <div className="Personal" onclick="window.location.href='/index/my/index.html'">
            <img src="/pic/icon/my.png" />
            <span>My</span>
        </div>
    </div>
</div>
</>
  )
}

export default team