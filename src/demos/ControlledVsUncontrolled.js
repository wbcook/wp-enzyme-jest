import React from 'react';

export default class ControlledVsUncontrolled extends React.Component {
  constructor() {
    super();

    this.formField = React.createRef();
    this.state = {
      'ctf-demo': '',
    };

    this.label = 'Class method';
    this.otherHandleClick = this.otherHandleClick.bind(this);
  }

  otherHandleClick(event) {
    console.log(`Clicked on the button ${this.label}`);
  }

  handleClick = event => {
    console.log(`Form field value: ${this.formField.current.value}`);
    console.log(this.formField);
  };

  updateState = event => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({
      [key]: value,
    });
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <label>Uncontrolled Text Field</label>:
          <input type="text" name="utf-demo" className="form-control" ref={this.formField} />
        </div>

        <div className="form-group">
          <label>Controlled Text Field</label>:
          <input
            type="text"
            name="ctf-demo"
            className="form-control"
            onChange={this.updateState}
            value={this.state['ctf-demo']}
          />
        </div>

        <div>
          <button onClick={this.handleClick} className="btn btn-primary" type="button">
            Click Me
          </button>
        </div>
      </form>
    );
  }
}
