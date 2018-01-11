import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

const Movie = ({title, poster, genres, synopsis}) => (
    <div className="Movie">
        <div className="Movie__Column">
            <MoviePoster poster={poster} alt={title} />
        </div>
        <div className="Movie__Column">
            <h1>{title}</h1>
            <div className="Movie__Genres">
                { genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>) }
            </div>
            <div className="Movie__Synopsis">
                <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                        />
            </div>
        </div>
    </div>
);



const MovieGenre = ({genre}) => {
    return (
        <span className="Movie__Genre">{genre} </span>
    )
}



/**
 * Dumb Component - stateless Component
 * @param {string} poster - this.props.poster
 */
const MoviePoster = ({poster, alt}) => {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

Movie.propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;