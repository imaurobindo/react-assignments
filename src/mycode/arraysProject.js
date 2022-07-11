import React from "react";

export default class ArraysProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasksArr: [],
            tasksComp: [],
            taskInput: ""

        }
    }


    handleInput = (e) => {
        this.setState({
            taskInput: e.target.value
        })
    }

    pushTask = () => {
        var temp = this.state.tasksArr;
        temp.push(this.state.taskInput);
        this.setState({
            tasksArr: temp,
            taskInput: ""
        })
    }

    pushComp = (single, index) => {
        var temp1 = this.state.tasksComp;
        temp1.push(this.state.tasksArr[index]);
        this.setState({
            tasksComp: temp1
        })
        
    }

    handleComplete = (single, index) => {
        var temp = this.state.tasksArr;
        temp.splice(index, 1);
        
        this.setState({
            tasksArr: temp
        })
    }

   

    render() {
        return (
            <div>
                <input
                    value={this.state.taskInput}
                    onChange={this.handleInput}
                />
                <button
                    onClick={this.pushTask}
                >
                    Add task
                </button>

                <h1>Tasks to do</h1>
                <div>
                    <ol>
                        {this.state.tasksArr.map((single, index) => {
                            return (
                                <li>
                                    {single}
                                    <button
                                        onClick={(e) => {
                                            this.pushComp(single, index);
                                            this.handleComplete(single, index);
                                            
                                            
                                        }}
                                    >
                                        Completed
                                    </button>
                                </li>
                            )
                        })}
                    </ol>
                    <br />
                    <br />

                    <h1>Tasks Completed</h1>
                    <div>
                        <ol>
                            {this.state.tasksComp.map((single, index) => {
                                return (
                                    <li>
                                        {single}

                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}