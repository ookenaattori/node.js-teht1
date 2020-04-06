
const tulostaTulos = require('./tulostus')
//Moduuli ei toimi oikein?

const tulostaNelio = (sivu, tulostus) => {
    var i, j;
    var output = '';

    for(i = 1; i <= sivu; i++)
    {
        for(j = 1; j <=sivu; j++) 
        {
            output= output + ('* ');
        }
        output = output + ('\n')
    }
    console.log(output)
}

tulostaNelio(4)

const tulostaSuorakulmio = (leveys, korkeus, tulostus) => {
    var i, j;
    var output = '';

    for(i = 1; i <= korkeus; i++)
    {
        for(j = 1; j <=leveys; j++) 
        {
            output= output + ('* ');
        }
        output = output + ('\n')
    }
    console.log(output)
}

tulostaSuorakulmio(5,3)

const tulostaKolmio = (korkeus, tulostus) => {
    var i, j;
    var output = '';

    for(i = 1; i <= korkeus; i++)
    {
        for(j = 1; j <=i; j++) 
        {
            output= output + ('* ');
        }
        output = output + ('\n')
    }
    console.log(output)
}

tulostaKolmio(5)

const lukusarjanSumma = (n) => {
    var summa = 0
    for(var i = 1; i <= n; i ++) {
        summa = summa+i;
    }
    console.log(summa)
}

tulostaTulos(lukusarjanSumma(100));

const kertoma = (n) => {
    var tulo = 1
    for(var i = 1; i <=n; i++ ){
        tulo = tulo * i;
    }
    console.log(tulo)
}

tulostaTulos(kertoma(10));


module.exports = tulostaNelio
module.exports = tulostaSuorakulmio
module.exports = tulostaKolmio
module.exports = lukusarjanSumma
module.exports = kertoma
// Moduulit eivät toimi oikein?