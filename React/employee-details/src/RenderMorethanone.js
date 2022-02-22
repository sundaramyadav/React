import ReactDOM from 'react-dom';
import React from 'react';
ReactDOM.render((
    <div>
        <HeaderComponent></HeaderComponent>
        <ContentComponent></ContentComponent>
        <FooterComponent></FooterComponent>
    

    </div>
    ),document.getElementById("root"))

function HeaderComponent()
{
    return(
        <div>
        <h1> this is header</h1>
        </div>
    )
}

function ContentComponent()
{
    return(
        <div>
        <h1> this is ContentComponent</h1>
        </div>
    )
}

function FooterComponent()
{
    return(
        <div>
        <h1> this is FooterComponent</h1>
        </div>
    )
}