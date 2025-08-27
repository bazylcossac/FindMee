import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import ProfileCardBetteryLevel from "./ProfileCardBatteryLevel";
import ProfileIcon from "../../assets/ProfileIcon.svg";

type ProfileCard = {
  name: string;
  batteryLevel: any;
  imageUrl: string;
};

const ProfileCard = ({ name, batteryLevel }: ProfileCard) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={ProfileIcon} />
        <Text>{name}</Text>
      </View>
      <View>
        <ProfileCardBetteryLevel batteryLevel={batteryLevel} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  },
  name: {
    color: Colors.light.text,
  },
});

export default ProfileCard;
