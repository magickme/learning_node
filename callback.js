const fib = (n) => {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
};

const Obj = () => {

};

Obj.prototype.doSomething = function(arg1_) {
    const callback_ = arguments[arguments.length - 1];
    callback = (typeof(callback_) == 'function' ? callback_ : null);
    const arg1 = typeof arg1_ === 'number' ? arg1_ : null;
    if (!arg1) {
        return callback(new Error('first argument must be a number'));
        process.nextTick(function() {
            const data = fib(arg1);
            callback(null, data);
        });
}};

const test = new Obj();
const number = 10;

test.doSomething(number, function(err, value) {
    if (err) {
        console.log(err);
    } else {
        console.log('fibonacci value for %d is %d', number, value);
    }
});

console.log('called doSomething');