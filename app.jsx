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
            <p>Explination of the McCollough Effect</p>
            <p>Explination of how to induce it</p>
            <p>Warning</p>
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
            <div id="gif">
                <img src="induction.gif"></img>
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
        let remaining = this.state.end - this.state.now
        let rawMinutes = (remaining / 60) | 0
        let rawSeconds = (remaining % 60) | 0
        let minutes = rawMinutes < 10 ? "0" + rawMinutes : rawMinutes
        let seconds = rawSeconds < 10 ? "0" + rawSeconds : rawSeconds
        let time = minutes + ":" + seconds
        return time
    }

    componentDidMount() {
        console.log(this.formatTime())
        setTimeout(this.setState({ now: this.getTime() }), 1000)
        setTimeout(console.log(this.formatTime()), 1000)
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
