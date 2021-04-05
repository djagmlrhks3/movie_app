// Movie 컴포넌트는 state가 필요하지 않으므로
// 클래스형 컴포넌트가 아닌, 함수형 컴포넌트로 작성

import React from 'react';
import PropTypes from 'prop-types';

function Movie({ title, year, summary, poster }) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title}/>
            <div class="movie__data">
                <h3 class="movie__title" style={{ backgroundColor: 'red' }}>{title}</h3>
                <h5 class="movie__year">{year}</h5>
                <p class="movie__summary">{summary}</p>
            </div>
        </div>

    )
};

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string,
};

export default Movie;