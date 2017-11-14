import React, {Component} from 'react';
import {connect} from 'react-redux';

function Message (props) {
  return (
    <div>
      {props.show && <p>Hello World</p>}
    </div>
  );
}

class Button extends Component {
  state = {
    show: false
  };

  render () {
    return (
      <div>
        <button onClick={this.props.handleClick}>Apasa</button>
        <Message show={this.state.show} />
        {this.props.tab}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.tab,
    show: state.show
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch({type: 'click', show: true})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);