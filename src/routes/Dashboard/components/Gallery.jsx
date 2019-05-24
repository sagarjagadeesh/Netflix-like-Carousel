import React, {Component} from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import styled from "styled-components";


const ScrollElement = styled.div`
   background: black;
   padding: 0% 3%;
   overflow: auto;
   height: 100%;
   .alice-carousel {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    margin: auto;
  }
   
   .alice-carousel__wrapper {
    position: relative;
    width: 100%;
    height: 430px;
    box-sizing: border-box;
    overflow: hidden;
  }
   
  .alice-carousel__stage-item {
    width: 350px !important;
    height: 100%;
    position: relative;
    display: inline-block;
    vertical-align: top;
    white-space: normal;
    line-height: 0;
} 
   .alice-carousel__play-btn {
    display: inline-block;
    position: absolute;
    top: 75%;
    left: 20px;
}

.alice-carousel__dots {
    margin: -14% 0 5px;
    text-align: center;
    list-style: none;
    padding: 0;
}

`;

export class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            itemsInSlide: 1,
            responsive: {0: {items: 3}},
            happyCategory: [],
            sadCategory: [],
            angryCategory: [],
            boredCategory: [],
            exitedCategory: [],
            disappointedCategory: [],
            embarrassedCategory: [],
            drunkCategory: [],
        }
    }

    componentWillMount() {
        let happyCategoryUrl = 'http://api.giphy.com/v1/gifs/search?q=${happy}&api_key=IrmohbMKzmTvBaN5pvQXzuXhC4zEIy8P';
        fetch(happyCategoryUrl).then(response => response.json()).then((d) => {
            this.setState({
                happyCategory: d.data
            });
        });
        let sadCategoryUrl = 'http://api.giphy.com/v1/gifs/search?q=${sad}&api_key=IrmohbMKzmTvBaN5pvQXzuXhC4zEIy8P';
        fetch(sadCategoryUrl).then(response => response.json()).then((d) => {
            this.setState({
                sadCategory: d.data
            });
        });
        let angryCategoryUrl = 'http://api.giphy.com/v1/gifs/search?q=${angry}&api_key=IrmohbMKzmTvBaN5pvQXzuXhC4zEIy8P';
        fetch(angryCategoryUrl).then(response => response.json()).then((d) => {
            this.setState({
                angryCategory: d.data
            });
        });
        let boredCategoryUrl = 'http://api.giphy.com/v1/gifs/search?q=${bored}&api_key=IrmohbMKzmTvBaN5pvQXzuXhC4zEIy8P';
        fetch(boredCategoryUrl).then(response => response.json()).then((d) => {
            this.setState({
                boredCategory: d.data
            });
        });
        let disappointedCategoryUrl = 'http://api.giphy.com/v1/gifs/search?q=${disappointed}&api_key=IrmohbMKzmTvBaN5pvQXzuXhC4zEIy8P';
        fetch(disappointedCategoryUrl).then(response => response.json()).then((d) => {
            this.setState({
                disappointedCategory: d.data
            });
        });let drunkCategoryUrl = 'http://api.giphy.com/v1/gifs/search?q=${drunk}&api_key=IrmohbMKzmTvBaN5pvQXzuXhC4zEIy8P';
        fetch(drunkCategoryUrl).then(response => response.json()).then((d) => {
            this.setState({
                drunkCategory: d.data
            });
        });let embarrassedCategoryUrl = 'http://api.giphy.com/v1/gifs/search?q=${embarrassed}&api_key=IrmohbMKzmTvBaN5pvQXzuXhC4zEIy8P';
        fetch(embarrassedCategoryUrl).then(response => response.json()).then((d) => {
            this.setState({
                embarrassedCategory: d.data
            });
        });let exitedCategoryUrl = 'http://api.giphy.com/v1/gifs/search?q=${excited}&api_key=IrmohbMKzmTvBaN5pvQXzuXhC4zEIy8P';
        fetch(exitedCategoryUrl).then(response => response.json()).then((d) => {
            this.setState({
                exitedCategory: d.data
            });
        });
    }

    render() {
        const {happyCategory, sadCategory, angryCategory, boredCategory, disappointedCategory, embarrassedCategory, drunkCategory, exitedCategory, responsive} = this.state;
        return (
            <ScrollElement>
                <div>
                    <h3 style={{color: 'white'}}>CATEGORY: HAPPY</h3>
                    <AliceCarousel
                        duration={400}
                        autoPlay={true}
                        startIndex={0}
                        fadeOutAnimation={true}
                        playButtonEnabled={false}
                        responsive={responsive}
                        autoPlayInterval={2000}
                        autoPlayDirection="ltr"
                        autoPlayActionDisabled={true}
                        stopAutoPlayOnHover={true}
                        items={happyCategory.map(gal => <iframe src={gal.embed_url} height={250} width={250}/>)}
                    />
                </div>
                <div>
                    <h3 style={{color: 'white'}}>CATEGORY: SAD</h3>
                    <AliceCarousel
                        duration={400}
                        autoPlay={true}
                        startIndex={0}
                        fadeOutAnimation={true}
                        playButtonEnabled={false}
                        responsive={responsive}
                        autoPlayInterval={2000}
                        autoPlayDirection="ltr"
                        autoPlayActionDisabled={true}
                        stopAutoPlayOnHover={true}
                        items={sadCategory.map(gal => <iframe src={gal.embed_url} height={250} width={250}/>)}
                    />
                </div>
                <div>
                    <h3 style={{color: 'white'}}>CATEGORY: ANGRY</h3>
                    <AliceCarousel
                        duration={50}
                        autoPlay={true}
                        startIndex={0}
                        fadeOutAnimation={true}
                        playButtonEnabled={false}
                        responsive={responsive}
                        autoPlayInterval={2000}
                        autoPlayDirection="ltr"
                        autoPlayActionDisabled={true}
                        stopAutoPlayOnHover={true}
                        items={angryCategory.map(gal => <iframe src={gal.embed_url} height={250} width={250}/>)}
                    />
                </div>
                <div>
                    <h3 style={{color: 'white'}}>CATEGORY: BORED</h3>
                    <AliceCarousel
                        duration={400}
                        autoPlay={true}
                        startIndex={0}
                        fadeOutAnimation={true}
                        playButtonEnabled={false}
                        responsive={responsive}
                        autoPlayInterval={2000}
                        autoPlayDirection="ltr"
                        autoPlayActionDisabled={true}
                        stopAutoPlayOnHover={true}
                        items={boredCategory.map(gal => <iframe src={gal.embed_url} height={250} width={250}/>)}
                    />
                </div>
                <div>
                    <h3 style={{color: 'white'}}>CATEGORY: DISAPPOINTED</h3>
                    <AliceCarousel
                        duration={400}
                        autoPlay={true}
                        startIndex={0}
                        fadeOutAnimation={true}
                        playButtonEnabled={false}
                        responsive={responsive}
                        autoPlayInterval={2000}
                        autoPlayDirection="ltr"
                        autoPlayActionDisabled={true}
                        stopAutoPlayOnHover={true}
                        items={disappointedCategory.map(gal => <iframe src={gal.embed_url} height={250} width={250}/>)}
                    />
                </div>
                <div>
                    <h3 style={{color: 'white'}}>CATEGORY: EXITED</h3>
                    <AliceCarousel
                        duration={400}
                        autoPlay={true}
                        startIndex={0}
                        fadeOutAnimation={true}
                        playButtonEnabled={false}
                        responsive={responsive}
                        autoPlayInterval={2000}
                        autoPlayDirection="ltr"
                        autoPlayActionDisabled={true}
                        stopAutoPlayOnHover={true}
                        items={exitedCategory.map(gal => <iframe src={gal.embed_url} height={250} width={250}/>)}
                    />
                </div>
                <div>
                    <h3 style={{color: 'white'}}>CATEGORY: DRUNK</h3>
                    <AliceCarousel
                        duration={400}
                        autoPlay={true}
                        startIndex={0}
                        fadeOutAnimation={true}
                        playButtonEnabled={false}
                        responsive={responsive}
                        autoPlayInterval={2000}
                        autoPlayDirection="ltr"
                        autoPlayActionDisabled={true}
                        stopAutoPlayOnHover={true}
                        items={drunkCategory.map(gal => <iframe src={gal.embed_url} height={250} width={250}/>)}
                    />
                </div>
                <div>
                    <h3 style={{color: 'white'}}>CATEGORY: EMBARRASSED</h3>
                    <AliceCarousel
                        duration={400}
                        autoPlay={true}
                        startIndex={0}
                        fadeOutAnimation={true}
                        playButtonEnabled={false}
                        responsive={responsive}
                        autoPlayInterval={2000}
                        autoPlayDirection="ltr"
                        autoPlayActionDisabled={true}
                        stopAutoPlayOnHover={true}
                        items={embarrassedCategory.map(gal => <iframe src={gal.embed_url} height={250} width={250}/>)}
                    />
                </div>
            </ScrollElement>
        )
    }
}