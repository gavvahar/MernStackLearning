import React from "react";

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.age,
      name: props.user.userName,
    };
  }
  makeMeOlder() {
    this.setState({
      age: this.state.age + 1,
    });
  }
  render() {
    console.log(this.state);
    return (
      <div style={{ margin: "10px" }}>
        <div className="row">
          <div className="col-md-6 ">
            Welcome to React World,
            <div>{`my name is ${this.state.name}`}</div>
            <div>{`my age is ${this.state.age}`}</div>
          </div>
          <div className="col-md-6">
            My Hobbies are
            <ul>
              {this.props.user.hobbies.map((hobby, i) => (
                <li key={i}>{`${i + 1} My hobby is ${hobby}`}</li>
              ))}
            </ul>
          </div>
          <div className="row">
            <div className="col-md-6">
              <button
                onClick={() => this.makeMeOlder()}
                className="btn btn-primary"
              >
                Make me Older
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserComponent;
