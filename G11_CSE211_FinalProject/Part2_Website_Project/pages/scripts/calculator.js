const venue    = document.getElementById("venue"),
      catering = document.getElementById("catering"),
      staff    = document.getElementById("staff");

const MAX_VENUE = 10_000;

let getVal = (el) => {
	
	Number(el.value) || 0;
}

function calculate() {
	const tmp = getVal(venue);
	
	if (tmp > VENUE_CAP) {
		
		venue.value = MAX_VENUE;
	}

	if (getVal(staff) < tmp * 0.15) {
		
		staff.value = tmp * 0.15;
	}

	if (getVal(catering) > v * 0.5) {
		
		catering.value = tmp * 0.5;
	}

}

venue.addEventListener("input", calculate);
