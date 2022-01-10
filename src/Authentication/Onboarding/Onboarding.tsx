import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { interpolateColor } from "react-native-redash";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  interpolate,
  Extrapolate
} from "react-native-reanimated";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import SubSlide from "./SubSlide";
import { AuthNavigationProps } from "../../components/Navigation";
import { Theme, makeStyles, useTheme } from "../../components/Theme";
import Dot from "./Dot";

const { width } = Dimensions.get("window");
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bawah5,
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomEndRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: theme.colors.bawah5,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-end",
    borderTopLeftRadius: theme.borderRadii.xl,
    overflow: "hidden"
},
}));

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  picture: {
    width: number;
    height: number;
    src: number;
  };
};

export const slides: Slide[] = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description: "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: "#FFE4D9",
    picture: {
      src: require("../assets/a.png"),
      width: 2738,
      height: 3644,
    },
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description: "Hating the clothes in your wardrobe? Explore hundreds of outfits ideas",
    color: "#BEECC4",
    picture: {
      src: require("../assets/b.png"),
      width: 2738,
      height: 3644,
    },
  },
  {
    title: "Eccentric",
    subtitle: "Your Style, Your Way",
    description: "Create your individual & unique style and look amazing everyday",
    color: "#BFEAF5",
    picture: {
      src: require("../assets/d.png"),
      width: 2738,
      height: 3684,
    },
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description: "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    picture: {
      src: require("../assets/c.png"),
      width: 2738,
      height: 3684,
    },
  },
];

const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {
  const styles = useStyles();
  const theme = useTheme();
  const scroll = useRef<Animated.ScrollView>(null);
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      x.value = contentOffset.x;
    },
  });
  const backgroundColor = useDerivedValue(() =>
    interpolateColor(
      x.value,
      slides.map((_, i) => i * width),
      slides.map((slide) => slide.color)
    )
  );
  const slider = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));
  const background = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));
  const currentIndex = useDerivedValue(() => x.value / width);
  const footerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -x.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, slider]}>
      {slides.map(({picture}, index) => {
        const style = useAnimatedStyle(() => ({
          opacity: interpolate(
            x.value,
            [(index - 0.5) * width, index * width, (index + 0.5) * width],
            [0, 1, 0],
            Extrapolate.CLAMP
          ),
        }));
        return (
          <Animated.View key={index} style={[styles.underlay, style]}>
            <Image source={picture.src} style={{
              width: width - theme.borderRadii.xl,
              height: ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }} />
          </Animated.View>
        );
        })}
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={[StyleSheet.absoluteFill, background]} />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={currentIndex} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={[
              {
                flex: 1,
                flexDirection: "row",
                width: width * slides.length,
              },
              footerStyle,
            ]}
          >
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <SubSlide
                  key={index}
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else {
                      scroll.current?.scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                  {...{ subtitle, description, last }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;