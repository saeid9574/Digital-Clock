let h = document.getElementById('hour')
let m = document.getElementById('minute')
let s = document.getElementById('seconds')




/*alert(Hours + '/' + Min +'/' + Sec)*/

let set = setInterval( function(){
	let myDate = new Date()

    let Hours = myDate.getHours()
    let Min = myDate.getMinutes()
    let Sec = myDate.getSeconds()

    if (Hours < 10) {
    	Hours = '0'+Hours
    }
    if (Min < 10) {
    	Min = '0'+Min
    }
    if (Sec < 10) {
    	Sec = '0'+Sec
    }

    h.innerHTML = Hours 
    m.innerHTML = Min
    s.innerHTML = Sec

} , 1000) 

