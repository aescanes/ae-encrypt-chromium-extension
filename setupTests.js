const { TextEncoder, TextDecoder } = require('text-encoding-utf-8');

if (typeof TextEncoder !== 'undefined') {
  global.TextEncoder = TextEncoder;
}

if (typeof TextDecoder !== 'undefined') {
  global.TextDecoder = TextDecoder;
}