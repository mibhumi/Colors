<html>

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="js/js.js"></script>
    <script src="js/shake.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/custom.css">
    <link href="https://fonts.googleapis.com/css?family=Leckerli+One" rel="stylesheet">
</head>

<body style="display: flex;">



    <div style="z-index: 15" class="modalcontainer" id="frontmodalcontainer">
        <div class="framer" id="frontframer">
            <center>
                <h2 style="margin: 0">Hey !</h2>
                <span>We're in beta</span><br /><br />
                <h5 style="margin: 0;font-weight: normal;">if you find some extra features <sup>(Bug)</sup></h5>
                <h5 style="margin: 0;font-weight: normal;">then report to my insta : @d.vlpr</h5><br />
                <span>press &nbsp;<button onclick="closefrontmodal()" class="modalbutton frontmodalbutton">go go go</button> &nbsp;or "Spacebar" to start</span>
                <!-- <button class="modalbutton" type="submit">Thumbs up</button> -->
            </center>
        </div>
    </div>

    <div style="width: 100%">
        <div class="optionslabel" style="display: none">
            <input type="number" id="numcolornum" min="2" max="128" value="9">
        </div>
        <div id="colorlist" class="colorlist"></div>
    </div>

    <div class="buttonholder">
        <button class="refreshdiv tooltip" onclick="test()"><i class="fas fa-sync-alt refresh"></i>
            <span class="tooltiptext">New Palette</span></button>
        <!-- <button class="instagramdiv tooltip" onclick="displayinstamodal(),hidemodal()"><i class="fab fa-instagram instagramicon"></i>
				<span class="tooltiptext">Instagram @d.vlpr</span></button>
			<button class="likediv tooltip" onclick="displaymodal(),hideinstamodal()"><i class="far fa-thumbs-up thumb"></i>
				<span class="tooltiptext">Like this palette</span></button>-->
        <button class="copydiv tooltip" onclick="copyToClipboard(document.getElementById('instacolorclean').value)"><i class="far fa-copy copyicon"></i>
            <span class="tooltiptext">Copy Palette</span></button>
        <button class="likediv tooltip" onclick="displayinstamodal()"><i class="far fa-thumbs-up thumb"></i>
            <span class="tooltiptext">Like this palette</span></button>

    </div>


    <!-- <form action="process.php" method="post" id="variable" onsubmit="return continueOrNot()" style="position: fixed;z-index: -11;opacity: 0">
			<div class="modalcontainer" id="modalcontainer">
				<div class="framer" id="framer">	
					<center>
						Enter Your Email To Continue<br>
						<span class="closemodal" onclick="hidemodal()">✖️</span>
						<input class="modalinput" type="email" name="email" id="email" placeholder="Email Address" autocomplete="off" spellcheck="false">
						<br>
						<button class="modalbutton" type="submit">Thumbs up</button>
					</center>
				</div>	
			</div>
		</form> -->

    <form action="processinsta.php" method="post" id="instavariable" onsubmit="return continueOrNotinsta()" style="position: fixed;z-index: -11;opacity: 0">
        <div class="modalcontainer" id="modalcontainer">
            <div class="framer" id="framer">
                <center>
                    Enter Your Instagram Id To Continue<br>
                    <span class="closemodal" onclick="hideinstamodal()">✖️</span>
                    <input class="modalinput" name="instaid" id="instaid" placeholder="@instaid" autocomplete="off" spellcheck="false">
                    <br>
                    <button class="modalbutton" type="submit">Thumbs up</button>
                </center>
            </div>
        </div>
    </form>

    <span class="footer">
        <span>Created by <a class="link" target="_blank" href="http://www.devarshi.xyz">Devarshi Sathiya</a></span>
        <br>
    </span>

    <script type="text/javascript">
        var stopper = setInterval(stopperfunc, 1000);

        function stopperfunc() {
            test()
        }

        document.body.onkeyup = function(e) {
            var x = 0;
            if (e.keyCode == 32) {
                if (x == 0) {
                    document.getElementById("frontmodalcontainer").style.display = "none";
                    x++;
                    clearInterval(stopper);
                }
                test()
            }
        }

        /*SHAKER*/
        var myShakeEvent = new Shake({
            threshold: 15, // optional shake strength threshold
            timeout: 1000 // optional, determines the frequency of event generation
        });

        myShakeEvent.start();

        window.addEventListener('shake', shakeEventDidOccur, false);

        //function to call when shake occurs
        function shakeEventDidOccur() {
            test()
        }
    </script>
</body>

</html>