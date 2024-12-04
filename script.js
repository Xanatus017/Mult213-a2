// Header Component
function Header(props) {
    return (
        <div className="title">
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </div>
    );
}


// Footer Component
const Footer = (props) => {
    return (
        <div className="footer">
            <p>{props.message}</p>
        </div>
    );
}



// App Component
function App() {
    return (
        <div>
            <Header title="Welcome to My Website!" message="Thanks for visiting my site." />
            <Footer message="Contact me at contact@mywebsite.com" />
        </div>
    );
}

// React DOM Render
ReactDOM.render(<App />, document.getElementById('root'));
