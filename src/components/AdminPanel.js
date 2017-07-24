import React from 'react';
import { Page, Card, Banner, Button } from '@shopify/polaris';
import { ResourcePicker } from '@shopify/polaris/embedded';

import SelectedProdcutList from '../containers/SelectedProductListContainer';
import SurveyQuestions from '../containers/SurveyQuestionsContainer';
import AnswerQuestions from '../containers/AnswerQuestionsContainer';

const ProductPicker = props => (
  <ResourcePicker
    products
    allowMultiple
    open={props.open}
    onSelection={(resources) => {
      const selectedProducts = resources.products.map((p) => {
        return {
          id: p.id,
          title: p.title,
          options: p.options,
          variantCount: p.variants.length,
          tags: p.tags
        };
      });
      props.onSelect(selectedProducts);
    }}
    onCancel={() => props.onToggle()}
  />
)

export default class AdminPanel extends React.Component {
  render() {
    if (process.env.NODE_ENV === 'development') {
        this.props.onSelect(require('../products.json'));
    }
    return (
      <Page>
        <Banner title="Yay it worked!">
          <p>The embedded polaris app has been successfully loaded</p>
        </Banner>

        <Card sectioned>
          <Button
            onClick={() => {
              this.props.onToggle();
            }}
          >
            Select Prodcuts
          </Button>
        </Card>
      { (process.env.NODE_ENV !== 'development' && this.props.survey_state === 'INITIAL') &&
          <ProductPicker props={this.props} /> }
      { (this.props.selection > 0 && this.props.survey_state === 'INITIAL') &&
          <SelectedProdcutList /> }
      { (this.props.survey_state === 'SURVEY_QUESTION') && <SurveyQuestions/> }
      { (this.props.survey_state === 'ANSWER') && <AnswerQuestions/> }
      </Page>
    );
  }
}
