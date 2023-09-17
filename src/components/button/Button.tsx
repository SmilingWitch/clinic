import "./Button.css"

function Button(props:{name:string}) {
    return (
        <div className="btn">{props.name}</div>
    );
}

export default Button ;