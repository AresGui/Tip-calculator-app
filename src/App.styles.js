import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
        display: flex;
        align-items: center;
        justify-content: center;
		    background-color: hsl(185, 41%, 84%);
        height: 100vh; 
        margin: 0;
        font-family: "Space Mono", monospace;
        font-size: small;
	}
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const MainContainer = styled.div`
  background-color: hsl(0, 0%, 100%);
  height: auto;
  width: auto;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Box = styled.div`
  margin-bottom: 20px;

  > p {
    margin: 5px;
  }
`;

export const DollarInput = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 2px solid hsl(172, 67%, 45%);
  padding: 5px;
  text-align: right;
  box-sizing: border-box;
  background: url("../src/assets/images/icon-dollar.svg") no-repeat left center;
  background-position: 10px center;
  background-size: 10px;
`;

export const PeopleInputMessages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AlertMessage = styled.p`
  color: ${({ visible }) => (visible ? "red" : "transparent")};
`;

export const ModifiedDollarInput = styled(DollarInput)`
  background: url("../src/assets/images/icon-person.svg") no-repeat left center;
  background-position: 10px center;
  border-color: ${({ visible }) => (visible ? "red" : "hsl(172, 67%, 45%)")};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > * {
    width: calc(33.33% - 10px);
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 5px;
    border-radius: 5px;
    border: 2px solid hsl(183, 100%, 15%);
    letter-spacing: 1px;
    font-weight: bold;

    @media (max-width: 375px) {
      width: calc(50% - 10px);
      box-sizing: border-box;
    }
  }

  > button {
    background-color: hsl(183, 100%, 15%);
    color: white;
    border: 2 px solid hsl(183, 100%, 15%);

    &:hover {
      background-color: hsl(172, 67%, 45%);
      border: 2px solid hsl(172, 67%, 45%);
      color: hsl(186, 14%, 43%);
    }
  }

  > input {
    border: 2px solid hsl(172, 67%, 45%);
  }
`;

export const CalculationContainer = styled.div`
  flex: 1;
  background-color: hsl(183, 100%, 15%);
  margin: 20px;
  padding: 15px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const TipAmountBox = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > p {
    color: white;
  }

  > h1 {
    color: hsl(172, 67%, 45%);
  }
`;

export const PersonText = styled.span`
  color: hsl(172, 67%, 45%);
`;

export const ResetButton = styled.button`
  box-sizing: border-box;
  width: 90%;
  margin: 15px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  color: black;
  background-color: hsl(172, 67%, 45%);
`;
