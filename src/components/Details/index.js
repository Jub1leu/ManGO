import React, { Component } from "react";

import {
  Container,
  TypeTitle,
  TypeDescription,
  TypeImage,
  RequestButton,
  RequestButtonText
} from "./styles";

import bus from "../../assets/bus.png";

export default class Details extends Component {
  render() {
    return (
      <Container>
        <TypeTitle>Popular</TypeTitle>
        <TypeDescription>Viagens baratas para o dia a dia</TypeDescription>

        <TypeImage source={bus} />
        <TypeTitle>BUSÃO</TypeTitle>
        <TypeDescription>R$3,60</TypeDescription>

        <RequestButton onPress={() => {}}>
          <RequestButtonText>SOLICITAR ONIBUS</RequestButtonText>
        </RequestButton>
      </Container>
    );
  }
}
