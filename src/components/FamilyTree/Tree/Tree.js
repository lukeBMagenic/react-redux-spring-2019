import React, { Component } from 'react';
import './Tree.scss';
import Node from '../Node/Node';

class Tree extends Component {

    showTree = () => {
      var json = [{
          "member": {"id": "1", "name": "Garry Bost", "year": "1966", "partnerName": "Susan Bost", "partnerYear": "1968" }, 
          "children": [{
            "member": {"id": "2", "name": "Luke Bost", "year": "1988", "partnerName": "Kristina Thompson Bost", "partnerYear": "1987"},
            "children": [{ "member": {"id": "3", "name": "Baby Bost", "year": "2019"}}]
          },
          {
            "member": {"id": "4", "name": "Andy Bost", "year": "1990"},
          },
          {
            "member": {"id": "5", "name": "Katie Jacobson", "year": "1991", "partnerName": "Andrew Jacobson", "partnerYear": "1991"},
            "children": [{ "member": {"id": "6", "name": "Morgan Jacobson", "year": "2018"}}]
          },
          ] 
        }];

      let nodes = json.map(function(member) {                   
        return (
          <Node node={member} children={member.children} />
        );
      });       
  
      return (
        <div>
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