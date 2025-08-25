import { Component } from "react";
import {
  Github_API_User,
  Github_UserName,
  options,
} from "../../public/Common/constants";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        bio: "location",
      },
    };
    console.log("constructor");
  }

  async componentDidMount() {
    const response = await fetch(Github_API_User + Github_UserName, options);
    const json = await response.json();
    // create state
    this.setState({
      userInfo: json,
    });

    // api calls

    console.log("component did mount", json, this.state.userInfo);
  }
  render() {
    console.log("render");
    return (
      <>
        <h1>HI this is component</h1>
        <p>count:{this.state.userInfo.name}</p>
        <p>count:{this.state.bio}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          click
        </button>
      </>
    );
  }
}

export default Profile;
