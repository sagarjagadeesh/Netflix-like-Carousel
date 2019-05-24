import React, {Component} from 'react';
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: {
                data: [],
            },
            activeIndex: 0
        }
    }

    componentDidMount() {
        this.handleTermChange()
    }

    handleTermChange = () => {
        let url = 'http://api.giphy.com/v1/gifs/search?q=${term}&api_key=IrmohbMKzmTvBaN5pvQXzuXhC4zEIy8P';
        fetch(url).then(response => response.json()).then((data) => {
            this.setState({
                gifs: data
            });
        });
    };

    render() {
        const {gifs, activeIndex} = this.state;
        return (
            <StyleRoot>
                <Coverflow
                    displayQuantityOfSide={2}
                    navigation={true}
                    infiniteScroll={false}
                    enableHeading={true}
                    active={1}
                    media={{
                        '@media (max-width: 900px)': {
                            width: '100%',
                            height: '100vh'
                        },
                        '@media (min-width: 900px)': {
                            width: '100%',
                            height: '100vh'
                        }
                    }}
                >
                    {gifs.data.map((item) => <iframe src={item.embed_url} onLoad="hideLoading()" frameBorder="0"/>)}
                </Coverflow>
            </StyleRoot>
        )
    }
}