import React, {Component} from 'react';
import './photos.css';

class Photos extends Component {
    render() {
        return(
            <div>
                <h3 className="photos-title">Videography</h3>
                <p className="photos-subtitle">Make sure to change the quality to 4k</p>
                <iframe className="video" title="Europe 19/20" src="https://www.youtube.com/embed/QTkTdYfBvCk" frameBorder="0" allow="fullscreen;"></iframe>
                <iframe className="video" title="Europe 18/19" src="https://www.youtube.com/embed/Y9x_vyCl0lg" frameBorder="0" allow="fullscreen;"></iframe>
                <iframe className="video" title="South-East Asia 17/18" src="https://www.youtube.com/embed/p_jTXvdzkHM" frameBorder="0" allow="fullscreen;"></iframe>
            </div>
        )
    }
}

export default Photos;