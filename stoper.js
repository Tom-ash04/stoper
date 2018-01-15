var cs, ds, sec, das, min, damin, h, dah, show, start_stop, interv, take_time, list, reset_btn;
cs = ds = sec = das = min = damin = h = dah = 0;
show = document.getElementById("time");
show.textContent = "00:00:00:00";
start_stop = document.getElementById("start-btn");
start_stop.onclick = function(){start()};
take_time = document.getElementById("time-btn");
take_time.onclick = function(){write_time()};
list = document.getElementById("time_list");
reset_btn = document.getElementById("reset-btn");
reset_btn.onclick = function() {reset_content()};

function reset_content(){
    list.style.opacity = "0";
    setTimeout(function(){
        list.innerHTML = "";
        list.style.opacity = "";
        }, 500)
    cs = ds = sec = das = min = damin = h = dah = 0;
    show.textContent = "00:00:00:00";
    
}

function write_time(){
    var list_el = document.createElement("li");
    list_el.textContent = show.textContent;
    list.appendChild(list_el);
    list_el.style.height = "0px"
    setTimeout(function(){list_el.style.height = "34px"}, 100)
}

function start(){
    if (start_stop.textContent == "Start"){
        interv = setInterval(time, 10);
        start_stop.textContent = "Stop";
    }
    else if (start_stop.textContent == "Stop") {
    clearInterval(interv);
    start_stop.textContent = "Start";}
}

function time(){
    cs += 1;
    if (cs >= 10){
        cs = 0;
        ds += 1;
        }
    if (ds >= 10){
        ds = 0;
        sec += 1;
    }
    if (sec >= 10){
        sec = 0;
        das += 1;
        }
    if (das >= 6){
        das = 0;
        min += 1;
    }
    if (min >= 6){
        min = 0;
        damin += 1;
        }
    if (damin >= 6){
        damin = 0;
        h += 1;
    }
    if (h >= 10){
        h = 0;
        dah += 1;
    }

    show.textContent = "" + dah + h + ":" + damin + min + ":" + das + sec + ":" + ds + cs;
}