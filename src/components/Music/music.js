import React, {Component} from 'react';
import './music.css';

class Music extends Component {
    render() {
        return(
            <div>
                <h3 className="music-title">Music</h3>
                <div className="soundcloud-wrapper">
                    <iframe className="soundcloud-audio" width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbrendon-ward%2Fnew-tech-house-mix%2F" frameborder="0" ></iframe>
                    <iframe className="soundcloud-audio" width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbrendon-ward%2Fno-preparation-tech-house-mix%2F" frameborder="0" ></iframe>
                    <iframe className="soundcloud-audio" width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbrendon-ward%2Funderrated-minimal-tech-house-set%2F" frameborder="0" ></iframe>
                    <iframe className="soundcloud-audio" width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbrendon-ward%2Ftropikana-set%2F" frameborder="0" ></iframe>
                    <iframe className="soundcloud-audio" width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbrendon-ward%2Fmix-2%2F" frameborder="0" ></iframe>
                    <iframe className="soundcloud-audio" width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbrendon-ward%2Fmix-1%2F" frameborder="0" ></iframe>
                </div>
            </div>
        )
    }
}

export default Music;