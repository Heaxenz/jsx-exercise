const App = () => {
    return (
        <div>
            <TweetComponent name="Juan" date={new Date().toString()}  username="Man" message="Hello Everyone"/>
           
            <TweetComponent name="Riko" date={new Date().toString()}  username="RIKOBOI" message="Can somebody help?"/>
           
            <TweetComponent name="HEAXEN" date={new Date().toString()} username="heavensent" message="clean" image="https://i.kym-cdn.com/photos/images/original/001/714/202/a5e.jpg"/>
           

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
)