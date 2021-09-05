import React, {Component} from 'react';
class ScrollBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }
    scrollToBottom =() =>{
        const scrollHeight = this.box.scrollHeight;
        const clientHeight = this.box.clientHeight;

        this.box.scrollTop = scrollHeight - clientHeight;

    }

    date(timestamp){
        timestamp = timestamp * 1000
        const date = new Date(timestamp)
        var year = date.getFullYear().toString()
        var month = (date.getMonth()+1).toString()
        var day = date.getDate().toString()
        var hour = date.getHours().toString()
        var minutes = date.getMinutes().toString()
        return year+"년 " + month+"월 " + day+"일 " + hour+":" + minutes
    }
    render(){
        const largeText={
            color:"red"
        }
        const smallText={
            fontSize:15
        }
        const apiData = this.props.data;
        const text = apiData && apiData.map((item) =>
            <div style={{background: 'white'}}>
                <div style={largeText}>{this.date(item['timestamp'])}에 {(item['danger']=='0'?"불안":"위험")}신호가 감지되었습니다.</div>
                <div style={smallText}>{item['birthDay']} {item['gender']}</div>
                <div style={smallText}>lat: {item['latitude']}</div>
                <div style={smallText}>lng: {item['longitude']}</div>
            </div>
        );
        const style={
            border: '1px solid black',
            height: '400px',
            width: '25%',
            overflow: 'auto',
            position: 'relative',
            float: 'right'
        };

        const innerStyle={
            width: '100%',
            height: '100%',
            background: 'white',
            color: 'black'
        }

        return (
            <div style={style} ref={(ref) => {this.box=ref}}>
                <div style={innerStyle}>
                    {text}
                </div>
            </div>
        )
    }
}

export default ScrollBox;