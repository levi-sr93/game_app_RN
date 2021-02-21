import React from "react";
import { StatusBar } from "react-native";
import { Entypo } from "@expo/vector-icons";

import Text from "../../components/Text";
import { games } from "../../services/mock/gameData";

import {
  Container,
  Header,
  SearchContainer,
  Search,
  SearchIcon,
  SectionContainer,
  PopularGames,
  PopularGameContainer,
  PopularGame,
  LiveGamesTitle,
  LiveGames,
  LiveGameContainer,
  LiveGame,
  LiveGameOver,
  LiveGameTitle,
  LiveGameBadge,
} from "./styles";

const LiveScreen = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <Header>
        <Text large bold>
          Streaming
        </Text>

        <SearchContainer>
          <Search
            placeholder="Search livestream or games..."
            placeholderTextColor="#838383"
          />
          <SearchIcon>
            <Entypo name="magnifying-glass" size={23} color="#838383" />
          </SearchIcon>
        </SearchContainer>
      </Header>

      <SectionContainer>
        <Text medium bold>
          Popular Games
        </Text>

        <PopularGames horizontal={true} showHorizontalScrollIndicator={false}>
          {games.map((game, index) => (
            <PopularGameContainer key={index}>
              <PopularGame source={game.cover} />
            </PopularGameContainer>
          ))}
        </PopularGames>
      </SectionContainer>

      <SectionContainer>
        <LiveGamesTitle>
          <Text medium bold>
            Live Now
          </Text>
          <Text bold color="#819ee5">
            View All
          </Text>
        </LiveGamesTitle>
      </SectionContainer>

      <LiveGames
        data={games}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <LiveGameContainer>
            <LiveGame source={item.cover} />
            <LiveGameOver>
              <LiveGameTitle backgroundColor={item.backgroundColor}>
                <Text>{item.title}</Text>
              </LiveGameTitle>
              <LiveGameBadge>
                <Text small bold>
                  Live
                </Text>
              </LiveGameBadge>
            </LiveGameOver>
          </LiveGameContainer>
        )}
      />
    </Container>
  );
};

export default LiveScreen;
