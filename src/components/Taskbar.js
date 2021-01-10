import React, { Component } from 'react';
import logo from '../resources/winStart.jpg';
class Taskbar extends Component {

    onStart = () => {
        alert("Start clicked");
    }

    render() {
        return (
            <div>
                <div className="bar">
                    <div className="startLogo">
                        <img
                            src={logo}
                            style={{
                                width: '50px',
                                height: '35px',
                                margin: '2px'
                            }}
                            onClick={this.onStart}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Taskbar;