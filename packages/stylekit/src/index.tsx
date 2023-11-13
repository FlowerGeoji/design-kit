import React from "react"

export interface ITestComponentProps {}
const TestComponent: React.FC<ITestComponentProps> = function () {
    return (
        <div>
            <button>test</button>
        </div>
    )
}

export default TestComponent
