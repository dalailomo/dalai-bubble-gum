import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../theme/';
import { Button } from './Button';

export const Summary = styled.div`
  font-size: 1.2em;
`;

export const Details = styled.div`
  font-size: 1em;
`;

const ExpanderRoot = styled.div`

`;

const OPEN = 1;
const CLOSED = 0;

export default class Expander extends Component {
  static propTypes = {
    summary: PropTypes.string.isRequired,
    opened: PropTypes.bool,
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = this.props.opened ? { expanderState: OPEN } : { expanderState: CLOSED };
  }

  render() {
    let details = (OPEN === this.state.expanderState)
      ? <Details>{ this.props.children }</Details>
      : undefined;

    let togglerText = (CLOSED === this.state.expanderState)
      ? '+'
      : '-';

    return (
      <ExpanderRoot>
        <Summary>{ this.props.summary } <Button onClick={ this.handleOnClick.bind(this) }>{ togglerText }</Button></Summary>
        { details }
      </ExpanderRoot>
    );
  }

  handleOnClick() {
    if (OPEN === this.state.expanderState) {
      this.setState({ expanderState: CLOSED });
    } else {
      this.setState({ expanderState: OPEN });
    }
  }
}
