'use strict'
import React, { Component } from 'react'
import { Button, Modal, Form } from "react-bootstrap"
// import 'bootstrap/dist/css/bootstrap.min.css';
class UpdateBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,

        }
    }

    handleModal() {
        this.setState({ show: !this.state.show })
    }

    render() {
        console.log(this.props.nameartical)
        return (
            <>
                <button onClick={() => { this.handleModal() }} className="w3-button w3-dark-grey w3-section " type="submit">Update </button>


                <Modal show={this.state.show} onHide={() => this.handleModal()}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.nameartical}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="w3-row w3-padding-32 formcontact">

                            <div className="w3-col m12">
                                <form action="/action_page.php" target="_blank" onSubmit={(e) => { this.createBook(e) }}>
                                    <div className="w3-row-padding" style={{ margin: "0 -16px 8px -16px" }}>
                                        <div className="w3-half">
                                            <label>Update Title of plog </label>
                                            <input defaultValue={this.props.nameartical} onChange={(e) => { this.props.getName(e) }} className="w3-input w3-border" type="text" placeholder="Titel of Blog" required name="titel" />
                                        </div>
                                        <div className="w3-half">
                                            <label>Update Author name </label>
                                            <input defaultValue={this.props.author} onChange={(e) => { this.props.getStatus(e) }} className="w3-input w3-border" type="text" placeholder="Titel of Blog" required name="auther" />
                                           
                                        </div>
                                    </div>
                                    <label>Update your plog </label>
                                    <input defaultValue={this.props.description} onChange={(e) => { this.props.getDescription(e) }} className="w3-input w3-border" type="text" placeholder="Auther" style={{ height: '100px' }} required name="discription" />
                                    <div className="divider"></div> 
                                    <button onClick={(e) => this.props.UpdateData(e, this.props.idx)} className="w3-button w3-dark-grey w3-section " type="submit">Update data </button>
                                    {/* <Button variant="primary" size="sm" type="submit" onClick={(e) => this.props.UpdateData(e, this.props.idx)}>update data </Button> */}
                                </form>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default UpdateBlog

// <Button variant="primary" size="sm" onClick={()=>{this.handleModal()}}>Update</Button>
// <Modal show={this.state.show} onHide={()=>this.handleModal()}>
//     <Modal.Header closeButton>{this.props.nameartical}</Modal.Header>
//     <Modal.Body>

// <Form >
// <Form.Group className="mb-3" >
// <Form.Label>Update your Blog here</Form.Label>
// <Form.Control type="text"  defaultValue={this.props.nameartical} onChange={(e)=>{this.props.getName(e)}} />
// </Form.Group>
// <Form.Group className="mb-3" >
// <Form.Label>Description</Form.Label>
// <Form.Control as="textarea" rows={2} defaultValue={this.props.description} onChange={(e)=>{this.props.getDescription(e)}}/>
// </Form.Group>
// <Form.Group className="mb-3" >
// <Form.Label>aouther</Form.Label>
// <Form.Control type="text" defaultValue={this.props.author} onChange={(e)=>{this.props.getStatus(e)}}/>
// </Form.Group>
// <Button variant="primary" size="sm" type="submit" onClick={(e)=>this.props.UpdateData(e,this.props.idx)}>
// update data
// </Button>
// </Form>
//     </Modal.Body>
// </Modal>