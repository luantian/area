$(function () {
  $('#distpicker').distpicker();

  $('#btn').click(getData);

});

function getData() {
	$.each($('select'), function(index, item) {
		var val = item.value;
		var code = item.options[item.selectedIndex].dataset['code'];
    console.log('val:', val);
    console.log('code:', code);
  });
}