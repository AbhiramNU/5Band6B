const EventEmitter = require('events');
class MyEmitter extends EventEmitter{}
const myEmitter = new MyEmitter();

myEmitter.on('userLogin', (username) => {
    console.log(`User Logged in: ${username}`);
})

myEmitter.on('fileUploaded', (filename) => {
    console.log(`File Uploaded: ${filename}`);
})

function simulateUserActions() {
    const usernames = ['Manoj', 'Manohar', 'Manish'];
    const filenames = ['file.txt', 'document.pdf', 'book.docx'];
    const randomUsername = usernames[Math.floor(Math.random() * usernames.length)];
    const randomFile = filenames[Math.floor(Math.random() * filenames.length)];

    myEmitter.emit('userLogin', randomUsername);
    myEmitter.emit('fileUploaded', randomFile);
}
simulateUserActions();