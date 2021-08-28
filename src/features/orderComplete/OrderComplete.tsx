import { Button, Divider, Row } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import PresentationLayout from "../../common/layouts/presentationLayout/PresentationLayout";
import Title from "../../common/text/Title";
import { routes } from "../../router/routes";
import { OrderCompleteDetailsContainer } from "./styles";

const OrderComplete: React.FC = () => {
  const history = useHistory();

  const onConfirm = () => {
    history.push(routes.list);
  };

  return (
    <PresentationLayout>
      <Title size="xxl">Dziękujemy</Title>
      <OrderCompleteDetailsContainer>
        <Title size="large">
          Pewnie zauważyłeś, że nie pytaliśmy o Twój adres. Nie przejmuj się,
          komputer zostanie po prostu wysłany na losowy adres.
        </Title>
        <Divider />
        <Title size="large">
          Czas dostawy zależy od wielu czynników - twoje zamówienie dotrze do
          Ciebie w maksymalnie 15 dni roboczych.
        </Title>
        <Divider />
        <Title size="large">
          Jeśli masz jakieś pytania, wpadnij do siedziby naszej firmy.
        </Title>
        <Divider />
        <Row align="middle" justify="center">
          <Button type="primary" size="large" onClick={onConfirm}>
            Przeglądaj dalej
          </Button>
        </Row>
      </OrderCompleteDetailsContainer>
    </PresentationLayout>
  );
};

export default OrderComplete;
