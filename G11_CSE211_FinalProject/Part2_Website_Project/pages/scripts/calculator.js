const venue     = document.getElementById("venue"),
      catering  = document.getElementById("catering"),
      staff     = document.getElementById("staff"),
      marketing = document.getElementById("marketing");

const MAX_VENUE = 10_000;

let getVal = (el) => {
	
	return Number(el.value) || 0;
}

function calculate()
{
	const tmp = getVal(venue);
	
	if (tmp > MAX_VENUE) {
		
		venue.value = MAX_VENUE;
	}

	if (getVal(staff) < tmp * 0.15) {
		
		staff.value = Math.round(tmp * 0.15);
	}

	if (getVal(catering) > tmp * 0.5) {
		
		catering.value = Math.round(tmp * 0.5);
	}

	/*
	 * marketing is intentionally ignored
	 * */

}

let total = _ => {
	
	return getVal(venue) + getVal(staff) + getVal(catering) + getVal(marketing);
}

[venue, catering, staff, marketing].forEach(el => {

	el.addEventListener("input", calculate);	
});

document.querySelector(".calc-btn").addEventListener("click", _ => {

	document.getElementById("total-cost").innerHTML = `$${total()}`;
});

window.addEventListener("load", _ => {
    document.getElementById("budget-form").reset();

    calculate();
});
