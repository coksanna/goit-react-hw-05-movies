import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../servises/movies-api';

const SingleMoviePageReviews = () => {
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

  return (
    <>
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SingleMoviePageReviews;
