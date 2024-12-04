// Header Component
function Header(props) {
    return (
        <div className="title">
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </div>
    );
}

// Card Component
const Card = (props) => {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>{props.content}</p>
            <img src={props.image} alt="Card" />
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
            <Card title="My Card Title" subtitle="My Card Subtitle" content="This is the content of my card." image="https://example.com/my-image.jpg" />
            <Footer message="Contact me at contact@mywebsite.com" />
        </div>
    );
}

// React DOM Render
ReactDOM.render(<App />, document.getElementById('root'));
