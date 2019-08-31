function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
        // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
          return "Windows Phone";
      }
  
      if (/android/i.test(userAgent)) {
          return "Android";
      }
  
      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return "iOS";
      }
  
      return "unknown";
  }
  function downloadSAMO(){
    //  this.test = document.getElementById('platformWidget');

  //console.log(getMobileOperatingSystem());
     // this.test.innerHTML = getMobileOperatingSystem();
      if(getMobileOperatingSystem()=="iOS"||getMobileOperatingSystem()=="unknown"){
          console.log("Ok its working");
          open("https://apps.apple.com/us/app/samohi-connect/id1465501734?ls=1", "_blank");
      }else if(getMobileOperatingSystem()=="Android" ||getMobileOperatingSystem()=="Windows Phone"){
        open("https://play.google.com/store/apps/details?id=com.swerd.SamoConnect&hl=en_US", "_blank");
      }
  }