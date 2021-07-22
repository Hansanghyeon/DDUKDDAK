import React, { useState } from 'react';

import * as UI from './style';

type TypeToggleMode = {
  getChecked?: (e: boolean) => void;
  onLabel?: string;
  offLabel?: string;
}

const ToggleMode: React.FC<TypeToggleMode> = ({ getChecked, offLabel = 'off', onLabel = 'on'}: TypeToggleMode) => {
  const [checked, setChecked] = useState(false);
  
  const handle = () => {
    if (!!getChecked) {
      getChecked(!checked);
    }
    setChecked(!checked);
  }

  return (
    <UI.Wrap>
      <UI.Input type="checkbox" name="checkbox1" id="checkbox1" checked={checked} onChange={handle}/>
      <UI.Label htmlFor="checkbox1">
        <UI.LabelWrap>
          <UI.LabelItem>{offLabel}</UI.LabelItem>
          <UI.LabelItem>{onLabel}</UI.LabelItem>
        </UI.LabelWrap>
      </UI.Label>
    </UI.Wrap>
  )
}

export default ToggleMode
