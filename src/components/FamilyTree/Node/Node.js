import React, { Component } from 'react';
import './Node.scss';

import NameCard from '../NameCard/NameCard';

class Node extends React.Component {

    render() {      
  
      let childnodes = null;
  
      if(this.props.children) {      
        childnodes = this.props.children.map(function(childnode) {
         return (
           <Node node={childnode} children={childnode.children} />
         );
       });
      }
  
      return (
        <li key={this.props.node.member.id}>      
            <a>
                <NameCard name={this.props.node.member.name} year={this.props.node.member.year} />
                {this.props.node.member.partnerName && <NameCard name={this.props.node.member.partnerName} year={this.props.node.member.partnerYear} />}
            </a>
          { childnodes ?
            <ul>{childnodes}</ul>
          : null }
        </li>
      );
    }
  }

  export default Node;