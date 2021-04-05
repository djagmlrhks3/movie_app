// Movie 컴포넌트는 state가 필요하지 않으므로
// 클래스형 컴포넌트가 아닌, 함수형 컴포넌트로 작성

import React from 'react';
import PropTypes from 'prop-types';

function Movie({ id, title, year, summary, poster }) {
    return <h4>{title}</h4>;
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;