'use strict'

import React from 'react';
import axios from 'axios'
import { withAuth0 } from '@auth0/auth0-react';
import { Card, CardColumns } from 'react-bootstrap'




export class AllBlogs extends React.Component {


    constructor(props) {
        super(props);
        this.state = ({
            resultsBook: [],
            nameartical: '',
            description: '',
            author: '',
            title: '',
        });

    }
    componentDidMount = async () => {
        let axiosData = await axios.get(`${process.env.REACT_APP_URL}/allblogs`)
        this.setState({
            resultsBook: axiosData.data
        })
        // console.log(axiosData.data)
    }


    render() {

        let variant = 'Light'
        console.log(this.state.resultsBook);
        return (
            <>

                {this.state.resultsBook && this.state.resultsBook.map(item => {
                    let emailLink = `https://www.${item.email}`
                    return (
                        <>
                        <div className="divider"></div>
                        <div className="divider"></div>
                            {item.blogs.map(val => {
                                return (
                                    <CardColumns className=" CardColumns">
                                        <div className='cardpg'>
                                        <Card >
                                            <Card.Body   >
                                                <br />
                                                <Card.Title className="title" >{<a href={emailLink}>Email</a>}</Card.Title>
                                                <br />
                                                <Card.Text className="desc" >
                                                    {val.author}
                                                </Card.Text>
                                                <br />
                                                <Card.Text className="desc">
                                                    {val.nameartical}
                                                </Card.Text>
                                                <br />
                                                <Card.Text className="desc">
                                                    {val.description}
                                                </Card.Text>
                                                <br />
                                            </Card.Body>
                                        </Card>
                                        </div>
                                    </CardColumns>


                                )
                            })}
                        </>
                    )

                })}
                {/* {this.state.resultsBook && this.state.resultsBook.map(item => {
                    let emailLink=`https://www.${item.email}`
                    return (
                        <>
                            {item.blogs.map(val => {
                                return (
                                    <Card
                                        bg={variant.toLowerCase()}
                                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                        style={{ width: '18rem' }}
                                        className="mb-2"
                                    >

                                        <Card.Header>{<a href={emailLink}>Email</a>} <br></br> {val.author}</Card.Header>
                                        <Card.Body>
                                            <Card.Title>{val.nameartical}</Card.Title>
                                            <Card.Text>
                                              {val.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                )
                            })}
                        </>
                    )

                })} */}
            </>
        )
    }
}

export default withAuth0(AllBlogs)