import React, { useCallback } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Text from "../../components/Text";

import {
  GameContainer,
  GameArtContainer,
  GameArt,
  GoBackButton,
  InfoScrollSection,
  GameInfoContainer,
  GameThumbContainer,
  GameThumb,
  GameInfo,
  Download,
  GameStatsContainer,
  Stars,
  ScreenShotsContainer,
  ScreenShots,
  ScreenShotContainer,
  ScreenShot,
  Description,
} from "./styles";

const GameScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { game } = route.params;

  const renderStars = useCallback(() => {
    let stars = [];

    for (let s = 1; s <= 5; s++) {
      stars.push(
        <Ionicons
          key={s}
          name="ios-star"
          size={16}
          style={{ marginRight: 5 }}
          color={Math.floor(game.rating) >= s ? "#eec747" : "#c6c4b6"}
        />
      );
    }

    return <Stars>{stars}</Stars>;
  }, []);

  return (
    <GameContainer>
      <StatusBar barStyle="light-content" />

      <GameArtContainer>
        <GameArt source={game.cover} />

        <GoBackButton onPress={() => navigation.goBack()}>
          <Ionicons name="ios-close" size={30} color="#fff" />
        </GoBackButton>
      </GameArtContainer>

      <InfoScrollSection>
        <GameInfoContainer>
          <GameThumbContainer>
            <GameThumb source={game.cover} />
          </GameThumbContainer>

          <GameInfo>
            <Text heavy medium>
              {game.title}
            </Text>
            <Text color="#9a9a9a">{game.teaser}</Text>
          </GameInfo>

          <Download>
            <Ionicons name="md-cloud-download" size={24} color="#fff" />
          </Download>
        </GameInfoContainer>

        <GameStatsContainer>
          {renderStars()}
          <Text bold color="#9a9a9a">
            {game.rating}
          </Text>
          <Text bold color="#9a9a9a">
            {game.category[0]}
          </Text>
          <Text bold color="#9a9a9a">
            {game.age}
          </Text>

          <Text bold color="#9a9a9a">
            Game of the day
          </Text>
        </GameStatsContainer>

        <ScreenShotsContainer>
          <ScreenShots horizontal={true} showHorizontalScrollIndicator={false}>
            {game.screenshots.map((screenshot, index) => (
              <ScreenShotContainer key={index}>
                <ScreenShot source={screenshot} />
              </ScreenShotContainer>
            ))}
          </ScreenShots>
        </ScreenShotsContainer>

        <Description medium color="#9a9a9a">
          {game.description}
        </Description>
      </InfoScrollSection>
    </GameContainer>
  );
};

export default GameScreen;
