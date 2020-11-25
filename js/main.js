 
 var clicks =1 ;


  function contact_info()
    {
     if(clicks == 1)
      {
        clicks -= 1;
        document.getElementById("clicks").innerHTML = clicks;
      document.getElementById('contact_info1').style.display="none"
           document.getElementById('contact_info2').style.display="block"
      }
   else if (clicks == 0)
      {
     document.getElementById("clicks").innerHTML = clicks;
      clicks += 1;
    document.getElementById('contact_info2').style.display="none"
        document.getElementById('contact_info1').style.display="block"
        
         
      }

     


  }