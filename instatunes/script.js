function play()
{
    var query = document.getElementById("q");
    q = query.value;
    document.getElementById("audio").innerHTML="Please Wait. Getting your song :)...."
    axios.get("http://instatunes.000webhostapp.com/music.php?q="+q).then((resp)=>{
        document.getElementById("audio").innerHTML="Here it is. Enjoy!<br />" + resp.data;
    });

}