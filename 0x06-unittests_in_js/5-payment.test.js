// 5-payment.test.js
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    let calculateNumberStub;
    let consoleSpy;

    beforeEach(() => {
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        calculateNumberStub.restore();
        consoleSpy.restore();
    });

    it('should log the correct message with the sum of 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120');
        sinon.assert.calledOnce(consoleSpy);
    });

    it('should log the correct message with the sum of 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);
        sinon.assert.calledWithExactly(consoleSpy, 'The total is: 20');
        sinon.assert.calledOnce(consoleSpy);
    });
});

