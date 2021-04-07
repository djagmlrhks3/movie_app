import React from 'react'
import './Detail.css'

class Detail extends React.Component {

    componentDidMount() {
        const { location, history } = this.props
        if (location.state === undefined) {
            history.push('/')
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return <div className="movie__detail">
                <h1>Title : {location.state.title}</h1>
                <img src={location.state.poster} />
                <p>{location.state.year}</p>
                <ul className="movie__genres">
                    {location.state.genres.map(genre => {
                       return <li>{genre}</li> 
                    })}
                </ul>
                <p>{location.state.summary}</p>
            </div>
        } else {
            return null;
        }
    }
}

export default Detail;