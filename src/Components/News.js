import React, { Component } from 'react';
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 20,
        category: 'general'
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        setProgress: PropTypes.func, // Add this line for setProgress
    };

    capitalizeText = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        };
        document.title = this.capitalizeText(this.props.category) + ' - NewsReporting123';
    }

    async updateNews() {
        this.props.setProgress?.(30); // Use optional chaining here
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7ea35bb7af44ab69a581d02625c2b18&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress?.(50);
        let parsedData = await data.json();
        this.props.setProgress?.(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress?.(100);
    }

    componentDidMount() {
        this.updateNews();
    }

    handlePrevClick = () => {
        this.setState(prevState => ({ page: prevState.page - 1 }), () => {
            this.updateNews();
        });
    }

    handleNextClick = () => {
        this.setState(prevState => ({ page: prevState.page + 1 }), () => {
            this.updateNews();
        });
    }

    render() {
        return (
            <div>
                <div className="container my-3">
                    <h2 style={{ textAlign: 'center', margin: '50px' }}>Top {this.props.category} News</h2>
                    {this.state.loading && <Spinner />}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-3" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
                <div className="container d-flex justify-content-between mb-5">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
                </div>
            </div>
        )
    }
}

export default News;
