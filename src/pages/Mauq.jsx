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
                <div className="w-full max-w-96 mt-16 mb-8 h-fit p-10 overflow-auto bg-teal-600/90 rounded-lg text-white text-justify">
                    <div className="font-raleway text-[30px] text-center">
                        <h1>mHealth app usability questionnaire </h1>
                        <p className="text-[20px] mt-16 mb-8">1. La aplicación fue fácil de usar</p>
                        <div className="flex flex-row text-[15px] mb-2 justify-between text-center"><p>En desacuerdo</p>
                            <p>De acuerdo</p>
                        </div>
                        <div className="w-full max-w-96 mt-6 mb-8 h-full p-10 overflow-auto bg-zinc-200/90 rounded-lg text-white text-justify">
                            <form onSubmit={this.formSubmit}>
                                <div className="flex flex row text-black justify-between text-center text-[20px]">
                                    <div className="radio">
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                        <p className="text-[20px] mt-16 mb-8">2. Fue fácil para mi aprender a usar la aplicación.</p>
                        <div className="flex flex-row text-[15px] mb-2 justify-between text-center"><p>En desacuerdo</p>
                            <p>De acuerdo</p>
                        </div>
                        <div className="w-full max-w-96 mt-6 mb-8 h-full p-10 overflow-auto bg-zinc-200/90 rounded-lg text-white text-justify">
                            <form onSubmit={this.formSubmit}>
                                <div className="flex flex row text-black justify-between text-center text-[20px]">
                                    <div className="radio">
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                        
                        <p className="text-[20px] mt-16 mb-8">3. Me gusta la interfaz de la aplicación.</p>
                        <div className="flex flex-row text-[15px] mb-2 justify-between text-center"><p>En desacuerdo</p>
                            <p>De acuerdo</p>
                        </div>
                        <div className="w-full max-w-96 mt-6 mb-8 h-full p-10 overflow-auto bg-zinc-200/90 rounded-lg text-white text-justify">
                            <form onSubmit={this.formSubmit}>
                                <div className="flex flex row text-black justify-between text-center text-[20px]">
                                    <div className="radio">
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                        </div><p className="text-[20px] mt-16 mb-8">4. La información en la aplicación estaba bien organizada, por lo que pude encontrar la información que necesitaba con facilidad.</p>
                        <div className="flex flex-row text-[15px] mb-2 justify-between text-center"><p>En desacuerdo</p>
                            <p>De acuerdo</p>
                        </div>
                        <div className="w-full max-w-96 mt-6 mb-8 h-full p-10 overflow-auto bg-zinc-200/90 rounded-lg text-white text-justify">
                            <form onSubmit={this.formSubmit}>
                                <div className="flex flex row text-black justify-between text-center text-[20px]">
                                    <div className="radio">
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                        </div><p className="text-[20px] mt-16 mb-8">5. El tiempo dedicado a usar la aplicación ha sido adecuado para mí.</p>
                        <div className="flex flex-row text-[15px] mb-2 justify-between text-center"><p>En desacuerdo</p>
                            <p>De acuerdo</p>
                        </div>
                        <div className="w-full max-w-96 mt-6 mb-8 h-full p-10 overflow-auto bg-zinc-200/90 rounded-lg text-white text-justify">
                            <form onSubmit={this.formSubmit}>
                                <div className="flex flex row text-black justify-between text-center text-[20px]">
                                    <div className="radio">
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                        </div><p className="text-[20px] mt-16 mb-8">6. Usaría esta aplicación de nuevo.</p>
                        <div className="flex flex-row text-[15px] mb-2 justify-between text-center"><p>En desacuerdo</p>
                            <p>De acuerdo</p>
                        </div>
                        <div className="w-full max-w-96 mt-6 mb-8 h-full p-10 overflow-auto bg-zinc-200/90 rounded-lg text-white text-justify">
                            <form onSubmit={this.formSubmit}>
                                <div className="flex flex row text-black justify-between text-center text-[20px]">
                                    <div className="radio">
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                        </div><p className="text-[20px] mt-16 mb-8">7. En general estoy satisfech@ con esta aplicación.</p>
                        <div className="flex flex-row text-[15px] mb-2 justify-between text-center"><p>En desacuerdo</p>
                            <p>De acuerdo</p>
                        </div>
                        <div className="w-full max-w-96 mt-6 mb-8 h-full p-10 overflow-auto bg-zinc-200/90 rounded-lg text-white text-justify">
                            <form onSubmit={this.formSubmit}>
                                <div className="flex flex row text-black justify-between text-center text-[20px]">
                                    <div className="radio">
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                        </div><p className="text-[20px] mt-16 mb-8">8. Cuando cometí un error en el uso de la aplicación, lo corregí de forma fácil y rápida.</p>
                        <div className="flex flex-row text-[15px] mb-2 justify-between text-center"><p>En desacuerdo</p>
                            <p>De acuerdo</p>
                        </div>
                        <div className="w-full max-w-96 mt-6 mb-8 h-full p-10 overflow-auto bg-zinc-200/90 rounded-lg text-white text-justify">
                            <form onSubmit={this.formSubmit}>
                                <div className="flex flex row text-black justify-between text-center text-[20px]">
                                    <div className="radio">
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                        </div><p className="text-[20px] mt-16 mb-8">9. La aplicación reconoció y brindó información adecuadamente para informarme sobre el progreso de mis acciones.</p>
                        <div className="flex flex-row text-[15px] mb-2 justify-between text-center"><p>En desacuerdo</p>
                            <p>De acuerdo</p>
                        </div>
                        <div className="w-full max-w-96 mt-6 mb-8 h-full p-10 overflow-auto bg-zinc-200/90 rounded-lg text-white text-justify">
                            <form onSubmit={this.formSubmit}>
                                <div className="flex flex row text-black justify-between text-center text-[20px]">
                                    <div className="radio">
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                        </div><p className="text-[20px] mt-16 mb-8">10. La navegación era consistente (efectiva) al ir de una pantalla a otra.</p>
                        <div className="flex flex-row text-[15px] mb-2 justify-between text-center"><p>En desacuerdo</p>
                            <p>De acuerdo</p>
                        </div>
                        <div className="w-full max-w-96 mt-6 mb-8 h-full p-10 overflow-auto bg-zinc-200/90 rounded-lg text-white text-justify">
                            <form onSubmit={this.formSubmit}>
                                <div className="flex flex row text-black justify-between text-center text-[20px]">
                                    <div className="radio">
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                        </div><p className="text-[20px] mt-16 mb-8">11. La interfaz de la aplicación me permitió usar todas las funciones que ofrece (como ingresar información, responder a los recordatorios y visualizar datos).</p>                    
                        <div className="flex flex-row text-[15px] mb-2 justify-between text-center"><p>En desacuerdo</p>
                            <p>De acuerdo</p>
                        </div>
                        <div className="w-full max-w-96 mt-6 mb-8 h-full p-10 overflow-auto bg-zinc-200/90 rounded-lg text-white text-justify">
                            <form onSubmit={this.formSubmit}>
                                <div className="flex flex row text-black justify-between text-center text-[20px]">
                                    <div className="radio">
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                        </div><p className="text-[20px] mt-16 mb-8">12. La aplicación tiene todas las funciones y capacidades que esperaba.</p>
                        <div className="flex flex-row text-[15px] mb-2 justify-between text-center"><p>En desacuerdo</p>
                            <p>De acuerdo</p>
                        </div>
                        <div className="w-full max-w-96 mt-6 mb-8 h-full p-10 overflow-auto bg-zinc-200/90 rounded-lg text-white text-justify">
                            <form onSubmit={this.formSubmit}>
                                <div className="flex flex row text-black justify-between text-center text-[20px]">
                                    <div className="radio">
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                                        <label className="flex flex-col">
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
                        </div></div>

                </div>

                <div className="flex justify-center items-center mt-8 mb-8">
                <button className='bg-white mt-14 opacity-65 text-[20px] text-black px-8 py-2 rounded mb-4 border border-zinc-500' onClick={event =>  window.location.href='../dinosaurios/6'}>Finalizar</button>       </div>
            </div>
        );
    }
}

export default Mauq;