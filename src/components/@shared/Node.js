import React, { Component } from 'react';

import SimpleCard from './SimpleCard';

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
                <SimpleCard name={this.props.node.member.name} year={this.props.node.member.year} />
                {this.props.node.member.partnerName && <SimpleCard name={this.props.node.member.partnerName} year={this.props.node.member.partnerYear} />}
            </a>
          { childnodes ?
            <ul>{childnodes}</ul>
          : null }
        </li>
      );
    }
  }

  export default Node;