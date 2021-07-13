'use strict'
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios'
// import Varfication from './Varfication';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron,Form,Button,Card,Modal} from 'react-bootstrap';
import '../BestBooks.css';
import UpdateBlog from './UpdateBlog';

class MyFavoriteBooks extends React.Component {

  constructor(props){
    super(props);
    this.state=({
      resultsBook:[],
      nameartical:'',
      description:'',
      author:'',
      title:'',
      showform:false,
      showbutton:true,
    //   showedit:false
    });
   
  }

  

 
  componentDidMount = async() => {

    let email=this.props.auth0.user.email
    let axiosData= await axios.get(`http://localhost:8000/blogs/?email=${email}`)
    this.setState({
      resultsBook:axiosData.data.blogs
    })
    console.log(axiosData.data.blogs)
  }
  buttonFun=(e)=>{
    this.setState({
      showform:true,
      showbutton:false
    })
  }

  getName=(e)=>{
    this.setState({
      nameartical:e.target.value,
    })
  }
  getDescription=(e)=>{
    this.setState({
      description:e.target.value,
    })
  }
  getStatus=(e)=>{
    this.setState({
    author:e.target.value,
    })
  }
  createBook=(e)=>{
    e.preventDefault();
    const reqBody={
      nameartical: this.state.nameartical,
      description: this.state.description,
      author:this.state.author,
      email:this.props.auth0.user.email,
     
    }
    this.setState({
        showform:false,
        showbutton:true
    })
    axios.post(`${process.env.REACT_APP_SERVER_URL}/blogs`,reqBody).then(res=>{
      this.setState({
        resultsBook:res.data.blogs
      })
    }
    ).catch(error=>{alert(error.message)})
  }

  deleteBook=(blog_idx)=>{
    let url = process.env.REACT_APP_SERVER_URL;
    axios.delete(`${url}/blogs/${blog_idx}/?email=${this.props.auth0.user.email}`).then(res=>{
      this.setState({
        resultsBook:res.data.blogs
      })
    })

  }
//   showeditform=(e)=>{
//     this.setState({
//       showedit:!this.state.showedit
//     })
//   }


  UpdateData=(e,blog_idx)=>{
    e.preventDefault();
    const reqBody={
      nameartical: this.state.nameartical,
      description: this.state.description,
      author:this.state.author,
      email:this.props.auth0.user.email,
  }
  let url = process.env.REACT_APP_SERVER_URL;
  axios.put(`${url}/blogs/${blog_idx}`,reqBody).then(res=>{
    this.setState({
      resultsBook:res.data.blogs
    })
  })

}
 

  render() {
    return(
        <>
      {/* <Varfication/> */}
      <Jumbotron>
        <h1>My Blogs</h1>
        <p>
          This is a collection of my Posts
        </p>
      {this.state.showbutton &&
      
      <Button variant="primary" type="submit" onClick={(e)=>{this.buttonFun(e)}}>Add New Post</Button>
      
      }
      
        {
          this.state.showform &&
          <Form onSubmit={(e)=>{this.createBook(e)}}>
      <Form.Group className="mb-3" >
      <Form.Label>Add your favorite Book here</Form.Label>
      <Form.Control type="text" placeholder="name of your favorite Book" onChange={(e)=>{this.getName(e)}} required="true" />
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label>Description</Form.Label>
      <Form.Control as="textarea" rows={2}  onChange={(e)=>{this.getDescription(e)}} required="true" />
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label>status</Form.Label>
      <Form.Control type="text" onChange={(e)=>{this.getStatus(e)}} required="true"/>
      </Form.Group>
      <Button variant="primary" type="submit" >
      Submit
      </Button>
        </Form>

        }
        {this.state.resultsBook && 
        
        this.state.resultsBook.map((item,idx)=>{
            return (
              
              <>
  
            <Card style={{ width: '18rem' }} key={idx} id={idx}>
            <Card.Body>
            <Card.Title>{item.nameartical}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{item.author}</Card.Subtitle>
            <Card.Text>
            {item.description}
            </Card.Text>
            <Button variant="primary" size="sm" onClick={(e)=>this.deleteBook(idx)}>Delet</Button>
            {/* <br></br>
            <br></br>
            <Button variant="primary" size="sm"onClick={(e)=>this.showeditform(e)}>Edite</Button> */}
            </Card.Body>
            
  =
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
        
        
      </Jumbotron>
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);