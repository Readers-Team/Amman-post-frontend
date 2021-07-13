'use strict'
import React, { Component } from 'react'
import {Button,Modal,Form} from "react-bootstrap"
class UpdateBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
                
        }}

    handleModal(){
        this.setState({show:!this.state.show})
    }

    render() {
        console.log(this.props.nameartical)
        return (
            <div>
                <Button variant="primary" size="sm" onClick={()=>{this.handleModal()}}>Update</Button>
                <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                    <Modal.Header closeButton>{this.props.nameartical}</Modal.Header>
                    <Modal.Body>
                        
      <Form >
      <Form.Group className="mb-3" >
      <Form.Label>Update your Blog here</Form.Label>
      <Form.Control type="text"  defaultValue={this.props.nameartical} onChange={(e)=>{this.props.getName(e)}} />
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label>Description</Form.Label>
      <Form.Control as="textarea" rows={2} defaultValue={this.props.description} onChange={(e)=>{this.props.getDescription(e)}}/>
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label>aouther</Form.Label>
      <Form.Control type="text" defaultValue={this.props.author} onChange={(e)=>{this.props.getStatus(e)}}/>
      </Form.Group>
      <Button variant="primary" size="sm" type="submit" onClick={(e)=>this.props.UpdateData(e,this.props.idx)}>
      update data
      </Button>
        </Form>
                    </Modal.Body>
            </Modal>
            </div>
        )
    }
}

export default UpdateBlog