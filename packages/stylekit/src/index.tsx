import React from "react"

export interface ITestComponentProps {}

const TestComponent: React.FC<ITestComponentProps> = function () {
    return (
        <div>
            <button css={{ padding: "1rem", background: "black", color: "white" }}>test</button>
        </div>
    )
}

export default TestComponent
