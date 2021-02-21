import styled from "styled-components/native";
import Text from "../../components/Text";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #343434;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 32px 0 32px;
`;

export const AvatarContainer = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  border-radius: 22.5px;
  background-color: #eec747;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Categories = styled.ScrollView`
  margin-top: 32px;
  flex-grow: 0;
`;

export const Category = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin: 20px 10px;
  margin-bottom: 30px;
  height: 45px;
  width: 100px;
  border-radius: 30px;
  background-color: ${(props) => (props.selected ? "#e8e5b9" : "#eec747")};
`;

export const CategoryName = styled(Text)`
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  font-weight: ${(props) => (props.selected ? "700" : "500")};
`;

export const CategoryDot = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: #f98776;
`;

export const Games = styled.FlatList`
  margin-top: 32px;
`;

export const Game = styled.TouchableOpacity`
  margin-bottom: 32px;
`;

export const GameCover = styled.Image`
  width: 100%;
  height: 300px;
`;

export const GameInfo = styled.View`
  margin: -50px 16px 0 16px;
  padding: 16px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
`;
export const GameImage = styled.Image`
  width: 50px;
  height: 40px;
  border-radius: 8px;
`;
export const GameTitle = styled.View`
  margin: 5px 28px;
`;
