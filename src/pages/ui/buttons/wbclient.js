let websocket = null;

const initwebsocket=(path)=>{
    //var path = "ws://127.0.0.1:9001/clicktocall";
    if (!path){
        path = 'ws://localhost:9001/clicktocall';
    }

    //browser supports WebSocket
    if (window.WebSocket) {
                // Method of Transferring Parameters through Path
        websocket = new WebSocket(path);

    }
    else {
        alert(' the browser not support websocket')
    }


}

//send message
const send=(message)=> {
    websocket.send(message);
}

export {initwebsocket,send}