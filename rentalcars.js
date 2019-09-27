//https://www.rentalcars.com/SearchResults.do?enabler=&country=Italia&doYear=2019&distance=10&ftsEntry=1472283&city=Alghero&driverage=on&doFiltering=false&filterName=CarCategorisationSupplierFilter&dropCity=Alghero&dropFtsType=A&ftsAutocomplete=Aeroporto+di+Alghero+(AHO)%2c+Alghero%2c+Italia&driversAge=30&dropFtsAutocomplete=Aeroporto+di+Alghero+(AHO)%2c+Alghero%2c+Italia&dropFtsLocationName=Aeroporto+di+Alghero&fromLocChoose=true&filterTo=1000&dropLocationName=&dropCountryCode=it&ftsType=A&countryCode=it&doMinute=00&puYear=2019&ftsLocationSearch=23241&dropFtsSearch=L&locationName=Aeroporto+di+Alghero&puMinute=00&ftsInput=alghero&doDay=2&searchType=&filterFrom=0&coordinates=40.6335%2c8.29269&puMonth=9&dropLocation=23241&dropFtsInput=alghero&doHour=10&dropCountry=Italia&dropCoordinates=40.6335%2c8.29269&ftsLocationName=Aeroporto+di+Alghero&ftsSearch=L&puDay=29&dropFtsLocationSearch=23241&puHour=10&location=23241&dropFtsEntry=1472283&doMonth=10&showAllCars=true
var csv_line = "";
for(var i = 0 ; i<$(".carResultRow_CarSpec h2").length; i++){
	car_title = $(".carResultRow_CarSpec h2")[i].innerHTML;
	car_price = $(".carResultRow_Price-now")[i].innerHTML.substring(1);
    csv_line += car_title.substr(0, car_title.indexOf("&nbsp"))  + "\t" + car_price + "\n";

}
console.log(csv_line);
