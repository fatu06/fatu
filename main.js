function calculateTip()
        {
            const billAmount = parseInt(document.getElementById("amount").value);
            const numOfPeople = document.getElementById("people").value;
            const service = document.getElementById("service").value;

            const tenPercentofBill = (billAmount * 0.1);

            const tipTotal = (tenPercentofBill / 2) + tenPercentofBill;

            const perPerson = (tipTotal / numOfPeople);

             alert("Your suggested tip amount is: " + perPerson + " per person." + "Your service feedback was: " + service + ".");


        }