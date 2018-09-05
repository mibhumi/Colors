function test1() {
    let colorlist, huevaluenum, hueshiftnum, hueintennum, numcolornum
    let colors = []
    let value = Math.floor(Math.random() * 360) + 0 
    let shift = Math.floor(Math.random() * 721) - 360
    let inten = Math.floor(Math.random() * 100) + 0
    let color = 50 
    var mainer = []
    var colorclean = []

    
    /*console.clear()
    console.log("value : "+value)
    console.log("shift : "+shift)
    console.log("inten : "+inten)*/
    

    main()

    function main() {
        colorlist = document.getElementById('colorlist')
        numcolor = 5;
        numcolornum = document.getElementById('numcolornum')
        onNumbe({
            target: numcolornum
        })
    }


    function onNumbe(evt) {
        if (evt.target.value.length < 1) {
            return
        }
        numcolor.value = numcolornum.value = color = parseInt(evt.target.value)

        while (true) {
            if (color > colors.length) {
                let span = document.createElement('span')
                span.className = 'color'
                colorlist.appendChild(span)
                colors.push(span)
            } else if (color < colors.length && colors.length > 0) {
                colorlist.removeChild(colorlist.firstChild)
                colors.shift()
            } else {
                break
            }
        }

        onChange()
    }

    function onChange() {
        let cl = colors.length + 1
        var ca = []
        for (let a = colors.length; a > 0; a--) {
            let h = ((value + shift * (a - cl / 2) / cl) / 360) % 1
            let s = inten / 100
            let l = a / cl
            let c = getColor(h, s, l)
            let span = colors[a - 1]
            span.innerHTML = getHex(...c) + '<br>' + getBkg(...c)
            span.style.backgroundColor = getBkg(...c)

            ca.push('#' + span.style.backgroundColor);

            if (0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2] > 127) {
                span.style.color = 'black'
            } else {
                span.style.color = 'white'
            }
            
        }

        mainer = ca
        mainer.reverse()

        var y = document.createElement("INPUT");
        y.setAttribute("type", "text");
        y.setAttribute("value", mainer);
        y.setAttribute("name", "instacolorclean");
        y.setAttribute("id", "instacolorclean");
        y.setAttribute("class", "colorclean");
        document.getElementById('instavariable').appendChild(y);

    }

    function getColor(h, s, l) {
    
        var r, g, b;

        if (s == 0) {
            r = g = b = l;
        } else {
            var hue2rgb = function hue2rgb(p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        return [
            Math.round(r * 255),
            Math.round(g * 255),
            Math.round(b * 255)
        ];
    }

    function getHex(r, g, b) {
        let a = `0${r.toString(16)}`.slice(-2)
        let c = `0${g.toString(16)}`.slice(-2)
        let d = `0${b.toString(16)}`.slice(-2)
        return `#${a}${c}${d}`
    }

    function getBkg(r, g, b) {
        return `rgb(${r},${g},${b})`
    }

}
/*Custom Functions*/

function displayinstamodal() {
    document.getElementById('instavariable').style.zIndex = 12;
    document.getElementById('instavariable').style.opacity = 1;
}

function hideinstamodal() {
    document.getElementById('instavariable').style.zIndex = -11;
    document.getElementById('instavariable').style.opacity = 0;
}


function validateinstaid(instaid) {
    var re = /^@([A-Za-z0-9_.]+)$/;
    return re.test(instaid);
}

function continueOrNotinsta() {
    if (validateinstaid(document.getElementById('instaid').value)) {
        return true;
    } else {
        alert("Check Instagram Account ID");
        return false;
    }
}

function closefrontmodal() {
    document.getElementById("frontmodalcontainer").style.display = "none";
    clearInterval(stopper);
}

function test() {
    var colorremover = document.getElementsByClassName("color");
    var colorcleanremover = document.getElementsByClassName("colorclean");
    for (var i = colorremover.length - 1; 0 <= i; i--) {
        if (colorremover[i] && colorremover[i].parentElement) {
            colorremover[i].parentElement.removeChild(colorremover[i]);
        }
    }
    for (var i = colorcleanremover.length - 1; 0 <= i; i--)
        if (colorcleanremover[i] && colorcleanremover[i].parentElement)
            colorcleanremover[i].parentElement.removeChild(colorcleanremover[i]);
    test1()
}

function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}