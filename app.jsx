const React = window.React

class App extends React.Component {
    constructor() {
        super();
        this.state = introduction()
    }

    render() {
        return (
            this.state
        );
    }
    
}

function introduction() {
    return(
        <div id="introduction">
            <h1>McCollough</h1>
            <p>Explination of the McCollough Effect</p>
            <p>Explination of how to induce it</p>
            <p>Warning</p>
        </div>
    );
}

ReactDOM.render(
    <App />
    ,document.getElementById("app")
);
