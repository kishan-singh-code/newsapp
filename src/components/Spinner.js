import React, { Component } from 'react'
import img_1 from "./img/ola.gif";
export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={img_1} width="105" height="22" className="mx-2" alt="..." />
            </div>
        )
    }
}

export default Spinner
