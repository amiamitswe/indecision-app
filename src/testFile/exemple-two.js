const user = {
    name: 'Amit Samadder',
    location: 'Bangladesh',
    age: 24
};

const getLocation = (location) => {
    if(location) 
        return <p>Location : {location}</p>;
    // return <p>Location : unknown</p>;
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) ? <p>Age : {user.age}</p> : <p>Age : Under Age</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot  = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);