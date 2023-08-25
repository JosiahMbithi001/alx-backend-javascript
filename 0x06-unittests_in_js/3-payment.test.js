// 3-payment.test.js
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with correct arguments', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20);
        calculateNumberSpy.restore(); // Restore the original function after testing
    });
});

