discribtion('helper test',function(){
    beforeEach(function(){
        billAmtInput.value = 20;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    });
    it ('should sum all tips on payments when sumPaymentTotal()',function(){
        expect(sumPaymentTotal(tipAmt)).toEqual(10);
    });

    it ('should calculate tip percent when calculateTipPercent ()',function(){

        expect (calculateTipPercent()).toEqual(50);
        expect (calculateTipPercent(100,10)).toEqual(10);
    });
});