function loadGoogleAnalytics(blocked) {
    // Google tag (gtag.js)
    var f=document.getElementsByTagName("script")[0];
    j=document.createElement("script");
    j.async="";  
    j.src= "https://www.googletagmanager.com/gtag/js?id=G-8XVBERFCE2";
    f.parentNode.insertBefore(j,f);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-8XVBERFCE2');
}

$(document).ready(function() {
    loadGoogleAnalytics()    
});
