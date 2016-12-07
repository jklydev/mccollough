const React = window.React

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            page: this.start(),
            image: InductionRed()
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
                <Induction image={ this.state.image } next={ () => this.setState({ page: this.testImage() }) } />
                <script>setInterval(this.change(), 2000)</script>
            </div>
        );
    }

    change() {
        if (this.state.image === InductionRed()) {
            this.setState({ image: InductionGreen() })
        } else {
            this.setState({ image: InductionRed() })
        }
    }

    testImage() {
        return (
            <p>hi</p>
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
            { props.image }
            <button className="toTest" onClick={() => props.next() }>
                Test
            </button>
        </div>
    );
}

function InductionRed() {
    return (
        <div id="induction">
            <img src="induction1.png"></img>
        </div>
    );
}

function InductionGreen() {
    return (
        <div id="induction">
            <img src="induction2.png"></img>
        </div>
    );
}

ReactDOM.render(
    <App />
    ,document.getElementById("app")
);
