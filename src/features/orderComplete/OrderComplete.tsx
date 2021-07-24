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
          znaliśmy go od początku.
        </Title>
        <Divider />
        <Title size="large">
          Czas dostawy zależy od wielu czynników, ale spokojnie - już
          zaczęliśmy zamawiać części do Twojego komputera z Aliexpress.
        </Title>
        <Divider />
        <Title size="large">
          Jeśli masz jakieś pytania, po prostu wpadnij do siedziby naszej firmy.
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
