import React from 'react';

import * as Sty from './styles';

export function ProgressBar() {
  return (
    <Sty.Container>
      <Sty.ContainerBar />
      <Sty.ContainerProgress barPercentage={45} />
    </Sty.Container>
  );
}
