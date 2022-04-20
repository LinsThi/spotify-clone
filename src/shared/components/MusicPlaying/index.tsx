import React from 'react';

import { MusicInfoPlaying } from '../MusicInfoPlaying';
import { ProgressBar } from '../ProgressBar';

import * as Sty from './styles';

export function MusicPlaying() {
  return (
    <Sty.Container>
      <MusicInfoPlaying />

      <Sty.ContainerProgressBar>
        <ProgressBar />
      </Sty.ContainerProgressBar>
    </Sty.Container>
  );
}
