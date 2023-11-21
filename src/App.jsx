import {
  GlobalStyle,
  MainContainer,
  LogoContainer,
  InputContainer,
  DollarInput,
  CalculationContainer,
  ButtonContainer,
  ModifiedDollarInput,
  Box,
  TipAmountBox,
  PersonText,
  ResetButton,
  PeopleInputMessages,
  AlertMessage,
} from "./App.styles";
import logo from "../src/assets/images/logo.svg";
import { useState, useEffect } from "react";

const App = () => {
  //Valores introducidos
  const [bill, setBill] = useState(0);
  const [numberPeople, setNumberPeople] = useState(0);
  const [selectedPercentage, setSelectedPercentage] = useState(0);

  //Resultados de cálculo
  const [tipPerson, setTipPerson] = useState(0);
  const [totalCostPerson, setTotalCostPerson] = useState(0);

  const percentage = (val) => {
    setSelectedPercentage(val);
  };

  useEffect(() => {
    if (bill && numberPeople && selectedPercentage) {
      const tipAmount = (bill * selectedPercentage) / 100 / numberPeople;
      setTipPerson(Number(tipAmount.toFixed(2)));

      const toPayPerson = bill / numberPeople + tipAmount;
      setTotalCostPerson(Number(toPayPerson.toFixed(2)));
    }
  }, [bill, numberPeople, selectedPercentage]);

  const resetToZero = () => {
    //Opción A: dar valor 0 a cada estado individualmente
    /* setBill(0);
    setNumberPeople(0);
    setSelectedPercentage(0);
    setTipPerson(0);
    setTotalCostPerson(0); */

    //Opción B: refrescar la página
    window.location.reload();
  };

  return (
    <>
      <GlobalStyle />
      <LogoContainer>
        <img src={logo}></img>
      </LogoContainer>
      <MainContainer>
        <InputContainer>
          <Box>
            <p>Bill</p>
            <DollarInput
              onChange={(e) => setBill(e.target.value)}
              type="number"
            />
          </Box>
          <Box>
            <p>Select tip %</p>
            <ButtonContainer>
              <button onClick={() => percentage(5)}>5%</button>
              <button onClick={() => percentage(10)}>10%</button>
              <button onClick={() => percentage(15)}>15%</button>
              <button onClick={() => percentage(25)}>25%</button>
              <button onClick={() => percentage(50)}>50%</button>
              <input
                type="number"
                placeholder="%"
                onChange={(e) => setSelectedPercentage(e.target.value)}
              />
            </ButtonContainer>
          </Box>
          <Box>
            <PeopleInputMessages>
              <p>Number of people</p>
              <AlertMessage visible={!numberPeople || numberPeople == 0}>
                Cannot be zero
              </AlertMessage>
            </PeopleInputMessages>
            <ModifiedDollarInput
              onChange={(e) => setNumberPeople(e.target.value)}
              type="number"
              visible={!numberPeople || numberPeople == 0}
            />
          </Box>
        </InputContainer>
        <CalculationContainer>
          <TipAmountBox>
            <p>
              Tip amount
              <br />
              <PersonText>/ person</PersonText>
            </p>
            <h1>{tipPerson}</h1>
          </TipAmountBox>
          <TipAmountBox>
            <p>
              Total
              <br />
              <PersonText>/ person</PersonText>
            </p>
            <h1>{totalCostPerson}</h1>
          </TipAmountBox>
          <ResetButton onClick={resetToZero}>RESET</ResetButton>
        </CalculationContainer>
      </MainContainer>
    </>
  );
};

export default App;
