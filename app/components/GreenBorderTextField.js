import styled from 'styled-components';
import TextField from '@mui/material/TextField';

const GreenBorderTextField = styled(TextField)`
  label.Mui-focused {
    color: white;
  }
  
  .MuiOutlinedInput-root {
    border-color: red; /* Set border color to red by default */
    
    &.Mui-focused fieldset {
      border-color: red;
    }
    
    .MuiInputBase-input {
      background-color: transparent;
    }
  }
`;

export default GreenBorderTextField;
