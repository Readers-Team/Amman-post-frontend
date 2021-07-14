'use strict'
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios'
import UpdateBlog from './UpdateBlog';
import { Card, CardColumns } from 'react-bootstrap'

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      resultsBook: [],
      nameartical: '',
      description: '',
      author: '',
      title: '',
      showform: false,
      showbutton: true,
    });
  }
  componentDidMount = async () => {
    let email = this.props.auth0.user.email
    let axiosData = await axios.get(`http://localhost:4500/blogs/?email=${email}`)
    this.setState({
      resultsBook: axiosData.data.blogs
    })
    console.log(axiosData.data.blogs)
  }
  buttonFun = (e) => {
    this.setState({
      showform: true,
      showbutton: false
    })
  }
  getName = (e) => {
    this.setState({
      nameartical: e.target.value,
    })
  }
  getDescription = (e) => {
    this.setState({
      description: e.target.value,
    })
  }
  getStatus = (e) => {
    this.setState({
      author: e.target.value,
    })
   }
  createBook = (e) => {
    e.preventDefault();
    const reqBody = {
      nameartical: this.state.nameartical,
      description: this.state.description,
      author: this.state.author,
      email: this.props.auth0.user.email,
 }
    this.setState({
      showform: false,
      showbutton: true
    })
    axios.post(`${process.env.REACT_APP_URL}/blogs`, reqBody).then(res => {
      this.setState({
        resultsBook: res.data.blogs
      })
    }
    ).catch(error => { alert(error.message) })
  }
  deleteBook = (blog_idx) => {
    let url = process.env.REACT_APP_URL;
    axios.delete(`${url}/blogs/${blog_idx}/?email=${this.props.auth0.user.email}`).then(res => {
      this.setState({
        resultsBook: res.data.blogs
      })
    })
  }
  UpdateData = (e, blog_idx) => {
    e.preventDefault();
    const reqBody = {
      nameartical: this.state.nameartical,
      description: this.state.description,
      author: this.state.author,
      email: this.props.auth0.user.email,
    }
    let url = process.env.REACT_APP_URL;
    axios.put(`${url}/blogs/${blog_idx}`, reqBody).then(res => {
      this.setState({
        resultsBook: res.data.blogs
      })
    })
  }

  render() {
    return (
      <>
        {this.state.showbutton &&
        <>
          <button className="w3-button w3-sand w3-section w3-topleft" onClick={(e) => { this.buttonFun(e) }} type="submit">Add New Post</button>
          <div id="text" style={{textAlign:'center'}} >Community Plogs 🤞 🎗️</div>
          <div className="divider"></div>
          <div className="divider"></div>         
          </>
        }
        {
          this.state.showform &&
          <>
          
          <div className="w3-container w3-content w3-padding-64" style={{ maxWidth: "1000px" }} id="contact">
            <h2 className="w3-wide w3-center formcontact">Let's Add Your Plog Here 🤝 🗞️</h2>

            <div className="w3-row w3-padding-32 formcontact">

              <div className="w3-col m12">
                <form action="/action_page.php" target="_blank" onSubmit={(e) => { this.createBook(e) }}>
                  <div className="w3-row-padding" style={{ margin: "0 -16px 8px -16px" }}>
                    <div className="w3-half">
                      <input className="w3-input w3-border" type="text" placeholder="Titel of Blog" required name="titel" onChange={(e) => { this.getName(e) }} />
                    </div>
                    <div className="w3-half">
                      <input className="w3-input w3-border" type="text" placeholder="Auther" onChange={(e) => { this.getStatus(e) }} required name="auther" />
                    </div>
                  </div>
                  <input className="w3-input w3-border" style={{ height: '100px' }} type="text" placeholder="What is in your mind...." onChange={(e) => { this.getDescription(e) }} required name="discription" />
                  <button className="w3-button w3-sand w3-section w3-right" type="submit">Post</button>
                </form>
              </div>
            </div>
          </div>
          </>
        }
        {
          this.state.resultsBook && this.state.resultsBook.map((item, idx) => {
            return (
              <CardColumns className="CardColumns">
                <div className='cardpg'>
                <Card key={idx} id={idx}>
                  <Card.Body>
                    <br/>
                    <Card.Title className="title" >{item.nameartical}</Card.Title>
                    <br/>
                    <Card.Text className="desc" >
                    {item.author}
                    </Card.Text>
                    <br/>
                    <Card.Text className="desc">
                    {item.description}
                    </Card.Text>
                    <br/>
                    <button onClick={(e) => this.deleteBook(idx)} className="w3-button w3-red w3-section " type="submit">Delete </button>
                    <br/>

                    <UpdateBlog key={idx} id={idx}
                      getName={this.getName}
                      getDescription={this.getDescription}
                      getStatus={this.getStatus}
                      UpdateData={this.UpdateData}
                      idx={idx}
                      nameartical={item.nameartical}
                      author={item.author}
                      description={item.description}
                    />
                  </Card.Body>
                </Card>
                </div>
              </CardColumns>


            )
          })
        }
        {/*
          }

          {this.state.resultsBook &&
            this.state.resultsBook.map((item, idx) => {
              return (
                <>
                  <Card style={{ width: '18rem' }} key={idx} id={idx}>
                    <Card.Body>
                      <Card.Title>{item.nameartical}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{item.author}</Card.Subtitle>
                      <Card.Text>
                        {item.description}
                      </Card.Text>
                      <Button variant="primary" size="sm" onClick={(e) => this.deleteBook(idx)}>Delet</Button>
                    </Card.Body>
                    <UpdateBlog key={idx} id={idx}
                      getName={this.getName}
                      getDescription={this.getDescription}
                      getStatus={this.getStatus}
                      UpdateData={this.UpdateData}
                      idx={idx}
                      nameartical={item.nameartical}
                      author={item.author}
                      description={item.description}
                    />
                  </Card>
                </>
              )
            })
          }
        </Jumbotron> */}


      </>
    )
  }
}
export default withAuth0(MyFavoriteBooks);