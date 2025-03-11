import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  // Dados do filme
  const movieInfo = {
    title: 'Barbie',
    synopsis: 'No mundo mágico das Barbies, "Barbieland", uma das bonecas começa a perceber que não se encaixa como as outras. Depois de ser expulsa, ela parte para uma aventura no "mundo real", onde descobre que a beleza está no interior de cada um.',
    budget: '145000000',
    vote: '7.316',
    duration: '112 min',
    releaseDate: '2023-07-19',
  };

  // Lista de atores
  const actors = [
    {
      name: 'Barbie',
      actor: 'Margot Robbie',
      image: require('./assets/margot-robbie.jpg'),
    },
    {
      name: 'Ken',
      actor: 'Ryan Gosling',
      image: require('./assets/ryan-gosling.jpg'),
    },
    {
      name: 'Gloria',
      actor: 'America Ferrera',
      image: require('./assets/america-ferrera.jpg'),
    },
    {
      name: 'Barbie',
      actor: 'Kate McKinnon',
      image: require('./assets/kate-mckinnon.jpg'),
    },
    {
      name: 'Sasha',
      actor: 'Ariana Greenblatt',
      image: require('./assets/ariana-greenblatt.jpg'),
    },
    {
      name: 'Allan',
      actor: 'Michael Cera',
      image: require('./assets/michael-cera.jpg'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Header com botão voltar */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalhes</Text>
      </View>
      
      <ScrollView>
        {/* Imagem principal e informações do filme */}
        <View style={styles.movieCard}>
          <Image
            source={require('./assets/barbie-movie.jpg')}
            style={styles.movieImage}
            resizeMode="cover"
          />
          
          <View style={styles.movieDetails}>
            <Text style={styles.movieTitle}>{movieInfo.title}</Text>
            <Text style={styles.movieSynopsis}>{movieInfo.synopsis}</Text>
            
            <View style={styles.movieStats}>
              <Text style={styles.movieStat}>Orçamento: ${movieInfo.budget}</Text>
              <Text style={styles.movieStat}>Voto: {movieInfo.vote}</Text>
              <Text style={styles.movieStat}>Duração: {movieInfo.duration}</Text>
              <Text style={styles.movieStat}>Lançamento: {movieInfo.releaseDate}</Text>
            </View>
          </View>
        </View>
        
        {/* Lista de atores */}
        <View style={styles.actorsSection}>
          <Text style={styles.sectionTitle}>Atores</Text>
          
          {actors.map((actor, index) => (
            <TouchableOpacity key={index} style={styles.actorCard}>
              <Image source={actor.image} style={styles.actorImage} />
              <View style={styles.actorInfo}>
                <Text style={styles.characterName}>{actor.name}</Text>
                <Text style={styles.actorName}>{actor.actor}</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    fontSize: 24,
    marginRight: 16,
    color: 'green',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  movieCard: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  movieImage: {
    width: '100%',
    height: 220,
  },
  movieDetails: {
    padding: 16,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  movieSynopsis: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  movieStats: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
  },
  movieStat: {
    fontSize: 14,
    marginBottom: 4,
  },
  actorsSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  actorCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
  actorImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 12,
  },
  actorInfo: {
    flex: 1,
  },
  characterName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actorName: {
    fontSize: 14,
    color: '#666',
  },
  chevron: {
    fontSize: 20,
    color: '#999',
  },
});
