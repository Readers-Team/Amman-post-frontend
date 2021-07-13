import React, { Component } from 'react'
import samah from '../assets/samah.JPG'
import qusai from '../assets/qusai.jpg'
import osama from '../assets/osama.jpg'
import './aboutus.css'
// import './newsstyle.css'


export class Aboutus extends Component {

    render() {
        return (
            <>
                <div id="cards_landscape_wrap-2">
                    <div className="w3-container w3-content bordercard " style={{ maxWidth: '1000px' }}>
                        <div className="w3-row-padding " style={{ margin: "0 -16px" }}>
                            <div className="w3-quarter w3-margin-bottom  card-flyer imge">
                                <img src={samah} alt="New York" style={{ width: '100%' , height:'300px'}} className="w3-hover-opacity  image-box" />
                                <div className="w3-container w3-white  text-box  " >
                                    <p><b>Samah Abujwaied<br /></b>Al-Hussein Bin Talal University</p>
                                    <p className="w3-opacity">CS </p>
                                    <div id='link'>
                                        <a href='Samah.abujweed@yahoo.com' className='font'><i class="fa fa-envelope" aria-hidden="true"></i></a>
                                        <a href='https://github.com/samahAbujwaied' className='font'><i class="fa fa-github" aria-hidden="true"></i></a>
                                        <a href='https://www.linkedin.com/in/samah-abujwaied-851011163/' className='font'><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="w3-quarter w3-margin-bottom  card-flyer imge">
                                <img src='https://avatars.githubusercontent.com/u/82310572?v=4' alt="New York" style={{ width: '100%' , height:'300px'}} className="w3-hover-opacity  image-box" />
                                <div className="w3-container w3-white  text-box  " >
                                    <p><b>Adham Omari<br /></b>Al-Balqa' Applied University.</p>
                                    <p className="w3-opacity">CS</p>
                                    <div id='link'>
                                        <a href='adhamalomari909@gmail.com' className='font'><i class="fa fa-envelope" aria-hidden="true"></i></a>
                                        <a href='https://github.com/AdhamOmari' className='font'><i class="fa fa-github" aria-hidden="true"></i></a>
                                        <a href='https://www.linkedin.com/in/adham-alomari-282351176/' className='font'><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="w3-quarter w3-margin-bottom   card-flyer imge padimg">
                                <img src={osama} alt="New York" style={{ width: '100%' , height:'300px'}} className="w3-hover-opacity  image-box" />
                                <div className="w3-container w3-white  text-box " >
                                    <p><b>Osama Momani<br /></b>Hashemite University of Jordan</p>
                                    <p className="w3-opacity">mechatronics engineer </p>
                                    <div id='link'>
                                        <a href='momaniosama97@gmail.com' className='font'><i class="fa fa-envelope" aria-hidden="true"></i></a>
                                        <a href='https://github.com/Osamamomani1' className='font'><i class="fa fa-github" aria-hidden="true"></i></a>
                                        <a href='https://www.linkedin.com/in/osama-momani-839916202/' className='font'><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="w3-quarter w3-margin-bottom  card-flyer imge">
                                <img src={qusai} alt="New York" style={{ width: '100%' , height:'300px'}} className="w3-hover-opacity  image-box" />
                                <div className="w3-container w3-white  text-box " >
                                    <p><b>Qusai Qeisi<br /></b>MUET</p>
                                    <p className="w3-opacity">electrical engineer . PMP . life coaching .</p>
                                    <div id='link'>
                                        <a href='qusaiqeisi5@gmail.com' className='font'><i class="fa fa-envelope" aria-hidden="true"></i></a>
                                        <a href='https://github.com/qusaiqeisi' className='font'><i class="fa fa-github" aria-hidden="true"></i></a>
                                        <a href='https://www.linkedin.com/in/qusai-alqaisi-090037135/' className='font'><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Aboutus