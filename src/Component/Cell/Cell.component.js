import React from 'react';
class Cell extends React.Component{
    render(){
        const cel = {
            background: 'rgb(6, 194, 243)',
            fontSize:'20px',
            color: '#fff',
            padding:'25px',
            marginLeft: '2px',
            height:'20px',
            display: 'inline-block',
            border:'1px solid #fff',
        }
        return(

    <div>
            <div style={cel}>
                x
            </div>
            <div style={cel}>
                x
            </div>
            <div style={cel}>
                x
            </div>
    </div>
        )
    }
}
export default Cell;