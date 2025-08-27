import { Component } from "react";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import {
  Github_Link,
  Email_Link,
  Linkedin_Link,
  Twitter_Link,
} from "../../public/Common/constants";

class SocialProfileClass extends Component {
  constructor(props) {
    super(props);
    // console.log("SocialProfileClass child constructor");
  }

  async componentDidMount() {
    // console.log("SocialProfileClass child componentDidMount");
  }

  componentDidUpdate() {
    // console.log("SocialProfileClass child componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("SocialProfileClass child componentWillUnmount");
  }

  render() {
    // console.log("SocialProfileClass child render");
    return (
      <div className="social-media-container">
        <a
          href={Linkedin_Link}
          title="Follow me on Linkedin"
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <SiLinkedin title="Follow me on Linkedin" />
          </i>
        </a>

        <a
          href={Email_Link}
          title="Any Query! Mail me"
          className="icon-button email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <SiGmail title="Any Query! Mail me" />
          </i>
        </a>
      </div>
    );
  }
}

export default SocialProfileClass;
