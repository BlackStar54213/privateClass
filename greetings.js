function greetings(name, hour) {
    if (hour > 0 && hour <= 12) {
        console.log('Hello' + ' ' + name + ' Good morning');
    } else if (hour > 12 && hour <= 18) {
        console.log('Hello' + ' ' + name + ' Good afternoon');
    } else if (hour > 18 && hour <= 24) {
        console.log('Hello' + ' ' + name + ' Good night');
    } else {
        console.log('This is not a valid statement');
    }
} greetings('flower', 20);