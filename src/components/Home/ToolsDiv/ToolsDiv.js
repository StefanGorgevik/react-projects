import React from 'react'

import './ToolsDiv.css'
import DotsDiv from '../DotsDiv/DotsDiv'


class ToolsDiv extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flCount: 1,
            divs: [1, 2, 3]
        }
    }

    //   componentDidMount() {
    //     setInterval(() => {
    //         this.setState((prevState) => ({
    //             flCount: prevState.flCount + 1
    //         })
    //         )
    //         if (this.state.flCount === 4) {
    //             this.setState({
    //                 flCount: 1
    //             })
    //         }
    //     }, 5000);
    // }

    dotClicked = (i) => {
        console.log(i)
        this.setState({
            flCount: i
        })
    }

    render() {
        return (
            <div className={`tools-div tools-div-${this.state.flCount}`}>
                <h1 className="tools-title-h1">Tools</h1>
                {this.state.flCount === 1 ?
                    <div className="div1">
                        <h1>Budget Calculator</h1>
                        <h4>You can add new products separately</h4>
                        <p>Or</p>
                        <h4>You can add new groups of products every time you finish shopping</h4>
                    </div> : null}
                {this.state.flCount === 2 ?
                    <div className="div2">

                        <h1>Do you need an engine for card draw?</h1>
                        <h2>This one might help you</h2>
                        <h3>Try it!</h3>
                    </div> : null}

                {this.state.flCount === 3 ?
                    <div className="div3">
                        <h1>Stopwatch</h1>
                    </div> : null}
                <DotsDiv divs={this.state.divs} dotClicked={this.dotClicked} flCount={this.state.flCount} />
            </div>
        )
    }
}

export default ToolsDiv;