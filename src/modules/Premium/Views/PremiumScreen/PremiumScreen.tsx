import React from 'react';

import * as Sty from './styles';

export function PremiumScreen() {
  return (
    <Sty.Container>
      <Sty.ContainerImage>
        <Sty.Image source={{ uri: 'https://i.imgur.com/ZKgVcPR.jpg' }} />
      </Sty.ContainerImage>

      <Sty.ContainerInfos>
        <Sty.Title>Spotify premium free for 3 months.</Sty.Title>

        <Sty.Information>
          Rescue that sound from the bottom of the chest. Listen to your
          favorite music without ads.
        </Sty.Information>

        <Sty.ButtonUpdate>
          <Sty.TextUpdate>3 months free</Sty.TextUpdate>
        </Sty.ButtonUpdate>

        <Sty.ButtonIgnore>
          <Sty.TextIgnore>Ignore</Sty.TextIgnore>
        </Sty.ButtonIgnore>
      </Sty.ContainerInfos>
    </Sty.Container>
  );
}
