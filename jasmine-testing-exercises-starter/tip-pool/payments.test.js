discribe('payments test', function (){
    beforeEach(function(){
        //starting values
        billAmtInput.value = 20
        tipAmtInput.value = 10

    });

    it ('should add new info on allPayments when submitPaymentIn()',function(){
        submitPaymentInfo()

        expect (Object.keys(allPayments).length).toEqual(1);
        expect (allPayments['payment1'].billAmt).toEqual(20);
        expect (allPayments['payment1'].TipAmt).toEqual(10);
        expect (allPayments['payment1'].totalPercent).toEqual(50)
    });

    it ('should not allow blank inputs',function(){
        billAmtInput.value = ''
        submitPaymentInfo()

        expect (Object.keys(allPayments).length).toEqual(0);
    });

    it ('should update paymentTable when appendPaymentTable()',function(){
        let test = curPayment();
        allPayments['payment1'] = test;
        appendPaymentTable(test);

        let paymentTable = document.querySelectorAll('#paymentTable tbody tr td');

        expect(paymentTable.length).toEqual(4);
        expect(paymentTable[0].innerText).toEqual('$20');
        expect(paymentTable[1].innerText).toEqual('$10');
        expect(paymentTable[2].innerText).toEqual('%50');
        expect(paymentTable[3].innerText).toEqual('X');
    });

    it ('should create a new payment on createCurPayment()', function(){
        let test = {
            billAmt: 20,
            tipAmt: 10,
            tipPercent: 50
        }

        expect (createCurPayment()),toEqual(test);
    });

    it ('should not create payemnt while creatCurPayment() values are blank',function(){
        billAmtInput.value = ''
        tipAmtInput.value = ''

        expect(createCurPayment()).toEqual(undefined);
    });

    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});