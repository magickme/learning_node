process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
    const input = process .stdin.read();

    if (input !== null) {
        //echo the text
        process.stdout.write(input);

        const command = input.toString().trim();
        if (command === 'exit') {
            process.exit(0);
        }
    }
});
