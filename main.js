console.log("Hello, World");

// copied from one of Ana's repo :)

document.write(window.location.search);
/*
This ^^ causes an alert that won't be reported in the PR because
it was already in the code.
*/

// 2
require('crypto').createCipheriv('aes-256-cfb', '0123456789bbbbbb0123456789bbbbbb', '0123456789bbbbbb');
