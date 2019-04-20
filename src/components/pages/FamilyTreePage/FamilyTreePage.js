import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Fab from '@material-ui/core/Fab';

import Page from "../../@shared/Page/Page";
import PageHeader from "../../@shared/PageHeader/PageHeader";
import './FamilyTreePage.scss';
import { actionCreators as treeDataActionCreators } from "../../../store/TreeData";

import Tree from '../../FamilyTree/Tree/Tree';

class FamilyTreePage extends Component {

  constructor(props) {
    super(props);
    this.props.actions.getTreeData();
  }

  render() {
    return (
      <Page>
        <PageHeader />
        <Tree data={this.props.treeData} />
   
      </Page>
    );
  }
}

FamilyTreePage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  treeData: PropTypes.object,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  actions: PropTypes.shape({
    getTreeData: PropTypes.func.isRequired
  })
};

const mapStateToProps = state => ({
  isLoading: state.treeData.isLoading,
  treeData: state.treeData.treeData,
  isError: state.treeData.isError,
  errorMessage: state.treeData.errorMessage
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        getTreeData: treeDataActionCreators.getTreeData
      },
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FamilyTreePage);
