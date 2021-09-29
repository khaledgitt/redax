import { useState } from 'react';
import './App.css';
import AddMovie from './component/AddMovie';
import Header from './component/Header';
import MovieList from './component/MovieList';
import NavBar from './component/Navbar';
import Footer from './component/Footer';
import { Switch, Route } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import MovieScreen from './component/MovieScreen';



function App() {

  const [movies, setMovies] = useState([
    {
      name: "beasts of no nation",
      posterurl:
        "https://m.media-amazon.com/images/M/MV5BMTYwMzMzMDI0NF5BMl5BanBnXkFtZTgwNDQ3NjI3NjE@._V1_.jpg",
      description:
        "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
      rating: 5,
    },
    {
      name: "13 hours in benghazi",
      posterurl: "https://m.media-amazon.com/images/I/91zhWpXHVzL._SL1500_.jpg",
      description:
        "A security team consisting of six members fights to defend an American diplomatic compound in Benghazi, Libya, against a wave of terrorist attacks.",
      rating: 4,
    },
    {
      name: "The Circle",
      posterurl:
        "https://m.media-amazon.com/images/M/MV5BMjY2OTM2Njc3Ml5BMl5BanBnXkFtZTgwNDgzODU3MTI@._V1_.jpg",
      description:
        "Mae is ecstatic to be employed in the biggest tech company in the world. But after she gets involved in an experiment that could change the world, she realises its adverse consequences.",
      rating: 2,
    },
    {
      name: "Inception",
      posterurl:
        "https://starzplay-img-prod-ssl.akamaized.net/474w/WarnerBrothers/INCEPTIONY2010M/INCEPTIONY2010M-474x677-PST.jpg",
      description:
        "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
      rating: 3,
    },
    {
      name: "Shutter Island",
      posterurl:
        "https://starzplay-img-prod-ssl.akamaized.net/474w/Paramount/SHUTTERISLANDY2010M/SHUTTERISLANDY2010M-474x677-PST.jpg",
      description:
        "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
      rating: 5,
    },
    {
      name: "Warcraft",
      posterurl:
        "https://upload.wikimedia.org/wikipedia/en/5/56/Warcraft_Teaser_Poster.jpg",
      description:
        "A few human survivors must team up with a group of dissenting Orcs to stop an Orc horde from invading their planet through a magic portal.",
      rating: 1,
    },
    {
      name: "The Godfather",
      posterurl:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description:
        "The Godfather is an American film series that consists of three crime films directed by Francis Ford Coppola inspired by the 1969 novel of the same name by Italian American author Mario Puzo.",
      rating: 5,
    },
    {
      name: "Taxi Driver",
      posterurl:
        "https://www.grignoux.be/upload/grignoux/films/1018/taxi_driver_affiche.jpg",
      description:
        "Travis, an ex-marine and Vietnam veteran, works as a taxi driver in New York City. One day, he is driven to save an underage prostitute from her pimp in an effort to clean the city of its corruption.",
      rating: 3,
    },
    {
      id: 9,

      name: "Fight Club",
      posterurl:
        "https://media.services.cinergy.ch/media/box1600/43123d080ef4fc643a829b558c714944f67a34fd.jpg",
      description:
        "Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.",
      rating: 5,
    },
    {
      id: 10,

      name: "The Lord of the Rings",
      posterurl:
        "https://images-na.ssl-images-amazon.com/images/I/A1yy50fuVnL._RI_.jpg",
      description:
        "The Lord of the Rings is a film series of three epic fantasy adventure films directed by Peter Jackson, based on the novel written by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring, The Two Towers, and The Return of the King.",
      rating: 5,
    },
    {
      id: 11,

      name: "Unacknowledged",
      posterurl: "https://m.media-amazon.com/images/I/41Na6GagCJL.jpg",
      description:
        "Disclosure Project founder Dr. Steven M. Greer offers evidence of extraterrestrial contact, including top-secret testimonials, documents and never-before-seen UFO footage.",
      rating: 4,
    },
    {
      id: 12,

      name: "Dachra",
      posterurl:
        "https://m.media-amazon.com/images/M/MV5BZTFkYWZkNTUtZGJlOC00MmE1LWEzZmMtNGJhZWU1NDFiYzE5XkEyXkFqcGdeQXVyNjUyNjYzNTE@._V1_FMjpg_UX1000_.jpg",
      description:
        "A young journalism student and her friends become trapped in an isolated village while trying to solve a gruesome criminal case that is over 25 years old.",
      rating: 5,
    },
    {
      id: 13,

      name: "Paper Lives",
      posterurl:
        "https://m.media-amazon.com/images/M/MV5BMWYxOTFlMjgtZTMyMS00OGRkLTk5ZGEtMDI2N2ZjN2EzZjg4XkEyXkFqcGdeQXVyMTIyMjI4OTkx._V1_.jpg",
      description:
        "Mehmet runs a solid waste warehouse in an impoverished Istanbul neighbourhood, where he helps everyone in need, especially homeless children and teenagers. One day, Mehmet meets a homeless 8-year-old boy who changes his life.",
      rating: 2,
    },
    {
      id: 14,

      name: "Seaspiracy",
      posterurl:
        "https://i0.wp.com/bevegan.be/wp-content/uploads/2021/04/seaspiracy-Netflix-documentaire-1030x1030-1.jpg?fit=1030%2C1030&ssl=1",
      description:
        "Seaspiracy is a 2021 documentary film about the environmental impact of fishing directed by and starring Ali Tabrizi, a British filmmaker. The film premiered on Netflix globally in March 2021 and garnered immediate attention in several countries.",
      rating: 5,
    },
  ]);


  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };


  return (
    <div className="App">
      <NavBar />
      <AddMovie addMovie={addMovie} />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/movies'>
          <MovieList movies={movies} />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/movie/:id'>
          <MovieScreen movies={movies} />
        </Route>

        <Route path='*'>
          <h1>Nakou3 404 </h1>
        </Route>


      </Switch>
      <Header />

      <AddMovie addMovie={addMovie} />


      <Footer />
    </div>
  );
}



export default App;
