navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
    document.getElementById("camera").srcObject = stream;
}).catch(() => {
    alert("could not connect stream");
});