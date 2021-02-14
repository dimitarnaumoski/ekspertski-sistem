// Kreiranje atributi
const startButton = document.querySelector('.start-button');
const welcomeHeader = document.getElementById('welcome-head');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const prasanje = document.querySelector('.prasanje');
const refreshButton = document.querySelector('.refresh-button');

startButton.addEventListener('click', startExpert);

// Kopce za refresh
refreshButton.addEventListener('click', () => window.location.reload());

// Funkcija za kopceto start - zapocnuvanje na sistemot
function startExpert(){ 
   welcomeHeader.style.visibility = "hidden";  
   welcomeHeader.style.opacity = "0";  
   welcomeHeader.style.transition =  "all 0.5s ease-out";
   startButton.style.visibility = "hidden";
   btn1.style.visibility = "visible";
   btn1.style.opacity = "1";
   btn1.style.transition =  "opacity 0.5s ease-in";
   btn2.style.visibility = "visible";
   btn2.style.opacity = "1";
   btn2.style.transition =  "opacity 0.5s ease-in";
   btn3.style.visibility = "visible";
   btn3.style.opacity = "1";
   btn3.style.transition =  "opacity 0.5s ease-in";
   btn4.style.visibility = "visible";
   btn4.style.opacity = "1";
   btn4.style.transition =  "opacity 0.5s ease-in";

   prasanje.innerHTML = "Изберете ја вашата проблематика";
   btn1.innerHTML = "Мотор";
   btn2.innerHTML = "Сопирачки";
   btn3.innerHTML = "Светла";
   btn4.innerHTML = "Пневматици";
}

// Funkcii za sekoe poedinecna opcija
btn1.addEventListener("click", motor);
btn2.addEventListener("click", kocnici);
btn3.addEventListener("click", svetla);
btn4.addEventListener("click", gumi);

// Ekspertski sistem za motor
function motor() {
    prasanje.innerHTML = "Дали стартува моторот?";
    btn1.innerHTML = "Да";
    btn2.innerHTML = "Не";
    btn3.style.visibility = "hidden";
    btn4.style.visibility = "hidden";

    // Funkcii za motor
    btn1.addEventListener("click", paliDa);
    btn2.addEventListener("click", paliNe);

    function paliDa() {
        prasanje.innerHTML = "Дали моторот работи нормално?";
        btn1.addEventListener("click", normalnoDa);
        btn2.addEventListener("click", normalnoNe);

        
        function normalnoDa() {
            welcomeHeader.style.visibility = "visible";
            welcomeHeader.style.opacity = "1";
            welcomeHeader.innerHTML = "Не треба поправка";
            prasanje.style.visibility = "visible";
            prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
            btn1.style.visibility = "hidden";
            btn2.style.visibility = "hidden";
            refreshButton.style.visibility = "visible";
        }
        function normalnoNe() {
            prasanje.innerHTML = "Дали моторот работи слабо?"
            btn1.addEventListener("click", slaboDa);
            btn2.addEventListener("click", slaboNe);

            function slaboDa() {
                welcomeHeader.style.visibility = "visible";
                welcomeHeader.style.opacity = "1";
                welcomeHeader.innerHTML = "Исчистете ја линијата за гориво"
                prasanje.style.visibility = "visible";
                prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
                btn1.style.visibility = "hidden";
                btn2.style.visibility = "hidden";
                refreshButton.style.visibility = "visible";
            }
    
            function slaboNe() {
                prasanje.innerHTML = "Дали при работа моторот трохира?";
                btn1.addEventListener("click", trohiraDa);
                btn2.addEventListener("click", trohiraNe);

                function trohiraDa() {
                    welcomeHeader.style.visibility = "visible";
                    welcomeHeader.style.opacity = "1";
                    welcomeHeader.innerHTML = "Заменете ги свеќиците";
                    prasanje.style.visibility = "visible";
                    prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
                    btn1.style.visibility = "hidden";
                    btn2.style.visibility = "hidden";
                    refreshButton.style.visibility = "visible";
                }

                function trohiraNe() {
                    welcomeHeader.style.visibility = "hidden";
                    prasanje.style.visibility = "visible";
                    btn1.style.visibility = "visible";
                    btn2.style.visibility = "visible";
                    prasanje.innerHTML = "Дали при работа на моторот се слуша некој звук?";
                    btn1.addEventListener("click", tropaDa);
                    btn2.addEventListener("click", tropaNe);
                    refreshButton.style.visibility = "hidden";

                    function tropaDa() {  
                        welcomeHeader.style.visibility = "visible";
                        welcomeHeader.style.opacity = "1";
                        welcomeHeader.innerHTML = "Направете прилагодувања со ребрастиот каиш";
                        prasanje.style.visibility = "visible";
                        prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
                        btn1.style.visibility = "hidden";
                        btn2.style.visibility = "hidden";
                        refreshButton.style.visibility = "visible";
                    }

                    function tropaNe() {
                        prasanje.innerHTML = "Дали силата на моторот е намалена?"
                        btn1.addEventListener("click", snagaDa);
                        btn2.addEventListener("click", snagaNe);

                        function snagaDa() {
                            welcomeHeader.style.visibility = "visible";
                            welcomeHeader.style.opacity = "1";
                            welcomeHeader.innerHTML = "Проверете ја спроводливоста на свеќиците";
                            prasanje.style.visibility = "visible";
                            prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
                            btn1.style.visibility = "hidden";
                            btn2.style.visibility = "hidden";
                            refreshButton.style.visibility = "visible";
                        }

                        function snagaNe() {
                            welcomeHeader.style.visibility = "visible";
                            welcomeHeader.style.opacity = "1";
                            welcomeHeader.innerHTML = "Одведете го автомобилот на механичар";
                            prasanje.style.visibility = "visible";
                            prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
                            btn1.style.visibility = "hidden";
                            btn2.style.visibility = "hidden";
                            refreshButton.style.visibility = "visible";
                        }
                    }

                }
            }

        }
    }
}


    function paliNe() {
        prasanje.innerHTML = "Дали вергла?";

        btn1.addEventListener("click", verglaDa);
        btn2.addEventListener("click", verglaNe);

        function verglaDa() {
            prasanje.innerHTML = "Дали во резервоарот има гориво?";

            btn1.addEventListener("click", imaGorivo);
            btn2.addEventListener("click", nemaGorivo);

            function imaGorivo() {
                    welcomeHeader.style.visibility = "visible";
                    welcomeHeader.style.opacity = "1";
                    welcomeHeader.innerHTML = "Проверете ја пумпата за гориво";
                    prasanje.style.visibility = "visible";
                    prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
                    btn1.style.visibility = "hidden";
                    btn2.style.visibility = "hidden";
                    refreshButton.style.visibility = "visible";
            }

            function nemaGorivo() {
                    welcomeHeader.style.visibility = "visible";
                    welcomeHeader.style.opacity = "1";
                    welcomeHeader.innerHTML = "Турете гориво во автомобилот";
                    prasanje.style.visibility = "visible";
                    prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
                    btn1.style.visibility = "hidden";
                    btn2.style.visibility = "hidden";
                    refreshButton.style.visibility = "visible";
                

            }
        }

        function verglaNe() {
            prasanje.innerHTML = "Дали батеријата е полна?";

            btn1.addEventListener("click", baterijaPolna);
            btn2.addEventListener("click", baterijaPrazna);

            function baterijaPolna() {
                    welcomeHeader.style.visibility = "visible";
                    welcomeHeader.style.opacity = "1";
                    welcomeHeader.innerHTML = "Проверете го алтернаторот";
                    prasanje.style.visibility = "visible";
                    prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
                    btn1.style.visibility = "hidden";
                    btn2.style.visibility = "hidden";
                    refreshButton.style.visibility = "visible";
            }

            function baterijaPrazna() { 
                    welcomeHeader.style.visibility = "visible";
                    welcomeHeader.style.opacity = "1";
                    welcomeHeader.innerHTML = "Наполнете ја батеријата, а ако не се полни заменете ја со нова";
                    prasanje.style.visibility = "visible";
                    prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
                    btn1.style.visibility = "hidden";
                    btn2.style.visibility = "hidden";
                    refreshButton.style.visibility = "visible";     
            }
        }
    }

function kocnici() {
    prasanje.innerHTML = "Дали педалата за сопирачките е тврда?";
    btn1.innerHTML = "Да";
    btn2.innerHTML = "Не";
    btn3.style.visibility = "hidden";
    btn4.style.visibility = "hidden";

    // Funkcii za kocnici
    btn1.addEventListener("click", tvrdiDa);
    btn2.addEventListener("click", tvrdiNe);
    
    function tvrdiDa() {
        prasanje.innerHTML = "Дали автомобилот не бил користен подолг период?";

        btn1.addEventListener("click", bilKoristen);
        btn2.addEventListener("click", nebilKoristen);
        
        function bilKoristen() {
            welcomeHeader.style.visibility = "visible";
            welcomeHeader.style.opacity = "1";
            welcomeHeader.innerHTML = "Проверете дали постои рѓа близу педалите, ако има исчистете ја со специјално средство";
            prasanje.style.visibility = "visible";
            prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
            btn1.style.visibility = "hidden";
            btn2.style.visibility = "hidden";
            refreshButton.style.visibility = "visible";
        }
        function nebilKoristen() {        
            welcomeHeader.style.visibility = "visible";
            welcomeHeader.style.opacity = "1";
            welcomeHeader.innerHTML = "Имате воздух во глицеринот, испуштете го со испумпување";
            prasanje.style.visibility = "visible";
            prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
            btn1.style.visibility = "hidden";
            btn2.style.visibility = "hidden";
            refreshButton.style.visibility = "visible";
        }
    }

    function tvrdiNe() {
        prasanje.innerHTML = "Дали педалата се чувствува лесна?";

        btn1.addEventListener("click", lesnaDa);
        btn2.addEventListener("click", lesnaNe);

        function lesnaDa(){
            prasanje.innerHTML = "Дали има истекување на течност(глицерин) кај главниот цилиндар?";

            btn1.addEventListener("click", imaIstekuvanje);
            btn2.addEventListener("click", nemaIstekuvanje);

            function imaIstekuvanje() {
            welcomeHeader.style.visibility = "visible";
            welcomeHeader.style.opacity = "1";
            welcomeHeader.innerHTML = "Поправете го истекувањето и притоа заменете ги гумиците";
            prasanje.style.visibility = "visible";
            prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
            btn1.style.visibility = "hidden";
            btn2.style.visibility = "hidden";
            refreshButton.style.visibility = "visible";
            }

            function nemaIstekuvanje() {
            welcomeHeader.style.visibility = "visible";
            welcomeHeader.style.opacity = "1";
            welcomeHeader.innerHTML = "Проверете дали има внатрешно оштетување, ако има заменете го цилиндарот";
            prasanje.style.visibility = "visible";
            prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
            btn1.style.visibility = "hidden";
            btn2.style.visibility = "hidden";
            refreshButton.style.visibility = "visible";
            }
        }

        function lesnaNe() {
            prasanje.innerHTML = "Дали автомобилот влечи на една страна кога кочите?";

            btn1.addEventListener("click", vleciDa);
            btn2.addEventListener("click", neVleci);

            function vleciDa() { 
            welcomeHeader.style.visibility = "visible";
            welcomeHeader.style.opacity = "1";
            welcomeHeader.innerHTML = "Можност за замрзната кочничка клешта";
            prasanje.style.visibility = "visible";
            prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
            btn1.style.visibility = "hidden";
            btn2.style.visibility = "hidden";
            refreshButton.style.visibility = "visible";
            }

            function neVleci() {
             prasanje.innerHTML = "Дали на дисковите има видливи оштетувања?";
             
             btn1.addEventListener("click", debeliSe);
             btn2.addEventListener("click", neSedebeli);

             function debeliSe() {        
                welcomeHeader.style.visibility = "visible";
                welcomeHeader.style.opacity = "1";
                welcomeHeader.innerHTML = "Преработете ги дисковите или заменете ги со нови";
                prasanje.style.visibility = "visible";
                prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
                btn1.style.visibility = "hidden";
                btn2.style.visibility = "hidden";
                refreshButton.style.visibility = "visible";
             }

             function neSedebeli() {
                welcomeHeader.style.visibility = "visible";
                welcomeHeader.style.opacity = "1";
                welcomeHeader.innerHTML = "Заменете ги кочионите плочки";
                prasanje.style.visibility = "visible";
                prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
                btn1.style.visibility = "hidden";
                btn2.style.visibility = "hidden";
                refreshButton.style.visibility = "visible";
             }
            }
        }
    }
}

function svetla() {
    prasanje.innerHTML = "Каков проблем имате со светлата?";
    btn1.innerHTML = "Флуктуирачки";
    btn2.innerHTML = "Слабо осветлени";
    btn3.innerHTML = "Секогаш се исклучени";
    btn4.style.visibility = "hidden";

    btn1.addEventListener("click", fluktuiracki);
    btn2.addEventListener("click", zatemneti);
    btn3.addEventListener("click", sekogasOff);

    function fluktuiracki() {
        prasanje.innerHTML = "Дали конекцијата е цврста?";

        btn1.addEventListener("click", cvrstaDa);
        btn2.addEventListener("click", cvrstaNe);

        function cvrstaDa() {
            welcomeHeader.style.visibility = "visible";
            welcomeHeader.style.opacity = "1";
            welcomeHeader.innerHTML = "Дисконектирајте ја батеријата и исчистете ја";
            prasanje.style.visibility = "visible";
            prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
            btn1.style.visibility = "hidden";
            btn2.style.visibility = "hidden";
            refreshButton.style.visibility = "visible";
        }
        function cvrstaNe(){
            welcomeHeader.style.visibility = "visible";
            welcomeHeader.style.opacity = "1";
            welcomeHeader.innerHTML = "Поправете ги конекциите";
            prasanje.style.visibility = "visible";
            prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
            btn1.style.visibility = "hidden";
            btn2.style.visibility = "hidden";
            refreshButton.style.visibility = "visible";
        }
    }

    function sekogasOff() {
        welcomeHeader.style.visibility = "visible";
        welcomeHeader.style.opacity = "1";
        welcomeHeader.innerHTML = "Прегледајте го електричниот конектор и проверете дали треба да се замени";
        prasanje.style.visibility = "visible";
        prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
        btn1.style.visibility = "hidden";
        btn2.style.visibility = "hidden";
        refreshButton.style.visibility = "visible";
        btn3.style.visibility = "hidden";
    }

    function zatemneti(){
        prasanje.innerHTML = "Дали фаровите секогаш се слабо осветлени?";

        btn1.addEventListener("click", faroviDa);
        btn2.addEventListener("click", faroviNe);

        function faroviDa() {
            welcomeHeader.style.visibility = "visible";
            welcomeHeader.style.opacity = "1";
            welcomeHeader.innerHTML = "Заменете ја сијалицата";
            prasanje.style.visibility = "visible";
            prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
            btn1.style.visibility = "hidden";
            btn2.style.visibility = "hidden";
            refreshButton.style.visibility = "visible";
        }

        function faroviNe() {
            prasanje.innerHTML = "Дали алтернаторот е стар?";

            btn1.addEventListener("click", alterStar);
            btn2.addEventListener("click", alterNov);

            function alterStar() {
                welcomeHeader.style.visibility = "visible";
                welcomeHeader.style.opacity = "1";
                welcomeHeader.innerHTML = "Заменете го алтернаторот со нов";
                prasanje.style.visibility = "visible";
                prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
                btn1.style.visibility = "hidden";
                btn2.style.visibility = "hidden";
                refreshButton.style.visibility = "visible";
            }

            function alterNov() {
                welcomeHeader.style.visibility = "visible";
                welcomeHeader.style.opacity = "1";
                welcomeHeader.innerHTML = "Поправете го алтернаторот";
                prasanje.style.visibility = "visible";
                prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
                btn1.style.visibility = "hidden";
                btn2.style.visibility = "hidden";
                refreshButton.style.visibility = "visible";
            }
        }

    }
}

function gumi() {
    prasanje.innerHTML = "Дали пневматиците се напумпани?";
    btn1.innerHTML = "Да";
    btn2.innerHTML = "Не";
    btn3.style.visibility = "hidden";
    btn4.style.visibility = "hidden";

    btn1.addEventListener("click", gumiNapumpani);
    btn2.addEventListener("click", gumiIstusheni);

    function gumiNapumpani() {
        prasanje.innerHTML = "Дали пневматиците се правилно порамнети?"

        btn1.addEventListener("click", gumiPoramneti);
        btn2.addEventListener("click", gumiKrivi);

        function gumiPoramneti() {
            prasanje.innerHTML = "Дали тркалата се движат слободно?";

            btn1.addEventListener("click", gumiSlobodno);
            btn2.addEventListener("click", gumiTesko);

            function gumiSlobodno() {
                welcomeHeader.style.visibility = "hidden";
                prasanje.innerHTML = "Дали постои кал или нечистотија?";
                btn1.style.visibility = "visible";
                btn2.style.visibility = "visible";
                refreshButton.style.visibility = "hidden";


                btn1.addEventListener("click", kalIma);
                btn2.addEventListener("click", kalNema);

                function kalIma() {
                    welcomeHeader.style.visibility = "visible";
                    welcomeHeader.style.opacity = "1";
                    welcomeHeader.innerHTML = "Исчистете ја калта и нечистотијата";
                    prasanje.style.visibility = "visible";
                    prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
                    btn1.style.visibility = "hidden";
                    btn2.style.visibility = "hidden";
                    refreshButton.style.visibility = "visible";
                }

                function kalNema() {
                    welcomeHeader.style.visibility = "hidden";
                    prasanje.innerHTML = "Дали имате прекумерена бучава од лагерите на тркалата?";
                    refreshButton.style.visibility = "hidden";
                    btn1.style.visibility = "visible";
                    btn2.style.visibility = "visible";

                    btn1.addEventListener("click", lageriDa);
                    btn2.addEventListener("click", lageriNe);

                    function lageriDa(){
                        welcomeHeader.style.visibility = "visible";
                        welcomeHeader.style.opacity = "1";
                        welcomeHeader.innerHTML = "Заменете ги лагерите";
                        prasanje.style.visibility = "visible";
                        prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
                        btn1.style.visibility = "hidden";
                        btn2.style.visibility = "hidden";
                        refreshButton.style.visibility = "visible";
                    }

                    function lageriNe() {
                        welcomeHeader.style.visibility = "visible";
                        welcomeHeader.style.opacity = "1";
                        welcomeHeader.innerHTML = "Однесете го автомобилот на механичар";
                        prasanje.style.visibility = "visible";
                        prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
                        btn1.style.visibility = "hidden";
                        btn2.style.visibility = "hidden";
                        refreshButton.style.visibility = "visible";
                    }
                }
            }

            function gumiTesko() {
                welcomeHeader.style.visibility = "visible";
                welcomeHeader.style.opacity = "1";
                welcomeHeader.innerHTML = "Ставете масло во оската";
                prasanje.style.visibility = "visible";
                prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
                btn1.style.visibility = "hidden";
                btn2.style.visibility = "hidden";
                refreshButton.style.visibility = "visible";
            }
        }

        function gumiKrivi() {
            welcomeHeader.style.visibility = "visible";
            welcomeHeader.style.opacity = "1";
            welcomeHeader.innerHTML = "Центрирајте ги пневматиците";
            prasanje.style.visibility = "visible";
            prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
            btn1.style.visibility = "hidden";
            btn2.style.visibility = "hidden";
            refreshButton.style.visibility = "visible";
        }
    }

    function gumiIstusheni() {
        prasanje.innerHTML = "Дали пневматиците го испуштаат воздухот?";

        btn1.addEventListener("click", gumiRusheni);
        btn2.addEventListener("click", gumiNerusheni);

        function gumiRusheni() {
            welcomeHeader.style.visibility = "visible";
            welcomeHeader.style.opacity = "1";
            welcomeHeader.innerHTML = "Поправете го пробушувањето";
            prasanje.style.visibility = "visible";
            prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
            btn1.style.visibility = "hidden";
            btn2.style.visibility = "hidden";
            refreshButton.style.visibility = "visible";
        }

        function gumiNerusheni() {
            welcomeHeader.style.visibility = "visible";
            welcomeHeader.style.opacity = "1";
            welcomeHeader.innerHTML = "Напумпајте ги пневматиците";
            prasanje.style.visibility = "visible";
            prasanje.innerHTML = "Кликнете на копчето за да започнете одново";
            btn1.style.visibility = "hidden";
            btn2.style.visibility = "hidden";
            refreshButton.style.visibility = "visible";
        }
        
    }
}