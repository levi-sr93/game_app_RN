import React, { useState, useCallback, useRef } from "react";
import { Alert, StatusBar, View } from "react-native";
import Text from "../../components/Text";

import { categoryList } from "../../services/mock/categories";
import { games } from "../../services/mock/gameData";
import {
  Container,
  Header,
  Avatar,
  Categories,
  Category,
  CategoryName,
  CategoryDot,
  Games,
  Game,
  GameCover,
  GameInfo,
  GameImage,
  GameTitle,
} from "./styles";

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const gamesRef = useRef(null);

  const handleChangeCategory = useCallback((category) => {
    gamesRef.current.scrollToOffset({ x: 0, y: 0 });
    setSelectedCategory(category);
  }, []);

  const GameItem = useCallback((game) => {
    return (
      <Game>
        <GameCover source={game.cover} />
        <GameInfo backgroundColor={game.backgroundColor}>
          <GameImage source={game.cover} />
          <GameTitle>
            <Text medium bold>
              {game.title}
            </Text>
            <Text light small>
              {game.teaser}
            </Text>
          </GameTitle>
        </GameInfo>
      </Game>
    );
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <Header>
        <Text light>
          Hello,{"    "}
          <Text title heavy>
            Levi
          </Text>
          {"\n"}
          {"\n"}
          <Text large bold>
            Best Games for Today
          </Text>
        </Text>

        <Avatar source={require("../../../assets/images/avatar.jpeg")} />
      </Header>

      <Categories horizontal showHorizontalScrollIndicator={false}>
        {categoryList.map((category, index) => {
          return (
            <Category
              activeOpacity={0.9}
              key={index}
              onPress={() => handleChangeCategory(category)}
            >
              <CategoryName
                selected={selectedCategory === category ? true : false}
              >
                {category}
              </CategoryName>
              {selectedCategory === category && <CategoryDot />}
            </Category>
          );
        })}
      </Categories>
      <Games
        data={games.filter((game) => {
          return (
            game.category.includes(selectedCategory) ||
            selectedCategory === "All"
          );
        })}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => GameItem(item)}
        ref={gamesRef}
      />
    </Container>
  );
};

export default HomeScreen;
