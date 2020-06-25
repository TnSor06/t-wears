import styled from "styled-components";

// Styling Link Component from external Lib
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

// Wrapping imported components
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// If same class is used by two different components
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
