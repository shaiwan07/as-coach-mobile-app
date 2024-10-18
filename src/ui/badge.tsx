import React from 'react';
import { View } from 'react-native';

import styled from 'styled-components';

import { colors, normHor, normVert } from '@theme';

import { FontSize, FontWeight } from '~types';

import { Text } from './text';

export enum BadgeStatuses {
  GOOD = 'good',
  WARNING = 'warning',
  EXPIRED = 'expired',
  PLAN_NOT_EXISTS = 'plan_not_exists',
}

type TProps = {
  text: string;
  status: BadgeStatuses;
};

export const Badge = ({ text, status }: TProps) => (
  <Background status={status}>
    <Text
      style={{ textTransform: 'uppercase' }}
      fontSize={FontSize.S10}
      color={switchFontColor(status)}
      weight={FontWeight.Bold}
    >
      {text}
    </Text>
  </Background>
);

const Background = styled(View)<{ status: BadgeStatuses }>`
  background-color: ${({ status }) => switchBackgroundColor(status)};
  align-self: flex-start;
  padding: ${normVert(2)}px ${normHor(6)}px;
  border-radius: 6px;
`;

const switchFontColor = (status: BadgeStatuses) => {
  switch (status) {
    case BadgeStatuses.GOOD:
      return colors.green;
    case BadgeStatuses.WARNING:
      return colors.orange;
    case BadgeStatuses.EXPIRED:
      return colors.red;
    case BadgeStatuses.PLAN_NOT_EXISTS:
      return colors.grey4;
    default:
      return colors.grey4;
  }
};

const switchBackgroundColor = (status: BadgeStatuses) => {
  switch (status) {
    case BadgeStatuses.GOOD:
      return colors.green3;
    case BadgeStatuses.WARNING:
      return colors.orange2;
    case BadgeStatuses.EXPIRED:
      return colors.red2;
    case BadgeStatuses.PLAN_NOT_EXISTS:
      return colors.grey5;
    default:
      return colors.grey5;
  }
};
