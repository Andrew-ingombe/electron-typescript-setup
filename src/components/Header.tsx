import { Typography } from "@mui/material";
import styled from "styled-components";

const StyledHeaderText = styled(Typography)`
  && {
    color: red;
    font-size: 50px;
  }
`;

export const Header = () => {
  return <StyledHeaderText>Header</StyledHeaderText>;
};
