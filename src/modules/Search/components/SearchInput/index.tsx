import { AntDesign, Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components/native';

import * as Sty from './styles';

export function SearchInput() {
  const { Colors } = useContext(ThemeContext);

  const [openInput, setOpenInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <Sty.Container>
      <StatusBar backgroundColor={Colors.BLACK_2} style="light" />
      {openInput ? (
        <Sty.ContainerInput>
          <Sty.Button onPress={() => setOpenInput(prev => !prev)}>
            <AntDesign
              name="arrowleft"
              size={23}
              color={Colors.WHITE}
              style={{ paddingRight: 10 }}
            />
          </Sty.Button>

          <Sty.Input
            placeholder="Search results"
            placeholderTextColor={Colors.LIGHT_GRAY_2}
            value={searchValue}
            autoFocus
            onChangeText={setSearchValue}
            onEndEditing={() => {
              if (searchValue.length === 0) {
                setOpenInput(prev => !prev);
              } else {
                console.log(searchValue);
              }
            }}
          />

          <Sty.Button>
            <Feather name="camera" size={25} color={Colors.WHITE} />
          </Sty.Button>
        </Sty.ContainerInput>
      ) : (
        <Sty.ContainerButton onPress={() => setOpenInput(prev => !prev)}>
          <Sty.TextInput style={{ color: Colors.WHITE }}>Search</Sty.TextInput>
          <Sty.Button>
            <Feather name="camera" size={25} color={Colors.WHITE} />
          </Sty.Button>
        </Sty.ContainerButton>
      )}
    </Sty.Container>
  );
}
