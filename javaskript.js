<div id="map"></div>
    <script> 
      function initMap() { 
        var uluru = {lat: 59.263709, lng: 25.557974} 
        var map = new google.maps.Map(document.getElementById('map'), { 
          zoom: 15, 
          center: uluru 
        }); 
        var marker = new google.maps.Marker({ 
          position: uluru, 
          map: map 
        }); 
      } 
    </script> 
<script async defer 
    src= 
	"https://maps.googleapis.com/maps/api/js?key=AIzaSyB2bXKNDezDf6YNVc-SauobynNHPo4RJb8&callback=initMap"> 
</script>

