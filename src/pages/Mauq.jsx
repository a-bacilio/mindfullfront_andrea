import React, { Component } from "react";

class Mauq extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    formSubmit(event) {
        event.preventDefault();
        console.log(this.state.selectedOption)
    }

    render() {
        return (
<div>
            <div class="w-full max-w-96 mt-16 mb-8 h-fit p-10 overflow-auto bg-teal-600/90 rounded-lg text-white text-justify">
                <div class="font-raleway text-[30px] text-center">
                    <h1>mHealth app usability questionnaire </h1>
                    <p class="text-[20px] mt-16 mb-16">1. La aplicación fue facil de usar</p>
                    <div class="flex flex-row text-[15px] mb-2 justify-between text-center"><p>En desacuerdo</p>
                        <p>De acuerdo</p>
                    </div>
                    <div class="w-full max-w-96 mt-6 mb-8 h-full p-10 overflow-auto bg-zinc-200/90 rounded-lg text-white text-justify">
                        <form onSubmit={this.formSubmit}>
                            <div class="flex flex row text-black justify-between text-center text-[20px]">
                                <div className="radio">
                                    <label class="flex flex-col">
                                        <input
                                            type="radio"
                                            value="1"
                                            checked={this.state.selectedOption === "1"}
                                            onChange={this.onValueChange}
                                        />
                                        1
                                    </label>
                                </div>
                                <div className="radio">
                                    <label class="flex flex-col">
                                        <input
                                            type="radio"
                                            value="2"
                                            checked={this.state.selectedOption === "2"}
                                            onChange={this.onValueChange}
                                        />
                                        2
                                    </label>
                                </div>
                                <div className="radio">
                                    <label class="flex flex-col">
                                        <input
                                            type="radio"
                                            value="3"
                                            checked={this.state.selectedOption === "3"}
                                            onChange={this.onValueChange}
                                        />
                                        3
                                    </label>
                                </div>
                                <div className="radio">
                                    <label class="flex flex-col">
                                        <input
                                            type="radio"
                                            value="4"
                                            checked={this.state.selectedOption === "4"}
                                            onChange={this.onValueChange}
                                        />
                                        4
                                    </label>
                                </div>
                                <div className="radio">
                                    <label class="flex flex-col">
                                        <input
                                            type="radio"
                                            value="5"
                                            checked={this.state.selectedOption === "5"}
                                            onChange={this.onValueChange}
                                        />
                                        5
                                    </label>
                                </div>
                                <div className="radio">
                                    <label class="flex flex-col">
                                        <input
                                            type="radio"
                                            value="6"
                                            checked={this.state.selectedOption === "6"}
                                            onChange={this.onValueChange}
                                        />
                                        6
                                    </label>
                                </div>
                                <div className="radio">
                                    <label class="flex flex-col">
                                        <input
                                            type="radio"
                                            value="7"
                                            checked={this.state.selectedOption === "7"}
                                            onChange={this.onValueChange}
                                        />
                                        7
                                    </label>
                                </div></div>
                            {/*  
        <div>
          Selected option is : {this.state.selectedOption}
        </div>
        <button className="btn btn-default" type="submit">
          Submit
        </button>*/}
                        </form>
                    </div>
                </div>

            </div>
            <div className="flex justify-center items-center mt-8 mb-20">
                    <button className="bg-white w-1/2 opacity-65 p-2 rounded">Finalizar</button>
                </div>
</div>
        );
    }
}

export default Mauq;