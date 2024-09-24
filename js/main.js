// Blog BTN
function homeToBlog(){
    window.location.assign('blog.html');
    document.getElementById('blogBalance').innerText = getElementInnerTextId('mainBalance');
}
// NOAKHALI DONATION SECTION JS
document.getElementById('noakhaliDonate').addEventListener('click', function (event) {
    event.preventDefault();
    let donationAmount = getElementValueId('donatAmountNoakhali');
    let totalDonation = getElementInnerTextId('noakhaliTotal');
    let myCurrentBalance = getElementInnerTextId('mainBalance');

    if (isNaN(donationAmount) === true) {
        alert('Invalid Amount');
        document.getElementById('donatAmountNoakhali').value = '';
        return;
    }
    donationAmount = parseFloat(donationAmount);
    totalDonation = parseFloat(totalDonation);
    myCurrentBalance = parseFloat(myCurrentBalance);
    if (donationAmount < 0) {
        alert('Invalid Amount');
        document.getElementById('donatAmountNoakhali').value = '';
        return;
    }
    if (donationAmount > myCurrentBalance) {
        alert('Insuficient Balance');
        document.getElementById('donatAmountNoakhali').value = '';
        return;
    }
    document.getElementById('noakhaliTotal').innerText = donationAmount + totalDonation;
    document.getElementById('mainBalance').innerText = myCurrentBalance - donationAmount;
    document.getElementById('donatAmountNoakhali').value = '';

    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');

    h2.innerText = donationAmount + " Taka Donated For Flood Relief in Noakhali, Bangladesh";
    p.innerText =`Date : ${new Date().toString()}`;
    div.appendChild(h2);
    div.appendChild(p);
    h2.style.fontWeight = 'bold';
    h2.style.marginBottom = '12px';
    div.style.border = '1px solid gray';
    div.style.borderRadius = '16px';
    div.style.padding = '16px';
    div.style.marginBottom = '8px';
    document.getElementById('donationHistory').appendChild(div);
    document.getElementById('my_modal').showModal();
})
//Donation
document.getElementById('feni-donation-button').addEventListener('click', function (event) {
    event.preventDefault();
    let donationAmount = getElementValueId('feniAmount');
    let totalDonation = getElementInnerTextId('feniTotal');
    let myCurrentBalance = getElementInnerTextId('mainBalance');


    if (isNaN(donationAmount)) {
        alert('Invalid Amount');
        document.getElementById('feniAmount').value = '';
        return;
    }

    donationAmount = parseFloat(donationAmount);
    totalDonation = parseFloat(totalDonation);
    myCurrentBalance = parseFloat(myCurrentBalance);

    
    if (donationAmount < 0) {
        alert('Invalid Amount');
        document.getElementById('feniAmount').value = '';
        return;
    }
    if (donationAmount > myCurrentBalance) {
        alert('Insuficient Balance');
        document.getElementById('feniAmount').value = '';
        return;
    }
    document.getElementById('feniTotal').innerText = donationAmount + totalDonation;
    document.getElementById('mainBalance').innerText = myCurrentBalance - donationAmount;
    document.getElementById('feniAmount').value = '';

    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    h2.innerText = donationAmount + " Taka Donated For Flood Relief in Feni, Bangladesh";
    p.innerText =`Date : ${new Date().toString()}`;
    div.appendChild(h2);
    div.appendChild(p);
    h2.style.fontWeight = 'bold';
    h2.style.marginBottom = '12px';
    div.style.border = '1px solid gray';
    div.style.borderRadius = '16px';
    div.style.padding = '16px';
    div.style.marginBottom = '8px';

    document.getElementById('donationHistory').appendChild(div);
    document.getElementById('my_modal').showModal();
})


// QUOTA Donation
document.getElementById('quota-donation-button').addEventListener('click', function (event) {
    event.preventDefault();
    let donationAmount = getElementValueId('quotaAmount');
    let totalDonation = getElementInnerTextId('quotaTotal');
    let myCurrentBalance = getElementInnerTextId('mainBalance');
    if (isNaN(donationAmount)) {
        alert('Invalid Amount');
        document.getElementById('quotaAmount').value = '';
        return;
    }

    donationAmount = parseFloat(donationAmount);
    totalDonation = parseFloat(totalDonation);
    myCurrentBalance = parseFloat(myCurrentBalance);

    if (donationAmount < 0) {
        alert('Invalid Amount');
        document.getElementById('quotaAmount').value = '';
        return;
    }
    if (donationAmount > myCurrentBalance) {
        alert('Insuficient Balance');
        document.getElementById('quotaAmount').value = '';
        return;
    }
    document.getElementById('quotaTotal').innerText = donationAmount + totalDonation;
    document.getElementById('mainBalance').innerText = myCurrentBalance - donationAmount;
    document.getElementById('quotaAmount').value = '';
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');

    h2.innerText = donationAmount + " Taka Donated For Aid for Quota Movement, Bangladesh";
    p.innerText =`Date : ${new Date().toString()}`;
    div.appendChild(h2);
    div.appendChild(p);
    h2.style.fontWeight = 'bold';
    h2.style.marginBottom = '12px';
    div.style.border = '1px solid gray';
    div.style.borderRadius = '16px';
    div.style.padding = '16px';
    div.style.marginBottom = '8px';
    document.getElementById('donationHistory').appendChild(div);
    document.getElementById('my_modal').showModal();
})



// Donation BTN
document.getElementById('donation').addEventListener('click', function(){
    document.getElementById('donation').classList.remove('bg-white','border','border-[#1111114D]');
    document.getElementById('donation').classList.add('bg-lime-300', 'hover:bg-lime-200',);
    document.getElementById('history').classList.remove('border-none', 'bg-lime-300', 'hover:bg-lime-200');
    document.getElementById('history').classList.add('bg-white');
    document.getElementById('donationHistory').classList.add('hidden');
    document.getElementById('donation-page').classList.remove('hidden');
})



// History BTN
document.getElementById('history').addEventListener('click', function () {
    document.getElementById('donation').classList.remove('bg-lime-300', 'hover:bg-lime-200');
    document.getElementById('donation').classList.add('bg-white', 'hover:bg-gray-200', 'border', 'border-[#1111114D]');
    document.getElementById('history').classList.remove('bg-white');
    document.getElementById('history').classList.add('border-none', 'bg-lime-300', 'hover:bg-lime-200');
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('donationHistory').classList.remove('hidden');
})