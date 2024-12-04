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
                <button>Delete</button> 
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
        <div>
            <table>
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
            <TodoList todos={[
                { id: 1, text: "Complete React assignment", completed: false },
                { id: 2, text: "Study for math test", completed: false },
                { id: 3, text: "Do laundry", completed: true }
            ]} />
            <Card title="My Card Title" subtitle="My Card Subtitle" content="This is the content of my card." image="https://example.com/my-image.jpg" />
            <Footer message="Contact me at contact@mywebsite.com" />
        </div>
    );
}

// React DOM Render
ReactDOM.render(<App />, document.getElementById('root'));
