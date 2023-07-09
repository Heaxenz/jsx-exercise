const TweetComponent = ({username, name, date, message, image}) => {
    return (
        <div className="tweet">
            <span>{name}</span>
            <span className="username">{username}</span>
            <span className="date">{date}</span>
            <p>{message}</p>
            <img className="img"src={image} />
        </div>
    )
}