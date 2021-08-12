    $('#logo').on('click',clickHome);
    $('#home').on('click', clickHome);
    $('#safety').on('click', clickSafety);
    $('#environment').on('click', clickEnvironment);
    $('#contact').on('click', clickContact);

    function clickHome() {
   	  
      $('#home').css('font-weight','bold');
      $('#safety').css('font-weight','normal');
      $('#environment').css('font-weight','normal');
      $('#contact').css('font-weight','normal');
       }    

    function clickSafety() {
      document.getElementById("safety").onclick=function(){
  var myLatlng = new google.maps.LatLng(37.58236280818732, 127.00936102518666); // 위치값 위도 경도 
  var Y_point = 37.582490343481204; // Y 좌표 
  var X_point = 127.00932883867772; // X 좌표 
  var zoomLevel = 18; // 지도의 확대 레벨 : 숫자가 클수록 확대정도가 큼
  var markerTitle = "대구광역시"; // 현재 위치 마커에 마우스를 오버을때 나타나는 정보 
  var markerMaxWidth = 300; // 마커를 클릭했을때 나타나는 말풍선의 최대 크기 
  // 말풍선 내용 
  var contentString = '<div>' + '<h2>한성대학교</h2>'+ '<p>안녕하세요. 구글지도입니다.</p>' + '</div>'; 
  var myLatlng = new google.maps.LatLng(Y_point, X_point); 
  var mapOptions = { zoom: zoomLevel, center: myLatlng, mapTypeId: google.maps.MapTypeId.ROADMAP } 
  var map = new google.maps.Map(document.getElementById('map_ma'), mapOptions); 
  var marker2 = new google.maps.Marker({ position: myLatlng, map: map, title: markerTitle }); 
  var marker = new google.maps.Circle({ // 각각 파라미터의 기능이 뭔지 잘 모르게음 너가 잘 해석해바바ㅇㅋ?
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 1.0,
      map,
      center: { lat: 37.582290343481211, lng: 127.00932813867732 },
      radius: 5,
    });
  var infowindow = new google.maps.InfoWindow( { content: contentString, maxWizzzdth: markerMaxWidth } );
  google.maps.event.addListener(marker, 'click', function() { infowindow.open(map, marker); }); 
  google.maps.event.addListener(marker2, 'click', function() { infowindow.open(map, marker2); }); 
  }
      $('#safety').css('font-weight','bold');
      $('#home').css('font-weight','normal');
      $('#environment').css('font-weight','normal');
      $('#contact').css('font-weight','normal');
       }    

    function clickEnvironment() {      
      
      $('#environment').css('font-weight','bold');
      $('#home').css('font-weight','normal');
      $('#safety').css('font-weight','normal');
      $('#contact').css('font-weight','normal');
       }    
    
    function clickContact() {
      
      $('#contact').css('font-weight','bold');
      $('#home').css('font-weight','normal');
      $('#environment').css('font-weight','normal');
      $('#safety').css('font-weight','normal');
       }    

