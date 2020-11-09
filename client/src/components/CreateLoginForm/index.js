import React, { useRef } from "react";
import API from "../../utils/API";

export default class loginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      fireRedirect: false
    }
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ fireRedirect: true })
  }
  render () {
    const { fireRedirect, value: query } = this.state
    return (
      <Row>
        <Col span={14} offset={5}>
          <form onSubmit={this.handleSubmit}>
            <Input className='input' placeholder='Email' onChange={this.handleChange} />
            <Input className='input' placeholder='Password' onChange={this.handleChange} />
            <Button type="primary" icon="search" onClick={this.handleSubmit}>Sign In</Button>
          </form>
        </Col>
        {
        fireRedirect && query &&
        <Redirect to={`/search/${query}`} push />
        }
      </Row>
    )
  }
}

import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";

function CreateLoginForm() {
  constructor {
        this.state = {
          value: '',
          fireRedirect: false
        }
      }
      handleChange = (e) => {
        this.setState({ value: e.target.value })
      }
      handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ fireRedirect: true })
      }
  };

  return (
    <div>
      <h1>PicAFlic Sign In</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={titleRef} placeholder="Email" />
        <input className="form-control mb-5" ref={authorRef} placeholder="Password" />
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );


export default CreateLoginForm;