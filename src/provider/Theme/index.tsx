import {ThemeProvider as TP} from 'styled-components';
import grid from './grid'

const thtme = {
  ...grid
}

const ThemeProvider: React.FC = ({children}) => {
  return <TP theme={thtme}>{children}</TP>
}

export default ThemeProvider;