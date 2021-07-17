/* 79. JavaScript Events:

=> Intro:
We use different type of events in our HTML document to execute javascript code.
There are many different types of events but some common events includes:
        -- Mouse Clicks
        -- Mouse Overs
        -- Mouse Out
        -- Key Down
        -- Document Load

*/

// Mouse Click Event:
function mouseClick(){
    document.getElementById('mouseClick').innerHTML = Date();
}

// Mouse Over Event:
function mouseOver(){
    document.getElementById('mouseOver').innerHTML = Date();
}