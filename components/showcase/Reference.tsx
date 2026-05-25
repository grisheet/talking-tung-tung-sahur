import React from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, Zap, Coffee, Star, Sparkles } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const petStats = {
  happiness: 85,
  energy: 72,
  hunger: 45,
  mood: 'playful',
};

const careActions = [
  { id: 'feed', icon: Coffee, label: 'Feed', color: '#FFD93D' },
  { id: 'play', icon: Sparkles, label: 'Play', color: '#4ECDC4' },
  { id: 'love', icon: Heart, label: 'Love', color: '#FF8C42' },
  { id: 'energy', icon: Zap, label: 'Boost', color: '#6BCF7F' },
];

export const Reference = () => {
  const bounceAnim = React.useRef(new Animated.Value(1)).current;
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const rotateAnim = React.useRef(new Animated.Value(0)).current;
  const slideAnim = React.useRef(new Animated.Value(50)).current;
  const scaleAnim = React.useRef(new Animated.Value(0.9)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 6,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();

    const bounceLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 1.05,
          duration: 1200,
          easing: Easing.sin,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 1,
          duration: 1200,
          easing: Easing.sin,
          useNativeDriver: true,
        }),
      ])
    );

    const rotateLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    );

    bounceLoop.start();
    rotateLoop.start();
  }, []);

  const handlePetPress = () => {
    Animated.sequence([
      Animated.spring(bounceAnim, {
        toValue: 0.95,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.spring(bounceAnim, {
        toValue: 1.08,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.spring(bounceAnim, {
        toValue: 1,
        friction: 6,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }],
      }}
    >
      <LinearGradient
        colors={['#FFE9D6', '#FFF4E6', '#FFFBF5']}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 60 }}>
          <Animated.View
            style={{
              transform: [{ scale: scaleAnim }],
              marginBottom: 24,
            }}
          >
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                borderRadius: 32,
                padding: 20,
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginBottom: 16,
                }}
              >
                <StatBubble
                  icon={Heart}
                  value={petStats.happiness}
                  color="#FF8C42"
                  label="Happy"
                />
                <StatBubble
                  icon={Zap}
                  value={petStats.energy}
                  color="#4ECDC4"
                  label="Energy"
                />
                <StatBubble
                  icon={Coffee}
                  value={petStats.hunger}
                  color="#FFD93D"
                  label="Hunger"
                />
              </View>

              <TouchableOpacity
                onPress={handlePetPress}
                activeOpacity={0.9}
                style={{
                  width: width - 120,
                  aspectRatio: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 20,
                }}
              >
                <Animated.View
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    transform: [{ rotate: spin }],
                  }}
                >
                  <LinearGradient
                    colors={['#FFD93D', '#FFA866', '#FF8C42']}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 9999,
                      opacity: 0.2,
                    }}
                  />
                </Animated.View>

                <Animated.View
                  style={{
                    transform: [{ scale: bounceAnim }],
                    backgroundColor: '#FFF',
                    borderRadius: 9999,
                    width: '85%',
                    height: '85%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: '#FF8C42',
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.3,
                    shadowRadius: 16,
                    elevation: 8,
                  }}
                >
                  <LinearGradient
                    colors={['#FFE9D6', '#FFF4E6']}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 9999,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <View
                      style={{
                        width: 100,
                        height: 100,
                        backgroundColor: '#8B4513',
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          gap: 20,
                          marginBottom: 10,
                        }}
                      >
                        <View
                          style={{
                            width: 12,
                            height: 12,
                            backgroundColor: '#000',
                            borderRadius: 6,
                          }}
                        />
                        <View
                          style={{
                            width: 12,
                            height: 12,
                            backgroundColor: '#000',
                            borderRadius: 6,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          width: 40,
                          height: 20,
                          backgroundColor: '#000',
                          borderRadius: 10,
                        }}
                      />
                    </View>
                  </LinearGradient>
                </Animated.View>

                <View
                  style={{
                    position: 'absolute',
                    top: -10,
                    right: 10,
                  }}
                >
                  <MoodBadge mood={petStats.mood} />
                </View>
              </TouchableOpacity>

              <Text
                style={{
                  fontSize: 28,
                  fontWeight: '800',
                  color: '#8B4513',
                  textAlign: 'center',
                  marginTop: 8,
                }}
              >
                Tung Tung
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: '#FF8C42',
                  textAlign: 'center',
                  marginTop: 4,
                }}
              >
                Feeling Playful 🎉
              </Text>
            </View>
          </Animated.View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 12,
              justifyContent: 'center',
            }}
          >
            {careActions.map((action, index) => (
              <CareButton
                key={action.id}
                action={action}
                delay={index * 100}
              />
            ))}
          </View>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const StatBubble = ({ icon: Icon, value, color, label }) => {
  const pulseAnim = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1500,
          easing: Easing.sin,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1500,
          easing: Easing.sin,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        alignItems: 'center',
        transform: [{ scale: pulseAnim }],
      }}
    >
      <View
        style={{
          width: 56,
          height: 56,
          borderRadius: 28,
          backgroundColor: '#FFF',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: color,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 6,
        }}
      >
        <Icon size={24} color={color} strokeWidth={2.5} />
      </View>
      <Text
        style={{
          fontSize: 11,
          fontWeight: '700',
          color: '#8B4513',
          marginTop: 6,
        }}
      >
        {value}%
      </Text>
    </Animated.View>
  );
};

const MoodBadge = ({ mood }) => {
  const glowAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.sin,
          useNativeDriver: true,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 2000,
          easing: Easing.sin,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const glowOpacity = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.4, 0.8],
  });

  return (
    <Animated.View
      style={{
        opacity: glowOpacity,
      }}
    >
      <LinearGradient
        colors={['#FFD93D', '#FFA866']}
        style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 20,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
          shadowColor: '#FFD93D',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.5,
          shadowRadius: 8,
          elevation: 6,
        }}
      >
        <Star size={16} color="#FFF" fill="#FFF" strokeWidth={2} />
        <Text
          style={{
            fontSize: 12,
            fontWeight: '800',
            color: '#FFF',
            textTransform: 'uppercase',
          }}
        >
          {mood}
        </Text>
      </LinearGradient>
    </Animated.View>
  );
};

const CareButton = ({ action, delay }) => {
  const scaleAnim = React.useRef(new Animated.Value(0)).current;
  const [pressed, setPressed] = React.useState(false);

  React.useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      delay,
      friction: 6,
      tension: 40,
      useNativeDriver: true,
    }).start();
  }, [delay]);

  const handlePress = () => {
    setPressed(true);
    Animated.sequence([
      Animated.spring(scaleAnim, {
        toValue: 0.9,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1.05,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 6,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start(() => setPressed(false));
  };

  const Icon = action.icon;

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.9}
      disabled={pressed}
    >
      <Animated.View
        style={{
          transform: [{ scale: scaleAnim }],
        }}
      >
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.7)']}
          style={{
            width: (width - 72) / 2,
            paddingVertical: 20,
            borderRadius: 24,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            shadowColor: action.color,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 12,
            elevation: 6,
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: action.color,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Icon size={20} color="#FFF" strokeWidth={2.5} />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '800',
              color: '#8B4513',
            }}
          >
            {action.label}
          </Text>
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
};
