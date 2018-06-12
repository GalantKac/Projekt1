 var numer = Math.floor(Math.random()*4+1);
    function schowaj()
    {
        $("#slajd").fadeOut(500);
    }

    function zmienslajd()
    {
        numer++;if (numer>4) numer=1;

        var plik = "<img src=\"slajdy/slajd"+ numer+".jpg\"/>";

        document.getElementById("slajd").innerHTML = plik;
        $("#slajd").fadeIn(500);

        setTimeout("zmienslajd()",10000);
        setTimeout("schowaj()",9500);
    }