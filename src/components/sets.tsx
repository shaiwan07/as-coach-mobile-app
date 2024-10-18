import React, { ChangeEvent, useRef, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styled from 'styled-components';

import { AddIcon, DeleteIcon } from '@assets';
import { colors, normHor, normVert } from '@theme';

import { FontSize } from '~types';

type TProps = {
  onChangeText: (e: React.ChangeEvent<any>) => void;
  val?: (number | string)[];
  errors?: string[];
};

export const Sets = ({ onChangeText, val, errors }: TProps) => {
  const [isRemovable, setIsRemovable] = useState(false);
  const value = val ? [...val] : [];

  const handleChange = (text: string, index: number) => {
    const number = +text;
    if (value.length && !Number.isNaN(number)) {
      const arr = [...value];
      arr[index] = number;
      onChangeText({
        target: { value: arr },
      } as ChangeEvent<any>);
    }
  };

  const handleAdd = () => {
    onChangeText({
      target: { value: [...value, value[value.length - 1]] },
    } as ChangeEvent<any>);
  };

  const handleDelete = (index: number) => {
    onChangeText({
      target: { value: value.filter((_, key) => key !== index) },
    } as ChangeEvent<any>);
  };

  const inputsRefs = useRef<TextInput[] | null[]>([]);

  const handlePress = (index: number) => {
    setIsRemovable(false);
    inputsRefs?.current?.[index]?.focus();
  };

  return (
    <View style={styles.row}>
      {value?.map((value, index) => (
        <View key={index} style={styles.cell}>
          {isRemovable && (
            <AbsoluteIcon onPress={() => handleDelete(index)}>
              <DeleteIcon />
            </AbsoluteIcon>
          )}
          <Pressable
            onPress={() => handlePress(index)}
            onLongPress={() => setIsRemovable(true)}
            style={{ marginRight: normHor(8) }}
          >
            <View pointerEvents="none">
              <Input
                keyboardType="number-pad"
                isError={Boolean(errors?.[index])}
                maxLength={3}
                ref={element => (inputsRefs.current[index] = element)}
                value={String(value === 0 ? '' : value)}
                onChangeText={text => handleChange(text, index)}
              />
            </View>
          </Pressable>
        </View>
      ))}
      <Icon onPress={handleAdd}>
        <AddIcon fill={colors.green} />
      </Icon>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normVert(8),
    flexWrap: 'wrap',
    marginTop: normVert(-16),
    marginLeft: normHor(40),
  },
  cell: {
    marginTop: normVert(16),
  },
});

const Input = styled(TextInput)<{ isError: boolean }>`
  font-size: ${FontSize.S16};
  width: ${normHor(53)}px;
  height: ${normVert(48)}px;
  color: ${colors.white};
  background-color: ${colors.black3};
  border-radius: 12px;
  padding-vertical: ${normVert(14)}px;
  padding-horizontal: ${normHor(4)}px;
  text-align: center;
  ${({ isError }) =>
    `border: 1px solid ${isError ? colors.red : colors.transparent};`}
  border-radius: 12px;
  background-color: ${({ isError }) => (isError ? colors.red2 : colors.black3)};
`;

const Icon = styled(TouchableOpacity)`
  width: ${normHor(31)}px;
  height: ${normVert(40)}px;
  justify-content: center;
  align-items: center;
`;

const AbsoluteIcon = styled(TouchableOpacity)`
  width: ${normHor(20)}px;
  height: ${normVert(20)}px;
  position: absolute;
  z-index: 1;
  right: 0px;
  top: -5px;
  background-color: ${colors.red3};
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;
