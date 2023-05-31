let handleTime = () => {
	const time = new Date();
	const sec = time.getSeconds();
	const hr = time.getHours();
	const min = time.getMinutes();

	const secDeg = (sec / 60) * 360 + 90;
	const hrDeg = (hr / 12) * 360 + (min / 60) * 30 + 90;
	const minDeg = (min / 60) * 360 + 90;

	$(".hr").css({ "--rotate": `${hrDeg}deg` });
	$(".min").css({ "--rotate": `${minDeg}deg` });
	$(".sec").css({ "--rotate": `${secDeg}deg` });
	let handleDom = (time) => {
		let result = time < 10 ? `0${time}` : time;
		return result;
	};
	$(".dig-hr").text(handleDom(hr));
	$(".dig-min").text(handleDom(min));
	$(".dot").toggleClass("zoom");
};

$(window).on("load", () => {
	handleTime();
	setInterval(() => handleTime(), 1000);
});
