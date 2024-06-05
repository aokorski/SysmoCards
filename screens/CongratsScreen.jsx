import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const cardBack = require('../images/memory/rewers.png');
const allCardImages = [
  require('../images/memory/easy/bug1.png'),
  require('../images/memory/easy/coding.png'),
  require('../images/memory/easy/cpu.png'),
  require('../images/memory/easy/cursor.png'),
  require('../images/memory/easy/email3.png'),
  require('../images/memory/easy/joystick.png'),
  require('../images/memory/easy/laptop.png'),
  require('../images/memory/easy/modem3.png'),
  require('../images/memory/easy/mouse.png'),
  require('../images/memory/easy/robot-assistant.png'),
  require('../images/memory/easy/usb-drive.png'),
  require('../images/memory/easy/webpage.png'),
  require('../images/memory/easy/wifi-signal.png'),
];

const pickRandomImages = (numImages, totalImages) => {
  let indices = new Set();
  while (indices.size < numImages) {
    const randomIndex = Math.floor(Math.random() * totalImages);
    indices.add(randomIndex);
  }
  return Array.from(indices);
};

const generateCards = (pairs) => {
  let cards = [];
  const pickedIndices = pickRandomImages(pairs, allCardImages.length);
  for (let i = 0; i < pairs; i++) {
    const card1 = { id: 2 * i, content: pickedIndices[i], isMatched: false, isVisible: false };
    const card2 = { id: 2 * i + 1, content: pickedIndices[i], isMatched: false, isVisible: false };
    cards.push(card1, card2);
  }
  cards.sort(() => Math.random() - 0.5);
  return cards;
};

const GameScreen = ({ navigation }) => {
  const [cards, setCards] = useState(generateCards(6));
  const [selectedCards, setSelectedCards] = useState([]);
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds > 0 ? seconds - 1 : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      navigation.navigate('LoseScreen');
    }
    const allMatched = cards.every(card => card.isMatched);
    if (allMatched) {
      navigation.navigate('');
    }
  }, [seconds, cards]);

  const onCardPress = (card) => {
    if (card.isMatched || selectedCards.length === 2 || selectedCards.includes(card)) return;

    const newCards = cards.map(c =>
      c.id === card.id ? { ...c, isVisible: true } : c
    );
    setCards(newCards);
    setSelectedCards(current => [...current, card]);

    if (selectedCards.length === 1) {
      const match = selectedCards[0].content === card.content;
      if (match) {
        setCards(cards.map(c =>
          c.content === card.content ? { ...c, isMatched: true } : c
        ));
        setSelectedCards([]);
      } else {
        setTimeout(() => {
          setCards(cards.map(c =>
            !c.isMatched ? { ...c, isVisible: false } : c
          ));
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>00:{seconds < 10 ? `0${seconds}` : seconds}</Text>
      <View style={styles.cardsContainer}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={[styles.card, card.isMatched ? styles.matched : card.isVisible ? styles.visible : styles.hidden]}
            onPress={() => onCardPress(card)}
          >
            {card.isVisible || card.isMatched ? (
              <Image source={allCardImages[card.content]} style={styles.cardImage} resizeMode="contain" />
            ) : (
              <Image source={cardBack} style={styles.cardImage} resizeMode="contain" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500',
  },
  timer: {
    fontSize: 20,
    marginBottom: 10,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
  },
  card: {
    width: 64,
    height: 105,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#FFF',
  },
  cardImage: {
    width: 50,
    height: 75, 
  },
  hidden: {
    borderColor: '#000',
  },
  visible: {
    borderColor: '#FF0000',
  },
  matched: {
    borderColor: '#00FF00',
  }
});

export default GameScreen;
