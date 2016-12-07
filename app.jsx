const React = window.React

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            page: this.start()
        }
    }

    start() {
        return (
            <Introduction next={() => this.setState({ page: this.showImages() }) } />
        );
    }
    
    showImages() {
        return (
            <Induction />
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

function Induction() {
    return (
        <div id="induction">
            <img src="induction1.png"></img>
            <img src="induction2.png"></img>
        </div>
    );
}

ReactDOM.render(
    <App />
    ,document.getElementById("app")
);
