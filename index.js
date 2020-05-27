let bit = document.querySelector('#bit'),
    usd = document.querySelector('#usd');

bit.addEventListener("input", () => {
    let request = new XMLHttpRequest();
    request.open('GET','https://api.coindesk.com/v1/bpi/currentprice.json');
    request.send();


    request.addEventListener('load', function(){
        if(request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.response);
            usd.value = bit.value * data.bpi.USD.rate_float;
            
        }
    })
} )

//https://api.coindesk.com/v1/bpi/currentprice.json