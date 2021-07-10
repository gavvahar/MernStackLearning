import React from "react";
import styled from "styled-components";

class App extends React.Component {
  render() {
    const DivElement = styled.div`
      background: grey;
      font-size: 10px;
    `;

    const DivElement2 = styled(DivElement)`
      font-size: ${(props) => props.fontSize};
    `;

    const Div = styled.div`
      margin: 20px;
      border: 5px dashed red;
      &:hover {
        background-color: ${(props) => props.hoverColor};
      }
    `;
    const Title = styled.h1`
      font-family: Arial;
      font-size: 35px;
      text-align: center;
      color: palevioletred;
    `;
    const Paragraph = styled.p`
      font-size: 25px;
      text-align: center;
      background-color: lightgreen;
    `;
    return (
      <div>
        <Title>Mod Shop</Title>
        <p></p>
        <Div hoverColor="Blue">
          <Paragraph>Matte black wide body air suspension Nissan GTR R35</Paragraph>
        </Div>
        <DivElement2 fontSize="20px">Hello styled components</DivElement2>
      </div>
    );
  }
}
export default App;
