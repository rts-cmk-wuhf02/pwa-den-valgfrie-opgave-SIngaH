if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('../../sw.js')
      .then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
    //https://developers.google.com/web/fundamentals/primers/service-workers
    
    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', (event) => {
      // Prevent the mini-infobar from appearing on mobile
      event.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = event;
  
      document.querySelector(".install-offline").classList.toggle("hide", false);
      document.querySelector("footer").style.paddingTop="5%";
    });
  
    document.querySelector(".install-offline").addEventListener('click', () => {
      document.querySelector(".install-offline").classList.add("hide");
      document.querySelector("footer").style.paddingTop="5%";
      // Show the install prompt
      deferredPrompt.prompt();
      deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
      });
      
    });
  }  
  
  // Notification
  Notification.requestPermission(function(status){
    console.log("Notification premission status: ", status)
    if(Notification.permission === "granted"){
      navigator.serviceWorker.getRegistration()
      .then(function(reg){
        let options = {
          body: "You can change the main color and block the news articles you have no interest in",
          icon: "./assets/images/news-icon-white.png",
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
          },
          actions: [
            {action: 'Settings', title: 'To change color or hide news stories click here',
              icon: './assets/images/notifications/check.png'},
            {action: 'close', title: 'Close notification',
              icon: './assets/images/notifications/x.png'},
          ]
        }
        reg.showNotification("Change main color", options);
      });
    }
  });
  