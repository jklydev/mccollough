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
            <div id="gif">
                <img src="induction.gif"></img>
            </div>
            <button className="toTest" onClick={() => props.next() }>
                Test
            </button>
        </div>
    );
}

ReactDOM.render(
    <App />
    ,document.getElementById("app")
);
