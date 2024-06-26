import React from 'react';
import { StyleSheet, View, ImageBackground, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const disorders = [
  {
    image: require('./anixety.jpg'),
    title: 'Anxiety Disorder',
    description:
      'Anxiety disorders are characterized by excessive worry, fear, and apprehension. Practice deep breathing exercises, engage in regular physical activity, and consider therapy or counseling for support.',
  },
  {
    image: require('./depression.webp'),
    title: 'Depression',
    description:
      'Depression is a mood disorder that leads to persistent feelings of sadness and a lack of interest in activities. Reach out to friends and family, establish a daily routine, and seek professional help if needed.',
  },
  {
    image: require('./addiction.jpeg'),
    title: 'Addiction',
    description:
      'Addiction involves the compulsive use of substances or behaviors with harmful consequences. Seek treatment, attend support groups, and avoid triggers that lead to addictive behaviors.',
  },
  {
    image: require('./bipolar_dissorder.jpeg'),
    title: 'Bipolar Disorder',
    description:
      'Bipolar disorder causes extreme mood swings, including manic and depressive episodes. Medication and therapy can help manage symptoms, and maintaining a stable lifestyle is important.',
  },
  {
    image: require('./Schizophrenia.jpeg'),
    title: 'Schizophrenia',
    description:
      'Schizophrenia is a severe mental disorder characterized by distorted thinking and emotional responsiveness. Medication, therapy, and support from loved ones are essential for managing the condition.',
  },
  {
    image: require('./PTSD.webp'),
    title: 'Post-Traumatic Stress Disorder',
    description:
      'PTSD results from exposure to traumatic events and can lead to distressing symptoms. Seek therapy, such as cognitive-behavioral therapy, and practice self-care techniques like mindfulness.',
  },
  {
    image: require('./ADHD.webp'),
    title: 'Attention-Deficit/Hyperactivity Disorder',
    description:
      'ADHD is a neuro developmental disorder that affects focus and impulse control. Medication, therapy, and strategies like time management and organization can be effective.',
  },
  {
    image: require('./Autism.jpeg'),
    title: 'Autism Spectrum',
    description:
      'Autism is a neuro developmental disorder affecting social communication and behavior. Early intervention services, specialized therapies, and a supportive environment can improve quality of life.',
  },
  {
    image: require('./substance_use.jpeg'),
    title: 'Substance Use',
    description:
      'Substance use disorders involve harmful use of drugs or alcohol. Seek treatment, attend support groups, and develop coping skills to maintain sobriety.',
  },
  {
    image: require('./Tourettes.jpeg'),
    title: 'Tourettes Syndrome',
    description:
      'Tourettes Syndrome is a neurological disorder characterized by repetitive, involuntary movements, and vocalizations called tics. While there is no cure, there are strategies to manage symptoms. Consulting a behavioral Therapist to help with cognitive-behavioral therapy or habit reversal therapy to reduce tics.',
  },
];



export default function QuickHelpGuide({ navigation }) {
  return (
    <ImageBackground source={require('./background2.png')} style={styles.container}>
      <ScrollView>
        {disorders.map((disorder, index) => (
          <Card key={index} style={styles.card}>
          <Card.Cover source={disorder.image} />
            {/* Use a smaller font size for descriptions */}
            <Card.Content>
              <Title>{disorder.title}</Title>
              <Paragraph style={styles.description}>{disorder.description}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagecard: {
    width: 400,
    height: 150,
    marginTop: 0,
    backgroundColor: '#CCCCFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  card: {
    width: 400,
    marginVertical: 10,
    height: 'auto', // Allow the card height to adjust based on content
  },
  description: {
    fontSize: 16, // Adjust the font size for descriptions
  },
});
