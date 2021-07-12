import React, { Component } from 'react'
import axios from 'axios';
import { Row, Col, Card, CardColumns } from 'react-bootstrap'
import './newsstyle.css'
export class Political extends Component {

    constructor(props) {
        super(props);
        this.state = {
            PoliticalArr: [],
        }
        this.functionn = this.newsItem(this)
    }
    newsItem = async () => {
        const URL = process.env.REACT_APP_URL;
        const API = process.env.REACT_APP_URL_API;
        let NewsURL = `${URL}/news?q=Political&apiKey=${API}`
        console.log(NewsURL)
        const newsReq = await axios.get(NewsURL);
        console.log(newsReq.data);

        this.setState({
            PoliticalArr: newsReq.data
        }
        )

    }


    render() {
        console.log(this.state.PoliticalArr);
        return (
            <>
                {this.state.functionn}
                <div id="text">Political News</div>
                {
                    this.state.PoliticalArr.map((item) => {
                        return (
                            <CardColumns className="CardColumns">
                                <Card>
                                    <Card.Img className="img" variant="top" src={item.urlToImage} />
                                    <Card.Body>
                                        <br />
                                        <Card.Title className="title" > {item.title}</Card.Title>
                                        <br />

                                        <Card.Text className="desc" >
                                            {item.description}
                                        </Card.Text>
                                        <br />
                                        <Card.Text className="desc">
                                            {item.content}
                                        </Card.Text>
                                        <br />
                                        <Card.Text className="published">
                                            <span>Published At : </span>{item.publishedAt}
                                        </Card.Text>
                                        <Card.Text className="published" >
                                            <span>Published By: </span> {item.name}
                                        </Card.Text >
                                        <br />
                                        <Card.Text className="auther " >
                                            <span>Author : </span>   {item.author}
                                        </Card.Text>

                                        <br />
                                    </Card.Body>
                                </Card>
                            </CardColumns>


                        )
                    })
                }
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

export default Political
