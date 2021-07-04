import React, {Component} from "react";
import  './MemeGenerator.css'


class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allMemeImages: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({allMemeImages: memes})
            })
            .then(() => {
                    const randNum = Math.floor(Math.random() * this.state.allMemeImages.length)
                    const randMemeImg = this.state.allMemeImages[randNum].url
                    this.setState({randomImg: randMemeImg})
                }
            )

    }

    handleChange(event){
        const {name,value} = event.target
        this.setState({[name]: value})
    }
    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random()* this.state.allMemeImages.length)
        const randMemeImg = this.state.allMemeImages[randNum].url
        this.setState({randomImg: randMemeImg})
    }
    render() {
        return (
            <div className="container">
                <form className="meme-form" onSubmit={this.handleSubmit} >
                    <div className="inputContainer">
                        <input
                            className="textBox"
                            type="text"
                            name="topText"
                            placeholder="Top Text"
                            value={this.state.topText}
                            onChange={this.handleChange}
                        />
                        <input
                            className="textBox"
                            type="text"
                            name="bottomText"
                            placeholder="Bottom Text"
                            value={this.state.bottomText}
                            onChange={this.handleChange}
                        />
                        <button>Generate</button>
                    </div>
                    <div className="meme">
                        <img className="image" src={this.state.randomImg} alt=""/>

                            <h2 className="top">{this.state.topText}</h2>
                            <h2 className="bottom">{this.state.bottomText}</h2>


                    </div>
                </form>
            </div>
        )
    }
}

export default MemeGenerator
