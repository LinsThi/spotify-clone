import { Feather, AntDesign, Octicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components/native';

import { FlatListPlaylists } from '../../components/FlatListPlaylists';

import * as Sty from './styles';

export function Header() {
  const { Colors } = useContext(ThemeContext);
  const [colorPeriode, setColorPeriode] = useState('');
  const [currentPeriode, setCurrentPeriode] = useState(() => {
    const periode = new Date();
    const hoursDay = periode.getHours();

    if (hoursDay > 5 && hoursDay <= 12) {
      setColorPeriode(Colors.DARK_PINK);
      return 'Bom dia';
    }
    if (hoursDay > 12 && hoursDay <= 18) {
      setColorPeriode(Colors.DARK_BLUE);
      return 'Boa tarde';
    }
    setColorPeriode(Colors.LIGHT_BLUE);
    return 'Boa noite';
  });

  return (
    <LinearGradient
      colors={[colorPeriode, Colors.BLACK]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.3, y: 1 }}
      locations={[0.1, 0.96]}
    >
      <Sty.Container>
        <Sty.TextPeriode style={{ color: '#fff' }}>
          {currentPeriode}
        </Sty.TextPeriode>

        <Sty.ContainerButtons>
          <Sty.Button>
            <Feather name="bell" size={33} color="#fff" />
            <Sty.NotificationCircle />
          </Sty.Button>

          <Sty.ButtonCenter>
            <AntDesign name="clockcircleo" size={33} color="#fff" />
          </Sty.ButtonCenter>

          <Sty.Button>
            <Octicons name="gear" size={33} color="#fff" />
          </Sty.Button>
        </Sty.ContainerButtons>
      </Sty.Container>

      <Sty.ContainerPlaylists>
        <FlatListPlaylists />
      </Sty.ContainerPlaylists>
    </LinearGradient>
  );
}
