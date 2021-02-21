import React from "react";
import { StatusBar } from "react-native";
import { Entypo } from "@expo/vector-icons";

import Text from "../../components/Text";
import { games } from "../../services/mock/gameData";

import {
  Container,
  AvatarContainer,
  Avatar,
  Badge,
  Stats,
  Stat,
  Games,
  Game,
  GameImage,
  Info,
  Account,
  Settings,
  Logout,
} from "./styles";

const ProfileScreen = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <AvatarContainer>
        <Avatar source={require("../../../assets/images/avatar.jpeg")} />
        <Text large bold>
          Levi Santos
        </Text>
      </AvatarContainer>

      <Badge>
        <Text small heavy>
          Pro Player
        </Text>
      </Badge>

      <Stats>
        <Stat>
          <Text large heavy>
            300 <Text color="#9a9a9a">Games</Text>
          </Text>
        </Stat>
        <Stat>
          <Text large heavy>
            10 <Text color="#9a9a9a">Purchases</Text>
          </Text>
        </Stat>
      </Stats>

      <Text center large>
        Your Games
      </Text>

      <Games
        data={games}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Game>
            <GameImage source={item.cover} />
            <Info>
              <Text bold>{item.title}</Text>
              <Text small color="#9a9a9a">
                {Math.floor(Math.random() * 1000) + 1} Sales
              </Text>
            </Info>

            <Text color="#eec747">${Math.floor(Math.random() * 50) + 1}</Text>
          </Game>
        )}
      />

      <Account>
        <Settings>
          <Entypo name="cog" size={24} color="#fff" />
        </Settings>
        <Logout>
          <Text light>Logout</Text>
        </Logout>
      </Account>
    </Container>
  );
};

export default ProfileScreen;
