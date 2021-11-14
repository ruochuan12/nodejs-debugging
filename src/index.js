import { log } from './utils.js';
import minimist from 'minimist'
const argv = minimist(process.argv.slice(2), {
    alias: {
        s: 'silent'
    },
    boolean: ['silent'],
});

function run(){
    console.log('关注公众号若川视野，加我微信：ruochuan12。\n参与源码共读，每周一起学200行左右的源码，共同进步\n');
    console.log('argv', argv);
    console.log('\n');
    log(argv, '如果是静默模式，这句不会输出');
}
run();