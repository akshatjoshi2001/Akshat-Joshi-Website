function play()
{
    var query = document.getElementById("q");
    q = query.value;
    document.getElementById("audio").innerHTML="<br /><b><span style='color:blue;font-size:20px;'>Getting your song.  :)</span><br /><img src='loading.gif' height='200px' width='300px' alt='Loading...' /> <br /> "
    axios.get("http://instatunes.000webhostapp.com/music.php?q="+q).then((resp)=>{
        document.getElementById("audio").innerHTML="<br /><br />Here it is. <b style='color:blue;'>Enjoy!</b><br /><br />" + resp.data;
    });

}