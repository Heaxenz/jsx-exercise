const Person = ({name, age, hobbies}) => {
    let reply;
    if(age > 18) {
      reply = "please go vote!"  
    } else {
        reply = "you must be 18"
    };
    return (
        <div>
        <p>Learn some information about this person:</p>
        <span>{name.slice(0, 6)} {age} years old</span>
        <ul>
         Hobbies:
         {hobbies.map(hob => (
            <li>
                {hob}
            </li>
         ))}
        </ul>
        <h3>{reply}</h3>
        </div> 
    )
}