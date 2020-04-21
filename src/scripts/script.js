$(document).ready(function () {
    var nav = $('#remonter nav');
    var barreCharge = $(".headbar");
    var HtNavTop = nav.offset();
    HtNavTop = HtNavTop.top;
    var PosScroll = 0;
    MenuOn = HtNavTop - 8;
    var ProposTaille = document.querySelector("#propos").offsetTop;
    var MesprojetsTaille = document.querySelector("#projets").offsetTop;
    var MastermTaille = document.querySelector("#master").offsetTop;
    var DistriTaille = document.querySelector("#distr").offsetTop;
    var UnrealTaille = document.querySelector("#unril").offsetTop;
    var ExpèrienceTaille = document.querySelector("#Stage").offsetTop;
    var CompetencesTaille = document.querySelector("#Competences").offsetTop;
    var ContactTaille = document.querySelector("#contacter").offsetTop;
    var StageTaille = document.querySelector("#Stage").offsetTop;
    var StageKameTaille = document.querySelector("#stage2").offsetTop;
    var SsMenu = document.querySelector("#SSmenu");
    var SsMenu2 = document.querySelector("#SSmenu2");
    var Hscreen = screen.height / 2;
    var bloquage = 0;
    var cache = document.querySelector("#menu-demo2");
    var popHt = document.querySelector("#popin").offsetHeight;
    //////////////////////////////////////////////////////////////////Compétences////////////////////////////////////////////////////////////////
    var spanNumber = ['#compteur1', '#compteur2', '#compteur3', '#compteur4', '#compteur5', '#compteur6'];
    var spanpourcentage = ['81', '61', '31', '66', '61', '61'];
    var icon = ['#icon1', '#icon2', '#icon3', '#icon4', '#icon5', '#icon6'];
    var Popdescr = ['#decsript1', '#decsript2', '#decsript3', '#decsript4', '#decsript5', '#decsript6'];
    //////////////////////////////////////////////////////////////////H3////////////////////////////////////////////////////////////////
    var Listh3 = ['#master', '#distri', '#unrilU'];
    var Hauteurh3 = [MastermTaille, DistriTaille, UnrealTaille];
    var codeminilist = ['.code1', '.code2'];
    //////////////////////////////////////////////////////////////////Menu de navigation////////////////////////////////////////////////////////////////
    var Listnav = ['#Link1', '#Link2', '#LinkSousmenu1', '#LinkSousmenu3', '#Link4', '#Link5', '#Link6', '#LinkSousmenu2', '#LinkSousmenu4', '#LinkSousmenu5']
    var Listtaille = [ProposTaille, MesprojetsTaille, MastermTaille, UnrealTaille, ExpèrienceTaille, CompetencesTaille, ContactTaille, DistriTaille, StageTaille, StageKameTaille]
    //Apparition Des div du body
    var ListOpacity = ['#propos', '#masterta', '.position', '.fondpc', '#Stage','#containercompetence', '#distr', '#unril'];
    var renaultlist = ['#renault1', '#renault2', '#renault3']
    //////////////////////////////////////////////////////////////////Chronometre////////////////////////////////////////////////////////////////
    var i = 1;
    var s = 0;
    var m = 0;
    var ms = 0;
    var testing = 0;
    var testing1 = 0;
    var testing2 = 0;
    var z = 0;
    var s1 = 0;
    var ms1 = 0;
    var m1 = 0;
    var z1 = 0;
    var s2 = 0;
    var ms2 = 0;
    var m2 = 0;
    var z2 = 0;
    var s3 = 0;
    var ms3 = 0;
    var m3 = 0;
    var timestamping2 = 1000 / 60;
    var timestamping1 = 1000 / 60;
    var timestamping = 1000 / 60;
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function Chrono() {
        setTimeout(function () {
            i++;
            if (i < 1000000) {            //  if the counter < 1000000, on effectue la fonction
                Chrono();
                ////////////////////////////////////////////////////////////////////////////////////
                function skillremove() {
                    var cssgauche = $('.gauche').css("left");
                    if (cssgauche == '0px') {
                        $('.gauche').removeClass('Skills');
                        $('.droite').removeClass('Skills');
                    } 
                    var cssrenault = $('#renault1').css('left')
                    if (cssrenault == '0px') {
                        renaultlist.forEach(function(item1) {
                            $(item1).removeClass('Skills');
                            });
                    }
                }
                ////////////////////////////////////////////////////////////////////////////////////
                skillremove();
                ms++;
                $('#msecondes').text(ms);
                if (Number.isInteger(i / 60)) {
                    ++s;
                    $('#secondes').text(s);
                    ms = 00;
                }
                if ((s == 59) && (ms == 59)) {
                    s = 0;
                    m++;
                    $('#minutes').text(m);
                }
            }
        }, 1000 / 60)//on répète la fonction toute les 1 ms
    }
    Chrono();
    /////////////////////////////////////////////////Chronocompet/////////////////////////////////////////////////
    function Chronocompet() {
        setTimeout(function () {
            z++;
            ms1++;
            if (Number.isInteger(z / 60)) {
                ++s1;
                ms1 = 0;
            }
            if ((s1 == 59) && (ms1 == 59)) {
                s1 = 0;
                m1++;
            }
            Chronocompet();
        }, timestamping)//on répète la fonction toute les 1 ms
    }
        /////////////////////////////////////////////////Chronoexper/////////////////////////////////////////////////
        function Chronoexper() {
            setTimeout(function () {
                z1++;
                ms2++;
                if (Number.isInteger(z1 / 60)) {
                    ++s2;
                    // $('#secondes1').text(s2);
                    ms2 = 0;
                }
                if ((s2 == 59) && (ms2 == 59)) {
                    s2 = 0;
                    m2++;
                    // $('#minutes1').text(m2);
                }
                Chronoexper();
            }, timestamping1)//on répète la fonction toute les 1 ms
        }
        /////////////////////////////////////////////////Chronoexper/////////////////////////////////////////////////
        function Chronoprojet() {
            setTimeout(function () {
                z2++;
                ms3++;
                if (Number.isInteger(z2 / 60)) {
                    ++s3;
                    // $('#secondes1').text(s2);
                    ms3 = 0;
                }
                if ((s3 == 59) && (ms3 == 59)) {
                    s3 = 0;
                    m3++;
                    // $('#minutes1').text(m2);
                }
                Chronoprojet();
            }, timestamping2)//on répète la fonction toute les 1 ms
        }
    //////////////////////////////////////////////////////////////////Transition sous menu////////////////////////////////////////////////////////////////
    SsMenu.addEventListener('click', function () {
        $('.SousMenu').css('max-height', '0');
    })
    SsMenu2.addEventListener('click', function () {
        $('.SousMenu').css('max-height', '0');
    })
    cache.addEventListener('mouseover', function () {
        $('.SousMenu').css('max-height', '30em');
        $('.SousMenu').css('transition', 'all .8s');
    })

    /////////////////////////////////////////////Animation Titre header/////////////////////////////////////////////////////////////////////////////////////////
    anime.timeline({ loop: false })
        .add({
            targets: '.ml5 .line',
            opacity: [0.5, 1],
            scaleX: [0, 1],
            easing: "easeInOutExpo",
            duration: 700
        }).add({
            targets: '.ml5 .line',
            duration: 600,
            easing: "easeOutExpo",
            translateY: function (e, i, l) {
                var offset = -1.5 + 1.5 * 2 * i;
                return offset + "em";
            }
        }).add({
            targets: '.ml5 .ampersand',
            opacity: [0, 1],
            scaleY: [0.5, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=600'
        }).add({
            targets: '.ml5 .letters-left',
            opacity: [0, 1],
            translateX: ["2em", 0],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=300'
        }).add({
            targets: '.ml5 .letters-right',
            opacity: [0, 1],
            translateX: ["-2em", 0],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=600'
        })
    /////////////////////////Clipboard////////////////////////////////////////////////////
    var clipboard = new ClipboardJS('.btntest');
    /////////////////////////Clipboard alert////////////////////////////////////////////////////
    $(".btntest").click(function () {
        alert("Copié !");
    })
    //////////////////////////////////////////////Burger Menu///////////////////////////////////////////////////////////////////
    clickcounter = 0;
    if ($(window).width() < 1105) { //Fonction qui ne s'execute que lorsque l'ècran à une largeur de moins de 1105 pixel
        $('#Checkbox').on('click', function () {
            $('#menu-demo2').toggleClass('displayno');//Fais apparaître le menu déroulant lors du click ou le fais disparaître
        })
        $('#menu-demo2').on('click', function () {
            $('#menu-demo2').toggleClass('displayno');//Fais apparaître le menu déroulant lors du click ou le fais disparaître
        })
        //////////////////////////////////////////////////////////////////Animation scroll(IOS)////////////////////////////////////////////////////////////////
        $('a[href^="#"]').click(function () {//Fonction uniquement nécéssaire pour IOS, premettant un scroll fluide de la page
            var id = $(this).attr("href");
            $('html, body').animate({
                scrollTop: $(id).offset().top
            }, 'slow');
        });
        $('html').css('scroll-behavior', 'none');
    }
    ////////////////////////////////////////////////////////////////Fonction scroll////////////////////////////////////////////////////////////////
    
    $(window).on('scroll', function () {//Lors du scroll de la page, execute la fonction navScroll()
        navScroll();
        alert($(window).scrollTop());
	if ($(window).scrollTop() < PosScroll) {
        $('nav').css('top', '-86' + 'px');
	} else {
        $('nav').css('top', '0' + 'px');
	}
        PosScroll = window.pageYOffset;
    })

    function navScroll() {
        var Scrollmidscreen = PosScroll + Hscreen;//Milieu de la pos du scroll 
        var winScroll = document.documentElement.scrollTop; // Pos du scroll 
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;//Hauteur dans le document
        var scrolled = (winScroll / height) * 100;//Pourcentage scroll sur body
        var HtimgBelambra = document.querySelector("#imgbelamb > img.Belambrapick.droite").offsetHeight;
        var CompetencesTaillereload = document.querySelector("#Competences").offsetTop;
        var compettot = CompetencesTaillereload + document.querySelector("#Competences").offsetHeight;
        var stagetot = StageTaille + document.querySelector("#Stage").offsetHeight;
        var projtoto = MesprojetsTaille + document.querySelector("#projets").offsetHeight;
        var presentationkametaille = document.querySelector("#Présentationkame").offsetTop;
        var competencekametaille = document.querySelector("#Competencekame").offsetTop;
        var tempsmax = Math.max(z, z1, z2);
        var compteurtaille = document.querySelector("#Infodirect").offsetTop;
        var compteurtot = compteurtaille + document.querySelector("#Infodirect").offsetHeight;
        var kameh33 = document.querySelector("#h3kame2").offsetTop + competencekametaille;
        var tailleh3kameleoonlist = [presentationkametaille, competencekametaille, kameh33];
        /////////////////////////////////////////////////////////////////////////////////////////////////
        $("#imgbelamb").css('height', HtimgBelambra + 'px');
        /////////////////////////////////////////////////////////////////////////////////////////////////
        function Tempsmaxprint() {
            if (z == tempsmax) {
                $('#secondes1').text(s1);
                $('#minutes1').text(m1);
                $('#sectionblock').text('Mes compétences');
            }else if (z1 == tempsmax) {
                $('#secondes1').text(s2);
                $('#minutes1').text(m2);
                $('#sectionblock').text('Mon expèrience pro');
            }else if (z2 == tempsmax) {
                $('#secondes1').text(s3);
                $('#minutes1').text(m3);
                $('#sectionblock').text('Mes projets');
            }
        }
        Tempsmaxprint();
///////////////////////////////Animation compteur///////////////////////////////
        if ((Scrollmidscreen > compteurtaille) && (PosScroll < compteurtot)){
            $('.Consultercv').css('bottom', '0');
            $('#infoln1').css('left', '0');
            $('#compteurtemps').css('left', '0');
        }
///////////////////////////////////////Animation h3 stage//////////////////////////////////////////////////////
        tailleh3kameleoonlist.forEach(function(item, index) {
            if ((Scrollmidscreen > item) && (PosScroll < item)){
                $('#h3kame' + index).addClass('widthmax');
            }
        });
/////////////////////////////Chronocompet///////////////////////////////
        if ((PosScroll > CompetencesTaille) && (PosScroll < compettot)){
            timestamping = 1000 / 60;
            if (testing == 0) {
                Chronocompet();
                testing++
            }
        }else{
            timestamping = 10000000;
            testing = 0;
        }
///////////////////////////chronoexperience/////////////////////////////////
        if ((PosScroll > StageTaille) && (PosScroll < stagetot)){
            timestamping1 = 1000 / 60;
            if (testing1 == 0) {
                Chronoexper();
                testing1++
            }
        }else{
            timestamping1 = 10000000;
            testing1 = 0;
        }
        ///////////////////////////chronoexperience/////////////////////////////////
        if ((PosScroll > MesprojetsTaille) && (PosScroll < projtoto)){
            timestamping2 = 1000 / 60;
            if (testing2 == 0) {
                Chronoprojet();
                testing2++
            }
        }else{
            timestamping2 = 10000000;
            testing2 = 0;
        }
////////////////////////////////////////////////////////////////////////////////////////////////
        if (PosScroll >= MenuOn) {
            $("#myBar").css('width', scrolled + "%");
            barreCharge.removeClass('hide');
            nav.addClass('nav_fixed');
            $('.headbar').addClass('show');
            $("#monBouton").addClass('opacity2');

        } else {
            $('.headbar').removeClass('show');
            $("#monBouton").removeClass('opacity2');
            nav.removeClass('nav_fixed');
            barreCharge.addClass('hide');
        }
        ////////////////////////////////////////Animation compétences/////////////////////////////////////////////////////////////////
        if ((Scrollmidscreen >= CompetencesTaillereload) && (bloquage < 1)) {
            $('#icon1').addClass('icon-html');
            $('.icon-css3').addClass('icon-css');
            $('.icon-php').addClass('icon-php1');
            $('.icon-python').addClass('icon-python1');
            $('.icon-javascript').addClass('icon-js1');
            $('.c').addClass('icon-c1');
            /////////////////////////////////////////Popin opacity/////////////////////////////////////////////////////////////////
            $("#popin").addClass('opacity');
            $("#popin").css('visibility', 'visible');
            bloquage = ++bloquage;
            /////////////////////////////////////////////Popin Compétence/////////////////////////////////////////////////////////////////////////////////////////
            var counterdelay = 0;
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function Chronof() {
                setTimeout(function () {
                    counterdelay++;
                    if (counterdelay < 120) {
                        Chronof();
                    }
                }, 1000 / 10)//on répète la fonction toute les 1 ms
                ////////////////////////delay////////////////////////////////
                if (counterdelay == 10) {
                    for (let i = 0; i < Popdescr.length; i++) {
                        PopComp(icon[i], Popdescr[i])
                        if ($(window).width() > 600) {
                            document.querySelector(icon[i]).animate([
                                // keyframes
                                { padding: '50px' },
                                { padding: '65px' },
                                { padding: '50px' }
                            ], {
                                    // timing options
                                    delay: 300 * i,
                                    duration: 350,
                                    iterations: 1
                                });
                        }
                    }
                }
        //////////////////////////////////////Remove skills//////////////////////////////////////
                if (counterdelay == 45) {
                    icon.forEach(function(item) {
                        $(item).removeClass('Skills');
                      });
                }
            }
            Chronof();
            function PopComp(icon, Popdes) {
                $(Popdes).click(function () {
                    $(Popdes).removeClass('Affichage');
                    $('#descriptif').removeClass('fondaff');
                })
                $(icon).click(function () {
                    $(Popdes).addClass('Affichage');
                    $('#descriptif').addClass('fondaff');
                })
                $('#descriptif').click(function () {
                    $(Popdes).removeClass('Affichage');
                    $('#descriptif').removeClass('fondaff');
                })
            }
            /////////////////////////////////////////Fonction animation du pourcentage///////////////////////////////////////
            for (let i = 0; i < spanNumber.length; i++) {//Pour tous les éléments de la liste spanNumber
                countdown(spanNumber[i], spanpourcentage[i])
            }
            /////////////////////////////////////////Fonction animation du pourcentage///////////////////////////////////////
            function countdown(elem, size) {
                var cpt = 5; //Initialisation du compteur
                var duree = 4.7; // Durée en seconde
                var delta = Math.ceil((duree * 1000) / size); // Durée d'un %
                function setTest() {
                    progress();//Fonction progress
                }
                function progress() {
                    $(elem).text(cpt);//Met le text de l'element visé à cpt
                    ++cpt;//cpt +1
                    if (cpt < size) { //relance compteur
                        setTimeout(function () {
                            setTest()
                        }, delta)//delay = delta différent pour chaque i
                    }
                }
                progress()
            }
        }
        /////////////////////////////////////////Opacity body///////////////////////////////////////
        for (let i = 0; i < ListOpacity.length; i++) {
            Opacitychange(ListOpacity[i])
        }
        function Opacitychange(ListOpacity) {
            var posSection = document.querySelector(ListOpacity).offsetTop;
            if (Scrollmidscreen >= posSection) {
                $(ListOpacity).addClass('opacity');
                if (ListOpacity == '.position') {
                    $('.box-slider').css('bottom', '0');
                }
                if (ListOpacity == '.fondpc') {
                    $('.pcslid').css('bottom', '0');
                }
            }
        }
        ///////////////////////////////////////////////Belmabraanim///////////////////////////////////////////////
            var posBelamb = document.querySelector("#Competencekame").offsetTop + document.querySelector("#imgbelamb").offsetTop;
            if (Scrollmidscreen >= posBelamb) {
                $('#imgbelamb').css('opacity', '1');
                $('.gauche').css('left', '0');
                $('.droite').css('right', '0');
            }
            ///////////////////////////////////////////////Renaultanim///////////////////////////////////////////////
            var posrenault = document.querySelector("#Competencekame").offsetTop + document.querySelector(".posrenault").offsetTop;
            if (Scrollmidscreen >= posrenault) {
                $('.posrenault').css('opacity', '1');
                $('#renault1').css('left', '0');
                $('#renault2').css('right', '0');
                $('#renault3').css('bottom', '0');
            }
            ///////////////////////////////////////////////code anim///////////////////////////////////////////////
            for (let i = 0; i < codeminilist.length; i++) {
                const listcode = codeminilist[i];
                var poscode = document.querySelector(listcode).offsetTop + document.querySelector("#Competencekame").offsetTop
                if (Scrollmidscreen >= poscode) {
                    $(listcode).css('opacity', '1');
                    $(listcode).css('animation', 'bouncecode .3s ease 1');
                    $(listcode).css('animation-delay', '.3s');
                }
                
            }
        /////////////////////////////////////////Animation h3///////////////////////////////////////
        for (let i = 0; i < Listh3.length; i++) {//Pour tous les éléments de Listh3
            Animh3(Listh3[i], Hauteurh3[i])
        }
        function Animh3(Listh3, Hauteurh3) {
            if ((Scrollmidscreen >= Hauteurh3) && (PosScroll < Hauteurh3)) {
                $(Listh3).removeClass('h3no');
                $(Listh3).addClass('h3annim');
            }
        }
        /////////////////////////////////////////Anim popin///////////////////////////////////////
        var btnclick = 0
        document.getElementById('tetepop').addEventListener('click', function () {
            btnclick = ++btnclick;
            $("#popin").css('animation', 'bounce none');
            if (btnclick % 2 == 1) {
                $("#popin").css('bottom', '0vh');
                $("#retour").addClass('turnimg');
            } else {
                $("#popin").css('bottom', '-' + popHt + 'px');
                $("#retour").removeClass('turnimg');
            }
        })
        document.getElementById('btn_dl').addEventListener('click', function () {
            $("#popin").css('bottom', '-51vh');
            $("#retour").css('transform', 'rotate(0deg)');
        })
        /////////////////////////////////////////Animation du menu nav///////////////////////////////////////
        for (let i = 0; i < Listnav.length; i++) {//Pour tous les éléments de la liste listnav
            Animnav(Listnav[i], Listtaille[i])
        }
        function Animnav(Listnav, Listtaille) {

            if (PosScroll > Listtaille - 84) {//Si le scroll de l'utilisateur est plus haut que la position d'un titre de la section
                $(Listnav).addClass('animnav');
            } else {
                $(Listnav).removeClass('animnav');
            }
        }
    }
    //Formulaire request send
    $('form button[type="submit"]').on('click', function (e) {
        e.preventDefault();
        $.ajax({
            method: "POST",
            url: "../../src/EnvoieFormulaire/Formulaire.php",
            data: {
                nom: $('#nom').val(),
                email: $('#courriel').val(),
                message: $('#message').val()
            }
        }, function (data) {
        }, "json")
            .done(function (msg) {
                alert('Votre mail a été envoyer');
                console.log("Data Saved: " + msg);
            });
    })
});



        /////////////////////////////////////////Belambra annim///////////////////////////////////////
        // if ((PosScroll > Belambra) && (compteurimg == 0)) {
        //     compteurimg++
        //     for (let i = 0; i < Minilistimg.length; i++) {
        //         document.querySelector(Minilistimg[i]).animate([
        //             // keyframes
        //             { transform: 'scale(1)' },
        //             { transform: 'scale(1.8)' },
        //             { transform: 'scale(1)' }
        //         ], {
        //                 // timing options
        //                 delay: 500 * i,
        //                 duration: 500,
        //                 iterations: 1
        //             });
        //     }
        // }
        /////////////////////////////////////////renault annim///////////////////////////////////////
        // if ((PosScroll > renault) && (compteurimg2 == 0)) {
        //     compteurimg2++;
        //     for (let i = 0; i < renaultlist.length; i++) {
        //         document.querySelector(renaultlist[i]).animate([
        //             // keyframes
        //             { transform: 'scale(1)' },
        //             { transform: 'scale(1.8)' },
        //             { transform: 'scale(1)' },
        //         ], {
        //                 // timing options
        //                 delay: 500 * i,
        //                 duration: 500,
        //                 iterations: 1
        //             });
        //     }
        // }