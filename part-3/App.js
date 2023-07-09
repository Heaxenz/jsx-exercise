const App = () => {
    return (
        <div>
        <Person name="Ferbaroniiiii" 
        age={40}
        hobbies={['Basketball', 'Baseball']}/>

        <Person name="Earl" 
        age={10}
        hobbies={['Eating candy', 'Smoking cigarettes', 'Crying', 'Art']}/>

        <Person name="Paul" 
        age={90}
        hobbies={['Driving', 'Drinking', 'Watching T.V', 'Screaming']}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);