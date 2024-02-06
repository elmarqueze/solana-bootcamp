import * as Buffer from '../node_modules/buffer/index';
import 'zone.js';

(window as any).global = window;
(window as any).process = {};
(window as any).process = window;
(window as any).process.browser = true;
(window as any).process.version = '';
(window as any).process.version = {node:false};
(window as any).global.Buffer = Buffer.Buffer;