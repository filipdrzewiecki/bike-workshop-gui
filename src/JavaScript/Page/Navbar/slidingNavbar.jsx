import '../../Css/index.css';
import React, {Component} from 'react';
import Navbar from './navbar';


function RenderNavbar(props) {
  const isVisible = props.visible;
  if (!isVisible) {

    return (
      <div className="navbar-follow">
        <Navbar />
      </div>
    );
  }
  return null;
}

export default class SlidingNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  handleScroll = () => {
    // eslint-disable-next-line
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = 0 > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    console.log(this.state);
    return (
      <RenderNavbar visible={this.state.visible} />
    );
  }
}

