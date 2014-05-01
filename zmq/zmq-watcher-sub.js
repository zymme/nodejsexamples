/**
 * Subscriber node file
 */

'use strict';

const zmq = require('zmp');

//create subscriber endpoint
const subscriber = zmq.socket('sub');

//subscribe to all messages
subscriber.subscribe("");

