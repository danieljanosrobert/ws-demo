const socket = new WebSocket('ws://localhost:10300');

socket.onmessage = ({ data }) => {
    console.log('Message from server ', data);
};
document.querySelector('button').onclick = () => {
    socket.send(document.querySelector('input').value);
}