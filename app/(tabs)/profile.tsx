import LottieView from 'lottie-react-native';
import { StyleSheet, Text, View } from 'react-native';
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <LottieView
          source={require('@/assets/avatar.json')}
          autoPlay
          loop
          style={styles.gif}
        />
        <Text style={styles.name}>Rashmika Fernando</Text>
        <Text style={styles.email}>rashmika@example.com</Text>
        <View style={styles.infoBox}>
          <Text style={styles.info}>📞 Phone: +94 123 4567</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.info}>🏢 Position: Loan Office</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.info}>📍 Branch: Colombo</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4caf50', // green background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '95%',
    maxWidth: 400,
    maxHeight: 800,
    alignSelf: 'center',
    overflow: 'hidden', 
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 30,
    paddingHorizontal: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  gif: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 3,
    borderColor: '#4caf50',
    marginBottom: 25,
    backgroundColor: '#f0f0f0', // light gray background for the avatar
    overflow: 'hidden', // Ensure the GIF fits within the rounded border
    aspectRatio: 1, // Maintain aspect ratio
    maxWidth: '100%', // Ensure it doesn't overflow the screen
    maxHeight: 180, // Limit height to prevent overflow
    resizeMode: 'cover', // Cover the entire area without stretching
    alignItems: 'center',
    justifyContent: 'center', // Center the content within the GIF  
    flexShrink: 1, // Allow it to shrink if needed
    flexGrow: 0, // Prevent it from growing beyond its content size
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
    textAlign: 'center',
    textTransform: 'capitalize', // Capitalize the first letter of each word
    letterSpacing: 0.5, // Slightly increase letter spacing for better readability
  },
  email: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 24, // Improved line height for better readability
  },
  infoBox: {
    backgroundColor: '#e8f5e9', // light green
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical: 6,
    width: '100%',
    maxWidth: 350, // Limit maximum width for better layout
    alignItems: 'center',
  },
  info: {
    fontSize: 18,
    color: '#2e7d32', // darker green text
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 24, // Improved line height for better readability
    flexShrink: 1, // Allow it to shrink if needed
    flexGrow: 0, // Prevent it from growing beyond its content size
    textTransform: 'capitalize', // Capitalize the first letter of each word
    letterSpacing: 0.5, // Slightly increase letter spacing for better readability
    maxWidth: '100%', // Ensure it doesn't overflow the screen
    minWidth: 200, // Ensure it has a minimum width for better layout
  },
});
