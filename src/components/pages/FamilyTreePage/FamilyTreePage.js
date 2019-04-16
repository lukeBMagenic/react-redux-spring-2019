import React, { Component } from 'react';
import Page from "../../@shared/Page/Page";
import PageHeader from "../../@shared/PageHeader/PageHeader";
import './FamilyTreePage.scss';
import Tree from '../../FamilyTree/Tree/Tree';

class FamilyTreePage extends Component {

  render() {
    return (
      <Page>
        <PageHeader />
        <Tree />
      </Page>
    );
  }
}

export default FamilyTreePage;
