const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Juan"/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)