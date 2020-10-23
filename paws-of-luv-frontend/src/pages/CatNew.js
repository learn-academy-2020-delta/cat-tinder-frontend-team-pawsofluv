import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Input,
  Label
} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: ""
      },
      success: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.createNewCat(this.state.form)
    this.setState({ success: true })
  }

  render() {
    return (
      <>
        <div id="new-body">
          <h3 className="title">Find A Play Date!</h3>
          <h4 className="title">Enter your animal's information below</h4>
          <br />
          <div className="whatsInTheBox">
            <Form className="form">
              <div class="row justify-content-center align-items-center">
                <FormGroup>
                  <Label style={{ fontSize: "30px", marginTop: "25px" }} for="photo">Upload A Cute Photo</Label>
                  <Input style={{ fontSize: "18px", marginTop: "25px" }} type="file" name="photo" />
                </FormGroup>
              </div>
              <FormGroup className="fillMeOut">
                <Label style={{ fontSize: "25px", marginTop: "10px" }} for="name">Cat's Name</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.form.name}
                />
              </FormGroup>
              <FormGroup className="fillMeOut">
                <Label style={{ fontSize: "25px", marginTop: "10px" }} for="age">Cat's Age</Label>
                <Input
                  type="number"
                  name="age"
                  onChange={this.handleChange}
                  value={this.state.form.age}
                />
              </FormGroup>
              <FormGroup className="fillMeOut">
                <Label style={{ fontSize: "25px", marginTop: "10px" }} for="enjoys">What does your cat enjoy?</Label>
                <Input
                  type="text"
                  name="enjoys"
                  onChange={this.handleChange}
                  value={this.state.form.enjoys}
                />
              </FormGroup>

              <Button name="submit" onClick={this.handleSubmit} style={{ backgroundColor: "#D8E2DC", border: "transparent", fontSize: "25px", color: "black", marginTop: "25px" }}>
                Create New Cat
              </Button>
            </Form>
            {this.state.success && <Redirect to='/catindex' />}
          </div>
        </div>
      </>
    )
  }
}

export default CatNew
