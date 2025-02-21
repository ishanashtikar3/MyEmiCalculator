function calculateEmi(){
    let loanamount = document.getElementById("loanamount").value;
    let interestrate = document.getElementById("interestrate").value;
    let loantenure = document.getElementById("loantenure").value;

    loanamount = parseFloat(loanamount);
    interestrate = parseFloat(interestrate);
    loantenure = parseInt(loantenure);

    if(isNaN(loanamount) || isNaN(interestrate) || isNaN(loantenure) || loanamount<=0 || interestrate<=0 || loantenure<=0)
    {
        document.getElementById("emiresult").innerText="Invalid Input";
        return;
    }


    let monthlyInterest = (interestrate/100)/12;
    let emi = (loanamount * monthlyInterest * Math.pow(1+monthlyInterest,loantenure)) / (Math.pow(1+monthlyInterest,loantenure)-1);

    document.getElementById("emiresult").innerText = emi.toFixed(2);

}