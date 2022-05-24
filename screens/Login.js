import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  Input,
  NativeBaseProvider,
  Button,
  Icon,
  Box,
  Image,
  AspectRatio,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Login</Text>
      </View>
      <View style={styles.text2}>
        <Text>Don't have an account</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      {/* user name or email input field */}
      <View style={styles.ButtonStyle}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="user-secret" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            placeholder="Username or Email"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>
      {/* password input field */}

      <View style={styles.buttonStyleX}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            secureTextEntry={true}
            placeholder="Password"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>
      {/* Button */}

      <View style={styles.buttonStyleX}>
        <Button style={styles.ButtonDesign}>LOGIN</Button>
      </View>

      {/* Line */}

      <View style={styles.lineStyle}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center" }}>Or</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>

      {/* BOX */}

      <View style={styles.boxStyle}>
        <Box
          onPress={() => navigation.navigate("#")}
          style={{ height: 80, width: 80, marginLeft: 20 }}
          shadow={3}
          _light={{
            backgroundColor: "gray.50",
          }}
          _dark={{
            backgroundColor: "gray.700",
          }}
        >
          <AspectRatio ratio={1 / 1}>
            <Image
              roundedTop="lg"
              source={{
                uri: "https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png",
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Box
          onPress={() => navigation.navigate("#")}
          style={{ height: 80, width: 80, marginLeft: 20 }}
          shadow={3}
          _light={{
            backgroundColor: "gray.50",
          }}
          _dark={{
            backgroundColor: "gray.700",
          }}
        >
          <AspectRatio ratio={1 / 1}>
            <Image
              roundedTop="lg"
              source={{
                uri: "https://www.transparentpng.com/thumb/facebook-logo-png/photo-facebook-logo-png-hd-25.png",
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Box
          onPress={() => navigation.navigate("#")}
          style={{ height: 80, width: 80, marginLeft: 20 }}
          shadow={3}
          _light={{
            backgroundColor: "gray.50",
          }}
          _dark={{
            backgroundColor: "gray.700",
          }}
        >
          <AspectRatio ratio={1 / 1}>
            <Image
              roundedTop="lg"
              source={{
                uri: "https://www.transparentpng.com/thumb/twitter/bird-twitter-socialmedia-icons-png-5.png",
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Box
          onPress={() => navigation.navigate("#")}
          style={{ height: 80, width: 80, marginLeft: 20 }}
          shadow={3}
          _light={{
            backgroundColor: "gray.50",
          }}
          _dark={{
            backgroundColor: "gray.700",
          }}
        >
          <AspectRatio ratio={1 / 1}>
            <Image
              roundedTop="lg"
              source={{
                uri: "https://www.transparentpng.com/thumb/apple-logo/RRgURB-apple-logo-clipart-hd.png",
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
      </View>
    </View>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Login />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  LoginText: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: "bold",
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
  },
  signupText: {
    fontWeight: "bold",
  },
  emailInput: {
    marginTop: 10,
    marginRight: 5,
  },
  ButtonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonStyleX: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  ButtonDesign: {
    backgroundColor: "#026efd",
  },
  lineStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
  },
  boxStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-around",
  },
});
