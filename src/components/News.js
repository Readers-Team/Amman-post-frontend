import React, { Component } from 'react'
const axios = require('axios');
export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newyorkArr: [],
            spaniaArr:[],
            parisArr:[],
            germanArr:[],
            czechArr:[],
            turkyiArr:[],
            italyArr:[],
            athensaArr:[]
            
        }
        this.functionn = this.newsItem(this)
    }
    newsItem = async () => {
        const URL = process.env.REACT_APP_URL;
        const API = process.env.REACT_APP_URL_API;

        // 1
        let amaricanews = `${URL}/news?q=amarica&apiKey=${API}`
        console.log(amaricanews)
        const amaricaReq = await axios.get(amaricanews);
        console.log(amaricaReq.data);
        
        this.setState({
            newyorkArr: amaricaReq.data[0]
        }
        )
        // 2
        let spainnews = `${URL}/news?q=spain&apiKey=${API}`
        const spainReq = await axios.get(spainnews);
        this.setState({
            spaniaArr: spainReq.data[0]
        }
        )
        // 3
        let parisnews = `${URL}/news?q=paris&apiKey=${API}`
        const parisReq = await axios.get(parisnews);
        this.setState({
            parisArr: parisReq.data[0]
        }
        )
      
        // 4
        let germannews = `${URL}/news?q=german&apiKey=${API}`
        const germanReq = await axios.get(germannews);
        this.setState({
            germanArr: germanReq.data[0]
        }
        )
      
        // 5
        let czechnews = `${URL}/news?q=czech&apiKey=${API}`
        const czechReq = await axios.get(czechnews);
        this.setState({
            czechArr: czechReq.data[0]
        }
        )
      
        // 6
        let turkyinews = `${URL}/news?q=turkia&apiKey=${API}`
        const turkyiReq = await axios.get(turkyinews);
        this.setState({
            turkyiArr: turkyiReq.data[0]
        }
        )
      
        // 7
        let italynews = `${URL}/news?q=italy&apiKey=${API}`
        const italyReq = await axios.get(italynews);
        this.setState({
            italyArr: italyReq.data[0]
        }
        )
      
        // 8
        let athensnews = `${URL}/news?q=athens&apiKey=${API}`
        const athensReq = await axios.get(athensnews);
        this.setState({
            athensaArr: athensReq.data[0]
        }
        )
      
      

    }
    render() {
        return (
           
            <>
             
                {this.state.functionn}
                <header class="w3-container w3-large w3-padding-24">
                    <button class="w3-right w3-button w3-white">LOGIN</button>
                </header>
                <div className="mySlides w3-display-container w3-center">
                    <img className="imgmain" src="https://lh3.googleusercontent.com/proxy/sus-GX1L6_WNZRQtzE041gYezyJCVfovP0DtWEMKW2-zBp0u0wIm0d2a0iAgjp5SBQOzZYB2dJLVLd9tbQAC2MruI_wg69mEt_STuYevUaDNKdLFGXWUrqK4tIU" />
                    <div className="w3-display-topleft w3-container w3-text-black w3-padding-32 w3-hide-smalls  ">
                        <h3 id="textmain">HAKI GARAYED</h3>

                    </div>
                    <div
                        className="w3-display-buttom w3-container w3-padding-32 w3-hide-smalls main ">
                        <p ><b>"Newspapers cannot be defined by the second word-paper , They have got to be defined by the first word-news"</b></p>
                        <p >Arthur Sulzberg, Jr</p>
                    </div>
                </div>
                <div className="w3-container w3-content w3-center w3-padding-64 maindisc" style={{ maxWidth: '1000px' }} id="band">
                    <h2 className="w3-wide">THE Vision</h2>

                    <p className="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>


                <div id="tour">
                    <div className="w3-container w3-content bordercard " style={{ maxWidth: '1000px' }}>
                        <div className="w3-row-padding " style={{ margin: "0 -16px" }}>
                        <div className="w3-quarter w3-margin-bottom cardapi">
                                <img src={this.state.newyorkArr.urlToImage} alt="New York" style={{ width: '100%' }} className="w3-hover-opacity" />
                                <div className="w3-container w3-white " >
                                    <p><b>Amarica<br/>{this.state.newyorkArr.title}</b></p>
                                   
                                    <p className="w3-opacity">{this.state.newyorkArr.publishedAt}</p>

                                </div>
                            </div>
                            <div className="w3-quarter w3-margin-bottom cardapi">
                                <img src={this.state.spaniaArr.urlToImage} alt="New York" style={{ width: '100%' }} className="w3-hover-opacity" />
                                <div className="w3-container w3-white " >
                                    <p><b>Spain<br/>{this.state.spaniaArr.title}</b></p>
                                   
                                    <p className="w3-opacity">{this.state.spaniaArr.publishedAt}</p>

                                </div>
                            </div>
                            <div className="w3-quarter w3-margin-bottom cardapi">
                                <img src={this.state.parisArr.urlToImage} alt="New York" style={{ width: '100%' }} className="w3-hover-opacity" />
                                <div className="w3-container w3-white " >
                                    <p><b>Paris<br/>{this.state.parisArr.title}</b></p>
                                   
                                    <p className="w3-opacity">{this.state.parisArr.publishedAt}</p>

                                </div>
                            </div>
                            <div className="w3-quarter w3-margin-bottom cardapi">
                                <img src={this.state.germanArr.urlToImage} alt="New York" style={{ width: '100%' }} className="w3-hover-opacity" />
                                <div className="w3-container w3-white " >
                                    <p><b>German<br/>{this.state.germanArr.title}</b></p>
                                   
                                    <p className="w3-opacity">{this.state.germanArr.publishedAt}</p>

                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="w3-container w3-content " style={{ maxWidth: '1000px' }}>
                        <div className="w3-row-padding " style={{ margin: "0 -16px" }}>
                        <div className="w3-quarter w3-margin-bottom cardapi">
                                <img src={this.state.czechArr.urlToImage} alt="New York" style={{ width: '100%' }} className="w3-hover-opacity" />
                                <div className="w3-container w3-white " >
                                    <p><b>Czech<br/>{this.state.czechArr.title}</b></p>
                                   
                                    <p className="w3-opacity">{this.state.czechArr.publishedAt}</p>

                                </div>
                            </div>
                            <div className="w3-quarter w3-margin-bottom cardapi">
                                <img src={this.state.turkyiArr.urlToImage} alt="New York" style={{ width: '100%' }} className="w3-hover-opacity" />
                                <div className="w3-container w3-white " >
                                    <p><b>Turkey<br/>{this.state.turkyiArr.title}</b></p>
                                   
                                    <p className="w3-opacity">{this.state.turkyiArr.publishedAt}</p>

                                </div>
                            </div>
                            <div className="w3-quarter w3-margin-bottom cardapi">
                                <img src={this.state.italyArr.urlToImage} alt="New York" style={{ width: '100%' }} className="w3-hover-opacity" />
                                <div className="w3-container w3-white " >
                                    <p><b>Italy<br/>{this.state.italyArr.title}</b></p>
                                   
                                    <p className="w3-opacity">{this.state.italyArr.publishedAt}</p>

                                </div>
                            </div>
                            <div className="w3-quarter w3-margin-bottom cardapi">
                                <img src={this.state.athensaArr.urlToImage} alt="New York" style={{ width: '100%' }} className="w3-hover-opacity" />
                                <div className="w3-container w3-white " >
                                    <p><b>Athens<br/>{this.state.athensaArr.title}</b></p>
                                   
                                    <p className="w3-opacity">{this.state.athensaArr.publishedAt}</p>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <div className="w3-container w3-content w3-padding-64" style={{ maxWidth: "1000px" }} id="contact">
                    <h2 className="w3-wide w3-center formcontact">CONTACT</h2>
                    
                    <div className="w3-row w3-padding-32 formcontact">
                        <div className="w3-col m6 w3-large w3-margin-bottom">
                            <i className="fa fa-map-marker" style={{ width: "30px" }}></i> Amman ,JO<br />
                            <i className="fa fa-phone" style={{ width: "30px" }}></i> Phone: +962 7<br />
                            <i className="fa fa-envelope" style={{ width: "30px" }}> </i> Email: mail@mail.com<br />
                        </div>
                        <div className="w3-col m6">
                            <form action="/action_page.php" target="_blank">
                                <div className="w3-row-padding" style={{ margin: "0 -16px 8px -16px" }}>
                                    <div className="w3-half">
                                        <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
                                    </div>
                                    <div className="w3-half">
                                        <input className="w3-input w3-border" type="text" placeholder="Email" required name="Email" />
                                    </div>
                                </div>
                                <input className="w3-input w3-border" type="text" placeholder="Message" required name="Message" />
                                <button className="w3-button w3-black w3-section w3-right" type="submit">SEND</button>
                            </form>
                        </div>
                    </div>
                </div>

                <footer className="w3-container w3-padding-32 w3-center w3-opacity bgfooter ">
                    <i className="fa fa-facebook-official w3-hover-opacity footer"></i>
                    <i className="fa fa-instagram w3-hover-opacity footer"></i>
                    <i className="fa fa-snapchat w3-hover-opacity footer"></i>
                    <i className="fa fa-pinterest-p w3-hover-opacity footer"></i>
                    <i className="fa fa-twitter w3-hover-opacity footer"></i>
                    <i className="fa fa-linkedin w3-hover-opacity footer"></i>

                </footer>

            </>
        )
    }

}

export default News


