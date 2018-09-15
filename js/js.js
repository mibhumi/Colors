function test1() {
    let colorlist, huevaluenum, hueshiftnum, hueintennum, numcolornum
    let colors = []
    let value = Math.floor(Math.random() * 360) + 0 
    let shift = Math.floor(Math.random() * 721) - 360
    let 
    
    /*console.clear()
    console.log("value : "+value)
    console.log("shift : "+shift)
    console.log("inten : "+inten)*/
    

    main()

    


    function onNumbe(evt) {
        if (evt.target.value.length < 1) {
            return
        }
        numcolor.value = numcolornum.value = color = parseInt(evt.target.value)

        while (true) {
            if (color > colors.length) {
                let span = document.createElement('span')
                span.className = 'color'
                
            }
        }

        onChange()
    }

    function onChange() {
        
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
