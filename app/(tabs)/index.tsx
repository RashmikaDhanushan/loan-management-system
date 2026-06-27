import LottieView from 'lottie-react-native';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [nic, setNic] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    if (!name || !nic || !contact || !address) {
      Alert.alert('Validation', 'Please fill all fields');
      return;
    }

    Alert.alert('Success', `Customer Registered:\n\nName: ${name}\nNIC: ${nic}`);
    setName('');
    setNic('');
    setContact('');
    setAddress('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Customer Registration</Text>

      <LottieView
        source={require('@/assets/dashboard.json')}
        autoPlay
        loop
        style={styles.gif}
      />

      <TextInput placeholder="Full Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="NIC Number" value={nic} onChangeText={setNic} style={styles.input} />
      <TextInput
        placeholder="Contact Number"
        value={contact}
        onChangeText={setContact}
        style={styles.input}
        keyboardType="phone-pad"
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        style={[styles.input, { height: 80 }]}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'rgb(1, 1, 26)',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontFamily: 'Arial',
    marginTop: 10,
    padding: 10,
    backgroundColor: 'rgb(71, 4, 148)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
    shadowColor: '#000',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  button: {
    backgroundColor: 'rgb(55, 27, 87)',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  gif: {
    width: 350,
    height: 250,
    marginBottom: 5,
    alignSelf: 'center',
    // borderRadius: 10,
    // borderColor: '#000',
    // borderWidth: 1,
    overflow: 'hidden',
    // backgroundColor: '#F9F9F9',
    elevation: 2,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
    aspectRatio: 1, // Maintain aspect ratio
    maxWidth: '100%', // Ensure it doesn't overflow the screen
    maxHeight: 300, // Limit height to prevent overflow
    minHeight: 200, // Ensure it has a minimum height
    minWidth: 200, // Ensure it has a minimum width
    flexShrink: 1, // Allow it to shrink if needed
    flexGrow: 0, // Prevent it from growing beyond its content size
    flexDirection: 'row', // Ensure content is centered

  },
});
