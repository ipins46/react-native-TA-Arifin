import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Button, Box, Text } from "../../components";
import AddCard from "./AddCard";
import Card, { CardModel, CardType } from "./Card";
import { CARD_HEIGHT } from "./CardLayout";

const cards: CardModel[] = [
  { id: 0, type: CardType.VISA, last4Digits: "9874", expiration: "05/24" },
  { id: 1, type: CardType.MASTERCARD, last4Digits: "6514", expiration: "05/24" },
];

interface CheckoutProps {
  minHeight: number;
}

interface LineItemProps {
  label: string;
  value: number;
}

const LineItem = ({ label, value }: LineItemProps) => {
  return (
    <Box flexDirection="row" paddingVertical="s">
      <Box flex={1}>
        <Text color="background" variant="title3">
          {label}
        </Text>
      </Box>
      <Box>
        <Text color="bawah51" variant="title3">
          Rp.{value}
        </Text>
      </Box>
    </Box>
  );
};

const Checkout = ({ minHeight }: CheckoutProps) => {
  const [selectedCard, setSelectedCard] = useState(cards[0].id);

  return (
    <Box flex={1} backgroundColor="bawah5" style={{ paddingTop: minHeight }}>
      <Box flex={1} padding="m">
        <Box height={CARD_HEIGHT}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <AddCard />
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                selected={selectedCard === card.id}
                onSelect={() => setSelectedCard(card.id)}
              />
            ))}
          </ScrollView>
        </Box>
        <Box marginTop="l">
          <Text color="background" variant="title3">
            Delivery Address
          </Text>
          <Box flexDirection="row" opacity={0.5} paddingVertical="m">
            <Box flex={1}>
              <Text color="background">1545 Blvd. Cote-Vertu Ouest</Text>
              <Text color="background">Montreal, Quebec</Text>
            </Box>
            <Box justifyContent="center" alignItems="center">
              <Text color="background">Change</Text>
            </Box>
          </Box>
          <LineItem label="Total Items (3)" value={116.997} />
          <LineItem label="Standard Delivery" value={3.002} />
          <LineItem label="Total Payment" value={119.999} />
        </Box>
        <Box
          paddingVertical="m"
          flex={1}
          alignItems="center"
          justifyContent="flex-end"
        >
          <Button
            label="Checkout (3) = Rp.119.999"
            variant="tombol"
            onPress={() => true}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;