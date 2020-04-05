module.exports.tulostaTahtia = tulostaTahtia
module.exports.tulostaTulos = tulostaTulos

const tulostaTahtia = (maara) => {
    var result= '';
for (var i = 0; i < maara; i++) {
    result = result + ('* ')
    }
    console.log(result)
};

//tulostaTahtia(10);

const tulostaTulos = (tulos) => {
   var tuloste = String(tulos)
   var x = tuloste.length;
   var result= '';
    for( var i = 0; i < x; i ++) {
    result = result + ('-')
    }
    console.log(result)
    console.log(tuloste)
    console.log(result)
}

//tulostaTulos(34523452)