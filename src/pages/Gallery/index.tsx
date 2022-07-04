import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Animated,
  Image,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

const bgs = ['#ab82ff', '#ab82ff'];
const DATA = [
  {
    key: '12345',
    title: 'Educate',
    description:
      'Daily educational activities like paintings, recreation, reading etc',
    image: require('../../assets/img/abra-o-livro.png'),
  },
  {
    key: '123456',
    title: 'Food',
    description: 'Breakfast and lunch from Monday to Friday',
    image: require('../../assets/img/noodle.png'),
  },
  {
    key: '1234567',
    title: 'Bath',
    description: 'Daily baths at intervals',
    image: require('../../assets/img/shower.png'),
  },
  {
    key: '12345678',
    title: 'Support',
    description: 'Psychological support and monthly food baskets',
    image: require('../../assets/img/support.png'),
  },
];

const Indicator = ({scrollX}) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 50,
        flexDirection: 'row',
      }}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={`indicator=${i}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: '#fff',
              opacity,
              margin: 10,
              transform: [
                {
                  scale,
                },
              ],
            }}
          />
        );
      })}
    </View>
  );
};
const Backdrop = ({scrollX}) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((rest, i) => i * width),
    outputRange: bgs.map(bg => bg),
  });
  return (
    <Animated.View style={[StyleSheet.absoluteFillObject, {backgroundColor}]} />
  );
};

const Square = ({scrollX}) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1,
  );
  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['35deg', '0deg', '35deg'],
  });
  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });
  return (
    <Animated.View
      style={{
        width: height,
        height: height,
        backgroundColor: '#fff',
        borderRadius: 86,
        position: 'absolute',
        top: -height * 0.6,
        left: -height * 0.3,
        transform: [
          {
            rotate,
          },
          {
            translateX,
          },
        ],
      }}
    />
  );
};

const Gallery: React.FC = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={item => item.key}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        contentContainerStyle={{paddingBottom: 100}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width,
                alignItems: 'center',
                padding: 30,
              }}>
              <View
                style={{
                  flex: 0.7,
                  justifyContent: 'center',
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: width / 2,
                    height: height / 2,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View
                style={{
                  flex: 0.3,
                }}
              />
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '800',
                  fontSize: 28,
                  marginBottom: 10,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '300',
                  fontSize: 16,
                }}>
                {item.description}
              </Text>
              {/* <Button
                type="secondary"
                onPress={() => {
                  navigationHome();
                }}>
                Home
              </Button> */}
            </View>
          );
        }}
      />
      <Indicator scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Gallery;
