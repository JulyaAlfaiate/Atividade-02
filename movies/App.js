import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [selectedContent, setSelectedContent] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'movies', 'series'

  // Dados dos filmes e séries
  const content = [
    {
      type: 'movie',
      title: 'Cidade de Deus',
      synopsis: 'Dois meninos crescem em um bairro violento do Rio de Janeiro e tomam caminhos diferentes: um se torna fotógrafo, o outro um traficante.',
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/10/CidadedeDeus.jpg/250px-CidadedeDeus.jpg',
      actors: [
        { name: 'Alexandre Rodrigues', character: 'Buscapé', image: 'https://br.web.img3.acsta.net/c_310_420/pictures/23/03/24/15/15/4205411.jpg' },
        { name: 'Leandro Firmino', character: 'Zé Pequeno', image: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/34/97/20194800.jpg' },
        { name: 'Phellipe Haagensen', character: 'Bené', image: 'https://br.web.img3.acsta.net/c_310_420/pictures/22/08/19/13/54/0637650.jpg' },
      ],
    },
    {
      type: 'movie',
      title: 'Tropa de Elite',
      synopsis: 'O capitão Nascimento precisa treinar um substituto para liderar a tropa de elite enquanto tenta resolver seus problemas pessoais.',
      image: 'https://colunadofla.com/wp-content/uploads/2015/03/bope_tropa_de_elite_-_papel_de_parede2-1.jpg',
      actors: [
        { name: 'Wagner Moura', character: 'Capitão Nascimento', image: 'https://br.web.img3.acsta.net/c_310_420/pictures/18/07/25/21/22/3529943.jpg' },
        { name: 'Caio Junqueira', character: 'Neto', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Caio_Junqueira.jpg/220px-Caio_Junqueira.jpghttps://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/25/21/20188693.jpg' },
        { name: 'André Ramiro', character: 'Matias', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Andr%C3%A9_Ramiro.jpg/220px-Andr%C3%A9_Ramiro.jpghttps://br.web.img3.acsta.net/c_310_420/pictures/20/08/06/18/46/1769348.jpg' },
      ],
    },
    {
      type: 'movie',
      title: 'O Auto da Compadecida',
      synopsis: 'As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9IhRox8eqSZOGFovDKLER_6HmdYPD7YC3A&s',
      actors: [
        { name: 'Matheus Nachtergaele', character: 'Chicó', image: 'https://br.web.img3.acsta.net/c_310_420/pictures/19/07/11/20/07/0646942.jpg' },
        { name: 'Selton Mello', character: 'João Grilo', image: 'https://br.web.img3.acsta.net/c_310_420/pictures/16/04/18/22/23/059814.jpg' },
        { name: 'Fernanda Montenegro', character: 'Compadecida', image: 'https://br.web.img3.acsta.net/c_310_420/pictures/21/12/13/18/50/2785506.png' },
      ],
    },
    {
      type: 'movie',
      title: 'Central do Brasil',
      synopsis: 'Dora, uma ex-professora, escreve cartas para analfabetos na estação Central do Brasil e acaba se envolvendo na vida de um menino que busca seu pai.',
      image: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/30/56/19874127.jpg',
      actors: [
        { name: 'Fernanda Montenegro', character: 'Dora', image: 'https://br.web.img3.acsta.net/c_310_420/pictures/21/12/13/18/50/2785506.png' },
        { name: 'Vinícius de Oliveira', character: 'Josué', image: 'https://br.web.img2.acsta.net/c_310_420/pictures/22/05/12/18/54/3073716.jpg' },
        { name: 'Marília Pêra', character: 'Irene', image: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/93/17/60/20240030.jpg' },
      ],
    },
    {
      type: 'movie',
      title: 'Que Horas Ela Volta?',
      synopsis: 'A relação entre uma empregada doméstica e sua patroa é abalada quando a filha da empregada chega para o vestibular.',
      image: 'https://br.web.img3.acsta.net/c_310_420/pictures/16/01/21/17/52/543806.jpg',
      actors: [
        { name: 'Regina Casé', character: 'Val', image: 'https://br.web.img3.acsta.net/c_310_420/pictures/19/09/18/21/44/4368748.jpg' },
        { name: 'Camila Márdila', character: 'Jéssica', image: 'https://br.web.img2.acsta.net/c_310_420/pictures/15/02/03/15/04/030042.jpg' },
        { name: 'Karine Teles', character: 'Barbara', image: 'https://br.web.img2.acsta.net/c_310_420/pictures/20/11/23/16/23/4975770.jpg' },
      ],
    },
    {
      type: 'series',
      title: '3%',
      synopsis: 'Em um futuro distópico, a sociedade é dividida entre os que vivem em abundância e os que vivem na pobreza. Um teste decide quem pode mudar de lado.',
      image: 'https://br.web.img2.acsta.net/c_310_420/pictures/17/12/12/14/42/0607724.jpg',
      actors: [
        { name: 'Bianca Comparato', character: 'Michele', image: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/06/05/20532613.jpg' },
        { name: 'Rodolfo Valente', character: 'Rafael', image: 'https://br.web.img3.acsta.net/c_310_420/pictures/19/03/19/21/16/1245727.jpg' },
        { name: 'Vaneza Oliveira', character: 'Joana', image: 'https://br.web.img2.acsta.net/c_310_420/pictures/16/11/23/18/51/298315.jpg' },
      ],
    },
    {
      type: 'series',
      title: 'Samantha!',
      synopsis: 'Uma ex-estrela infantil tenta recuperar sua fama enquanto lida com os desafios da vida adulta.',
      image: 'https://br.web.img3.acsta.net/c_310_420/pictures/18/06/27/19/48/4000326.jpg',
      actors: [
        { name: 'Emanuelle Araújo', character: 'Samantha', image: 'https://br.web.img3.acsta.net/c_310_420/pictures/19/06/12/22/38/5489635.jpg' },
        { name: 'Cauã Reymond', character: 'Diego', image: 'https://br.web.img3.acsta.net/c_310_420/pictures/20/04/13/17/39/1048187.jpg' },
        { name: 'Sabrina Nonata', character: 'Patrícia', image: 'https://br.web.img3.acsta.net/c_162_216/pictures/23/07/19/00/18/4706566.jpg' },
      ],
    },
    {
      type: 'series',
      title: 'Coisa Mais Linda',
      synopsis: 'Nos anos 60, uma jovem de São Paulo se muda para o Rio de Janeiro para abrir um restaurante, mas acaba se envolvendo com a música e o amor.',
      image: 'https://br.web.img2.acsta.net/c_310_420/pictures/19/04/09/20/26/4730448.jpg',
      actors: [
        { name: 'Maria Casadevall', character: 'Malu', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsirpRXx4E8pLv0X-L-Fystyew4gZnYdmgQ&s' },
        { name: 'Pathy Dejesus', character: 'Adélia', image: 'https://br.web.img3.acsta.net/c_310_420/img/59/35/593529eb6794436e67f3fbebe44553bd.png' },
        { name: 'Fernanda Vasconcellos', character: 'Thereza', image: 'https://br.web.img3.acsta.net/c_310_420/pictures/19/02/22/16/31/3094120.jpg' },
      ],
    },
  ];

  const filteredContent = content.filter(item => filter === 'all' || item.type === filter);

  if (selectedContent) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setSelectedContent(null)}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{selectedContent.title}</Text>
        </View>
        <ScrollView>
          <View style={styles.movieCard}>
            <Image source={{ uri: selectedContent.image }} style={styles.movieImage} resizeMode="cover" />
            <View style={styles.movieDetails}>
              <Text style={styles.movieSynopsis}>{selectedContent.synopsis}</Text>
            </View>
          </View>
          <View style={styles.actorsSection}>
            <Text style={styles.sectionTitle}>Atores</Text>
            {selectedContent.actors.map((actor, index) => (
              <TouchableOpacity key={index} style={styles.actorCard}>
                <Image source={{ uri: actor.image }} style={styles.actorImage} />
                <View style={styles.actorInfo}>
                  <Text style={styles.characterName}>{actor.character}</Text>
                  <Text style={styles.actorName}>{actor.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => setFilter('all')} style={[styles.filterButton, filter === 'all' && styles.activeFilter]}>
          <Text style={styles.filterText}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('movie')} style={[styles.filterButton, filter === 'movie' && styles.activeFilter]}>
          <Text style={styles.filterText}>Filmes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('series')} style={[styles.filterButton, filter === 'series' && styles.activeFilter]}>
          <Text style={styles.filterText}>Séries</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {filteredContent.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedContent(item)} style={styles.contentCard}>
            <Image source={{ uri: item.image }} style={styles.contentImage} resizeMode="cover" />
            <Text style={styles.contentTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
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
    borderBottomColor: '#1E90FF',
  },
  backButton: {
    fontSize: 24,
    marginRight: 16,
    color: 'purple',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#7b7385'
  },
  filterButton: {
    padding: 10,
    borderRadius: 20,
  },
  activeFilter: {
    backgroundColor: 'purple',
  },
  filterText: {
    color: 'white',
  },
  contentCard: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  contentImage: {
    width: '100%',
    height: 200,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
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
  movieSynopsis: {
    fontSize: 16,
    lineHeight: 24,
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
});