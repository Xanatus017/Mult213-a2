// Header Component
function Header(props) {
    return (
        <div className="title">
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </div>
    );
}

// TodoItem Component
const TodoItem = (props) => {
    return (
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>{props.task}</td>
            <td>{props.status ? "Completed" : "Pending"}</td>
            <td>
                <button className="delete-btn">Delete</button> 
            </td>
        </tr>
    );
}

// TodoList Component
const TodoList = (props) => {
    // Create todo item array using map
    let todos_array = props.todos.map(todo => (
        <TodoItem
            task={todo.text}
            status={todo.completed}
        />
    ));

    return (
        <div className="todo-list">
            <table className="modern-table">
                <tr>
                    <th>Complete</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                {todos_array}

            </table>
        </div>

    );
}

// Card Component
const Card = (props) => {
    return (
<div className="modern-card">
            <img src={props.image} alt="Card" className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
                <h3 className="card-subtitle">{props.subtitle}</h3>
                <p className="card-text">{props.content}</p>
            </div>
        </div>
    );
}

// Footer Component
const Footer = (props) => {
    return (
        <div className="footer">
            <p>{props.message}</p>
            <p>{props.defaultmessage}</p>
        </div>
    );
}



// App Component
function App() {
    return (
        <div>
            <Header title="Welcome to My Website!" message="Thanks for visiting my site." />
            <TodoList todos={[
                { id: 1, text: "Complete React assignment", completed: false },
                { id: 2, text: "Study for math test", completed: false },
                { id: 3, text: "Do laundry", completed: true }
            ]} />
            <Card title="Explore Saskatoon" subtitle="Discover Opportunities" content="Dive into their lifestyle, education, and career trends." image="img/saskatoon.jpg" />
            <Footer message="Contact me at contact@mywebsite.com" defaultmessage="Copyright © 2023 My Website. All rights reserved." />
        </div>
    );
}

// React DOM Render
ReactDOM.render(<App />, document.getElementById('root'));
