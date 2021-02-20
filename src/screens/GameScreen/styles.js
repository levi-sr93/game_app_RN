import styled from "styled-components";
import Text from "../../components/Text";

export const GameContainer = styled.SafeAreaView`
  background-color: #343434;
  flex: 1;
`;

export const GameArtContainer = styled.View`
  position: relative;
`;

export const GameArt = styled.Image`
  height: 350px;
  width: 100%;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
`;

export const GoBackButton = styled.TouchableOpacity`
  position: absolute;
  top: 48px;
  left: 20px;
  background-color: #819ee5;
  border-radius: 32px;
`;

export const InfoScrollSection = styled.ScrollView``;

export const GameInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  margin: 8px 16px;
`;

export const GameThumbContainer = styled.View`
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  border-radius: 2px;
`;

export const GameThumb = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 16px;
`;

export const GameInfo = styled.View`
  width: 0;
  flex-grow: 1;
  margin: 0 9px 0 18px;
`;

export const Download = styled.View`
  background-color: #819ee5;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const GameStatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 16px;
`;

export const Stars = styled.View`
  flex-direction: row;
`;

export const ScreenShotsContainer = styled.View`
  margin: 8px 0;
`;

export const ScreenShots = styled.ScrollView``;

export const ScreenShotContainer = styled.View`
  padding: 16px;
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 5px;
  elevation: 2;
`;

export const ScreenShot = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const Description = styled(Text)`
  line-height: 22px;
  margin: 0 16px;
`;
