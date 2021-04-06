// Movie 컴포넌트는 state가 필요하지 않으므로
// 클래스형 컴포넌트가 아닌, 함수형 컴포넌트로 작성

import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__genre">{genres}</p>
                <ul className="movie__genres">
                    {genres.map((genre, index) => {
                        return <li key={index} className="movie__genre">{genre}</li>
                    })}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>

    )
};

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;