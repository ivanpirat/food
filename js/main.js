document.getElementById('contact_info1').style.display="block"
 
const scroll_div = document.querySelector('.scroll_div');

  function contact_info()
    {
      var c_i_1=  document.getElementById('contact_info1').style.display;
      console.log(c_i_1);
     if(c_i_1 === "block")
      {
        document.getElementById('contact_info1').style.transition="2s";
           document.getElementById('contact_info1').style.display="none"
           document.getElementById('contact_info2').style.display="block"
      }
   else 
      {
        document.getElementById('contact_info1').style.transition="2s";
    document.getElementById('contact_info2').style.display="none"
        document.getElementById('contact_info1').style.display="block"
        
         
      }

     
 

  }

window.addEventListener('scroll',progresbar);
function progresbar(e)
{
let winscroll = document.documentElement.scrollTop||document.body.scrollTop;
let winheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let per = winscroll/winheight*100 ;
scroll_div.style.width = per + '%';
}

