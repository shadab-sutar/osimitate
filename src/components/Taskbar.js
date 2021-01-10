import logo from '../resources/winStart.jpg';
function Taskbar() {
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
                    />
                </div>
            </div>
        </div>
    )
}

export default Taskbar;