import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { FIRESTORE_DB } from '../../../../App';
import { collection, query, getDocs } from 'firebase/firestore';

export default function Home({ route }) {
  const [posts, setPosts] = useState([]);
  const db = FIRESTORE_DB;

  // Function to fetch posts
  const fetchPosts = async () => {
    const postsCollection = collection(db, 'posts');
    const postsQuery = query(postsCollection);

    try {
      const querySnapshot = await getDocs(postsQuery);
      const postsData = [];

      querySnapshot.forEach((doc) => {
        const post = doc.data();
        postsData.push(post);
      });

      setPosts(postsData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    // Fetch posts when the component mounts
    fetchPosts();
  }, []); // The empty dependency array ensures it runs once when the component mounts

  // This effect will run whenever a new post is added
  useEffect(() => {
    if (route.params?.newPostAdded) {
      // Fetch posts again to update the list
      fetchPosts();
    }
  }, [route.params?.newPostAdded]);

  return (
    <View>
      {posts.map((post, index) => (
        <Card key={index}>
          <Card.Content>
            <Title>{post.userDisplayName}</Title>
            <Paragraph>{post.text}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
}

// Other styles...


// TODO: Add to styling sheet instead
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    temp : {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'blue',
    },
    title: {
        justifyContent: 'center',
        fontSize: 24, // Adjust the font size as needed
        fontWeight: 'bold', // Make the text bold
        color: 'black', // Set the text color to black
        },


  });