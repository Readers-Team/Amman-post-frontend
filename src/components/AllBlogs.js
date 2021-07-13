'use strict'

import React from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';




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
        let axiosData = await axios.get(`http://localhost:8000/allblogs`)
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

                })}
            </>
            //         {this.state.resultsBook[0] &&
            //             this.state.resultsBook.map((item)=>{
            //               console.log('this is my item',item.blogs.nameartical)   className='font'
            //         return(

            //                 <Card
            //                     bg={variant.toLowerCase()}
            //                     text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            //                     style={{ width: '18rem' }}
            //                     className="mb-2"
            //                 >

            //                     <Card.Header>{item.email}</Card.Header>
            //                     <Card.Body>
            //                         <Card.Title>{variant} Card Title </Card.Title>
            //                         <Card.Text>
            //                             Some quick example text to build on the card title and make up the bulk
            //                             of the card's content.
            //                         </Card.Text>
            //                     </Card.Body>
            //                 </Card>
            //         )


            //             }){val.nameartical}



            //         }

            //     </>
        )
    }
}

export default withAuth0(AllBlogs)
