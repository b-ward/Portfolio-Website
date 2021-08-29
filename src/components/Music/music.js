import React, {Component} from 'react';
import './music.css';

class Music extends Component {
    render() {
        return(
            <div>
                <h3 className="music-title">Music</h3>
                <div className="soundcloud-wrapper">
                    <iframe className="soundcloud-audio" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1091373256&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style={{fontSize:10, color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/buu_au" title="BUU" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>BUU</a> · <a href="https://soundcloud.com/buu_au/underrated-minimal-tech-house-set-1" title="Underrated Minimal Tech House Set - 1" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Underrated Minimal Tech House Set - 1</a></div>
                    <iframe className="soundcloud-audio" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1055878936&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style={{fontSize:10, color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/buu_au" title="BUU" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>BUU</a> · <a href="https://soundcloud.com/buu_au/01-tropikana-set-1" title="01 Tropikana - Set 1" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>01 Tropikana - Set 1</a></div>
                    <iframe className="soundcloud-audio" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/878957851&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style={{fontSize:10, color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/buu_au" title="BUU" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>BUU</a> · <a href="https://soundcloud.com/buu_au/mix-3" title="Mix 3" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Mix 3</a></div>
                </div>
            </div>
        )
    }
}

export default Music;