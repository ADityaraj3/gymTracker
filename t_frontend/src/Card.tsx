import React from "react";

type MyProps = {
    exercise: String,
    weight: Number,
    type: String,
    reps: Number,
};
type MyState = {
    count: number; // like this
};
class Card extends React.Component<MyProps> {
    state: MyState = {
        // optional second annotation for better type inference
        count: 0,
    };
    render() {
        return (
            <div>
                <h2>excercise: {this.props.exercise}</h2>
                <h3>with weight: {this.props.weight.toString()}</h3>
                <h3>of type: {this.props.type}</h3>
                <h3>with reps: {this.props.reps.toString()}</h3>
            </div>
        );
    }
}

export default Card;