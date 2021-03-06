import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { theme } from '../theme/';

const push = keyframes`
    0%      { transform: scale3d(1, 1, 1); }
    50%     { transform: scale3d(.9, .9, .9); }
    100%    { transform: scale3d(1, 1, 1); }
`;

const Button = styled.button`
    border: 0;
    padding: 4pt 8pt;
    border-radius: 4pt;

    font-family: ${theme.font.family.body};
    font-size: ${theme.font.size.default};
    background-color: ${theme.color.neutral};

    ${props => props.info && `background-color: ${theme.color.info}; color: white;`};
    ${props => props.warning && `background-color: ${theme.color.warning}; color: white;`};
    ${props => props.danger && `background-color: ${theme.color.danger}; color: white;`};
    ${props => props.success && `background-color: ${theme.color.success}; color: white;`};

    &:active {
      animation: ${push} .2s ease-in-out;
    }
    &:focus {
      outline: none;
    }
`;

Button.propTypes = {
  info: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
}

export default Button;
