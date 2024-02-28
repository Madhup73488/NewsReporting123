import React, { Component } from 'react'
import mainimage from './mainimage.png'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, publishedAt } = this.props
        return (
            <div>
                <div className="card" style={{ marginBottom: "20px" }}>
                    <img src={imageUrl ? imageUrl : mainimage} className="card-img-top" height="200px" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By <b style={{ color: '#f08508' }}>{author ? author : 'Unknown'}</b> at {(new Date(publishedAt)).toUTCString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">ReadMore</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
