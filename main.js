<script type="text/javascript">
	
	var countDownDate = new Date("May 24, 2020 17:00:00").getTime();
	var x = setInterval(function(){
		var now = new Date().getTime();
		var distance = countDownDate - now;


		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / (1000));

		document.getElementById("day").innerHTMl = days;
		document.getElementById("hour").innerHTMl = hours;
		document.getElementById("minute").innerHTMl = minutes;
		document.getElementById("second").innerHTMl = seconds;
	});
</script>