import React from "react";

class Truck extends React.Component {
    constructor() {
        super()
        console.log("constructor works")
    }
    render() {
        console.log("render works")
        return <h3>Human</h3>
    }
    componentDidMount() {
        console.log("componentDidMount works")
        console.log()
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate works")
        return true
    }
}

export default Truck