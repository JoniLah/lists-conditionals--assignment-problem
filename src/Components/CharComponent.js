import React from "react";

const char = (props) => {
    const charstyle = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black",
        background: "linear-gradient(green, #fff)"
    };

    return (
        <div style={charstyle} onClick={props.click}>
            {props.character}
        </div>
    );
}

export default char;