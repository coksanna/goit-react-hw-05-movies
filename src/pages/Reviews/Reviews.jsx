import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../servises/movies-api';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews(id);
        setReviews(data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchReviews();
  }, [id]);

  if (reviews.length) {
    const elements = reviews.map(({ author, content, id }) => (
      <li key={id}>
        <p>Author: {author}</p>
        <p>{content}</p>
      </li>
    ));

    return <ul>{elements}</ul>;
  } else {
    return <h3>We don't have any reviews for this movie.</h3>;
  }
};

export default Reviews;
