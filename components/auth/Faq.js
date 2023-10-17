import { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

const FAQScreen = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firestore().collection('faqs').get();
        const data = snapshot.docs.map((doc) => doc.data());
        setFaqData(data);
      } catch (error) {
        console.error('Error fetching FAQ data: ', error);
      }
    };

    fetchData();
  }, []);

  // Render your FAQ data in your component.
};

{/* <FlatList
  data={faqData}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View>
      <Text style={styles.question}>{item.question}</Text>
      <Text style={styles.answer}>{item.answer}</Text>
    </View>
  )}
/> */}
