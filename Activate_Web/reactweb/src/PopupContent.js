import React, {Component} from 'react';
 
class PopupContent extends Component {
    render(){
        return(
            <div className="dimmed_layer_wrapper">
                <div className="full_layer">
                    <div className="common_alert"> 
                        <h2>위험신호가 감지되었습니다 !</h2>
                        <div></div>
                        <div>
                            <button type="button" onClick={this.props.onClose}>닫기</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PopupContent;