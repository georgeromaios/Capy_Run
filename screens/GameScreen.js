import React from 'react';
import { View, StyleSheet } from 'react-native';
import Capybara from '../components/Capybara';


const GameScreen = () => {
    const [position, setPosition] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(true);
  
    // Move the capybara automatically
    React.useEffect(() => {
      const interval = setInterval(() => {
        if (isRunning) {
          setPosition((prevPosition) => prevPosition + 1);
        }
      }, 100);
      return () => clearInterval(interval);
    }, [isRunning]);
  
    // ...
  };
  
  return (
    <View style={styles.container}>
      <Capybara position={position} />
      {/* Render obstacles and other game elements here */}
    </View>
  );

  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  