import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from '../../servises/movies-api';
// import Loader from 'components/Loader/Loader';
// import Notification from 'components/Notification/Notification';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await fetchCredits(id);
        setCast(data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchCast();
  }, [id]);

  if (cast.length) {
    const elements = cast.map(({ profile_path, name, character, cast_id }) => (
      <li key={cast_id}>
        <img
          width="300"
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w300${profile_path}`
              : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
          }
          alt={name}
        />
        <p>{name}</p>
        <p>Character: {character}</p>
      </li>
    ));

    return <ul>{elements}</ul>;
  } else {
    return <h3>We don't have any cast for this movie.</h3>;
  }
};

export default Cast;
