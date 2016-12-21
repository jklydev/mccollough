const React = window.React

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            page: this.start(),
        }
    }

    start() {
        return (
            <Introduction next={ () => this.setState({ page: this.showImages() }) } />
        );
    }
    
    showImages() {
        return (
            <div>
                <Induction next={ () => this.setState({ page: this.testImage() }) } />
            </div>
        );
    }

    testImage() {
        return (
           <Test />
        );
    }

    render() {
        return (
            this.state.page
        );
    }
    
}

function Introduction(props) {
    return (
        <div id="introduction">
            <h1>McCollough</h1>
            <div id="copy">
                <p>The <a href="https://en.wikipedia.org/wiki/McCollough_effect">McCullough</a> <a href="http://people.brandeis.edu/~sekuler/SensoryProcessesMaterial/McColloughArticle1965.pdf">(1965)</a> effect is visual phenomenon in which black and white gratings appear colored with one of two colors depending upon their orientation. In order to induce it one must spend several minutes looking at alternating horizontal and vertical gratings, each interspersed with a different (preferably complementary) color.</p>
                <p>The most notable part of the effect is how long lasting it can be, while an induction period of two to four minutes will result in the effect persisting up to an hour, an induction period of 15 minutes can result in the effect persisting for over three months <a href="http://psycnet.apa.org/journals/xhp/1/4/323/">(Jones, Holding. 1975)</a>.</p>
                <p>If you're interested in inducing the McCollough effect in yourself just click start below and look directly at the centre of the images for at least two minutes. Since you're going to be here a while you might want to listen to something, might I recommend the Radiolab episode on <a href="http://www.radiolab.org/story/211119-colors/">color?</a></p>
            </div>
            <button className="toImages" onClick={() => props.next()}>
                Start
            </button>
        </div>
    );
}

function Induction(props) {
    return(
        <div id="induction">
            <div id="button">
                <Timer />
                <button className="toTest" onClick={() => props.next() }>
                    Test
                </button>
            </div> 
            <div id="induction-gif">
                <img id="gif" src="induction.gif"></img>
            </div>
        </div>
    );
}

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            now: this.getTime(),
            end: this.getTime() + 180
        }
    }

    getTime() {
        return (Date.now()/1000)
    }

    formatTime() {
        let remaining = Math.abs(this.state.end - this.state.now)
        let rawMinutes = (remaining / 60) | 0
        let rawSeconds = (remaining % 60) | 0
        let minutes = rawMinutes < 10 ? "0" + rawMinutes : rawMinutes
        let seconds = rawSeconds < 10 ? "0" + rawSeconds : rawSeconds
        let time = minutes + ":" + seconds
        return time
    }

    componentDidMount() {
        setInterval(() => this.setState({ now: this.getTime() }), 1000)
    }

    render() {
        return(
            <div id="countdown">
                { this.formatTime() }
            </div>
        )
    }
}

function Test() {
    return (
        <div id="test">
            <img src="test.png"></img>
        </div>
    );
}



ReactDOM.render(
    <App />
    ,document.getElementById("app")
);
