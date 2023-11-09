import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { FIRESTORE_DB } from '../../../../App';
import { collection, query, getDocs, doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';

export default function Home({ route }) {
  const [posts, setPosts] = useState([]);
  const [commentTexts, setCommentTexts] = useState([]); // State for comment texts
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const db = FIRESTORE_DB;
  const user = route.params?.user;
  const [userName, setUserName] = useState('');

  const fetchUserName = async () => {
    try {
      const userDoc = doc(db, 'users', user.uid);
      const userDocSnapshot = await getDoc(userDoc);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        setUserName(userData.name);
      }
    } catch (error) {
      console.error('Error fetching user name:', error);
    }
  }

  const fetchPosts = async () => {
    try {
      const postsCollection = collection(db, 'posts');
      const postsQuery = query(postsCollection);

      const querySnapshot = await getDocs(postsQuery);
      const postsData = [];

      querySnapshot.forEach((doc) => {
        const post = doc.data();
        postsData.push({ id: doc.id, ...post });
      });

      setPosts(postsData);

      // Initialize comment input states for each post
      const initialCommentTexts = postsData.map(() => '');
      setCommentTexts(initialCommentTexts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  const handleAddComment = async (postId, postIndex) => {
    try {
      const postDocRef = doc(db, 'posts', postId);

      // Get the comment text for the current post
      const currentCommentText = commentTexts[postIndex];

      if (currentCommentText.trim() === '') {
        return; // Don't add empty comments
      }

      // Update the post document to add a new comment
      await updateDoc(postDocRef, {
        comments: arrayUnion({
          userDisplayName: userName,
          text: currentCommentText,
        }),
      });

      // Clear the comment input field for the current post
      const updatedCommentTexts = [...commentTexts];
      updatedCommentTexts[postIndex] = '';
      setCommentTexts(updatedCommentTexts);

      // Refresh the posts after adding a comment
      fetchPosts();
    } catch (error) {
      console.error('Error adding comment: ', error);
    }
  };

  useEffect(() => {
    fetchUserName();
    fetchPosts();
  }, []);

  // Filter posts based on the search query
  const filteredPosts = posts.filter((post) => {
    return (
      post.userDisplayName && post.userDisplayName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <ImageBackground
      source={require('../../../../assets/background.png')}
      style={styles.container}
    >
      <Text style={styles.welcomeText}>Hello {userName || 'user'}, Welcome!</Text>

      {/* Search bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search by user name..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <ScrollView style={styles.postsContainer}>
        {filteredPosts.map((post, index) => (
          <Card key={index} style={styles.card}>
            <Card.Content>
              <Title style={styles.Title}>{post.userDisplayName}</Title>
              <Paragraph>{post.text}</Paragraph>
              {post.comments && post.comments.length > 0 && (
                <View>
                  <Text style={styles.commentTitle}>Comments:</Text>
                  {post.comments.map((comment, commentIndex) => (
                    <View key={commentIndex} style={styles.comment}>
                      <Text style={styles.commentUser}>{comment.userDisplayName}:</Text>
                      <Text style={styles.commentText}>{comment.text}</Text>
                    </View>
                  ))}
                </View>
              )}
              {/* Comment input field and button for the current post */}
              <TextInput
                style={styles.commentInput}
                placeholder="Add a comment..."
                value={commentTexts[index]}
                onChangeText={(text) => {
                  const updatedCommentTexts = [...commentTexts];
                  updatedCommentTexts[index] = text;
                  setCommentTexts(updatedCommentTexts);
                }}
              />
              <TouchableOpacity
                style={styles.commentButton}
                onPress={() => handleAddComment(post.id, index)}
              >
                <Text style={styles.commentButtonText}>Add Comment</Text>
              </TouchableOpacity>
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
  welcomeText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    margin: 20,
    marginBottom: 20,
  },
  Title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  card: {
    width: 400,
    marginVertical: 10,
    height: 'auto',
  },
  commentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  comment: {
    marginVertical: 5,
  },
  commentUser: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentText: {
    fontSize: 16,
  },
  commentInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },
  commentButton: {
    width: 200,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  commentButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchInput: {
    width: '100%',
    height: 30, // Adjusted the height
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    marginBottom: 20, // Added more space between the search bar and the posts
    backgroundColor: 'white',
  },
  postsContainer: {
    marginBottom: 20, // Added more space between the search bar and the posts
  },
});
