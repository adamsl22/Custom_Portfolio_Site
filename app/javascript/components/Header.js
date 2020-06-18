import React from 'react';
import Adam_pic from '../../assets/images/Adam_pic.JPG'

export default function Header(){
    return(
        <div id="header">
            <div align="left" id="header-img"><img src={Adam_pic} width={100} /></div>
            <div id="header-text">
                <h1>Welcome!</h1>
                <h2>I am a software engineer building websites and web apps.</h2>
            </div>
        </div>
    )
}