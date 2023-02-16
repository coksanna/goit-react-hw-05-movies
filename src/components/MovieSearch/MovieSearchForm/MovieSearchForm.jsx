import { memo, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './movieSearchForm.module.css';

const MovieSearchForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ search: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ search: '' });
  };

  const { search } = state;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Search movies</label>
        <input
          value={search}
          onChange={handleChange}
          name="search"
          autoFocus
          placeholder="Search movies"
          required
        />
      </div>
    </form>
  );
};

export default memo(MovieSearchForm);

MovieSearchForm.defaultProps = {
  initialState: {
    search: '',
  },
};

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
