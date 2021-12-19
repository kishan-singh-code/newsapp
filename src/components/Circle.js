import React, { Component } from 'react'
import img_1 from "./img/kik.gif";
export class Circle extends Component {
    render() {
        return (
            <div>

                <div className='text-center'>
                    <img src={img_1} width="50" height="50" className="mx-4 mb-4 mt-5" alt="..." />
                </div>
            </div>
        )
    }
}

export default Circle
