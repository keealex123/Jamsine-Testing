discribtion('helper test', function () {
    beforeEach(function () {
        billAmtInput.value = 20;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    });
    it('should sum all tips on payments when sumPaymentTotal()', function () {
        expect(sumPaymentTotal(tipAmt)).toEqual(10);
    });

    it('should calculate tip percent when calculateTipPercent ()', function () {

        expect(calculateTipPercent()).toEqual(50);
        expect(calculateTipPercent(100, 10)).toEqual(10);
    });
    it('should total bill amount of all payments when sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(20);

        billAmtInput.value = 300;
        tipAmtInput.value = 25;

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(320);
    });
    it('should sum total tip percent on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(50);

        billAmtInput.value = 300;
        tipAmtInput.value = 25;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(29);
    });
});