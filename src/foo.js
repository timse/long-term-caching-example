import bar from './bar';
import preact from 'preact';
import jquery from 'jquery';
import('./async-bar').then( a => console.log(a));
import('./async-baz').then( a => console.log(a));

console.log(preact.toString() + "hello world again and again");