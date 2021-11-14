export function log(argv, ...args) {
    if (argv.silent) {
        return;
    }
    console.log(...args);
}