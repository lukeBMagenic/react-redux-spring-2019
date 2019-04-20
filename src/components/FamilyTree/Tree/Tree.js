import React, { Component } from 'react';
import './Tree.scss';
import Node from '../Node/Node';

class Tree extends Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  showTree = () => {
    if(this.props.data.length === 0)
    {
      return;
    }

    let nodes = this.props.data.map(function(member) {                   
      return (
        <Node node={member} children={member.children} />
      );
    });       

    return (
      <div>
        {/* <p>test: {this.props.data.member.name}</p> */}
        <ul className="org">
          {nodes}
        </ul>        
      </div>
    );

  }

  render() {
      return (
        <div className="tree">
          {this.showTree()}
        </div>
      );
  }
}

export default Tree;