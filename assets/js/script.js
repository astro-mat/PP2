let generateButton = document.getElementById("generate-button");
let outputFirst = document.getElementById("outputFirst");
let outputSecond = document.getElementById("outputSecond");
let outputThird = document.getElementById("outputThird");

let outputBackingtrack = document.getElementById("backingTrack");

let outputMajorScale = document.getElementById("majorScale");
let outputMinorScale = document.getElementById("minorScale");
let outputPentScale = document.getElementById("pentScale");


let firstColumn = [
    "Use the 1st string (E) only", 
    "Use the 2nd string (B) only",
    "Use the 3rd string (G) only",
    "Use the 4th string (D) only",
    "Use the 5th string (A) only",
    "Use the 6th string (E) only",
    "Use Double stops only",
    "Use top 3 strings",
    "Use Bottom 3 strings",
    "Use no adjacent strings (Always skip if changing strings)",
    "Use No string restrictions"];

let secondColumn = [
    "Focus on your pointer finger",
    "Focus on your middle finger",
    "Focus on your ring finger",
    "Focus on your pinky finger",
    "Focus on picking every note",
    "Focus on picking few notes",
    "Focus on slides",
    "Focus on bends",
    "Focus on hammer ons",
    "Focus on open strings",
    "Focus on nothing"];

let thirdColumn = [
    "In the key of B.",
    "In the key of C.",
    "In the key of C#/Db.",
    "In the key of D.",
    "In the key of D#/Eb.",
    "In the key of E.",
    "In the key of F.",
    "In the key of F#/Gb.",
    "In the key of G.",
    "In the key of G#/Ab.",
    "In the key of A.",
    "In the key of A#/Bb."]
 
    var keyB = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/788758180&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/oceanographic" title="Oceanographic" target="_blank" style="color: #cccccc; text-decoration: none;">Oceanographic</a> · <a href="https://soundcloud.com/oceanographic/ilp-pad-b" title="Improv Launch Pad B" target="_blank" style="color: #cccccc; text-decoration: none;">Improv Launch Pad B</a></div>';
    var keyC = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/788758162&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/oceanographic" title="Oceanographic" target="_blank" style="color: #cccccc; text-decoration: none;">Oceanographic</a> · <a href="https://soundcloud.com/oceanographic/ilp-pad-c" title="Improv Launch Pad C" target="_blank" style="color: #cccccc; text-decoration: none;">Improv Launch Pad C</a></div>';
    var keyCsharp = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/788758150&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/oceanographic" title="Oceanographic" target="_blank" style="color: #cccccc; text-decoration: none;">Oceanographic</a> · <a href="https://soundcloud.com/oceanographic/ilp-pad-db" title="Improv Launch Pad C#/Db" target="_blank" style="color: #cccccc; text-decoration: none;">Improv Launch Pad C#/Db</a></div>';
    var keyD = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/788758159&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/oceanographic" title="Oceanographic" target="_blank" style="color: #cccccc; text-decoration: none;">Oceanographic</a> · <a href="https://soundcloud.com/oceanographic/ilp-pad-d" title="Improv Launch Pad D" target="_blank" style="color: #cccccc; text-decoration: none;">Improv Launch Pad D</a></div>';
    var keyDsharp = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/788758138&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/oceanographic" title="Oceanographic" target="_blank" style="color: #cccccc; text-decoration: none;">Oceanographic</a> · <a href="https://soundcloud.com/oceanographic/ilp-pad-eb" title="Improv Launch Pad D#/Eb" target="_blank" style="color: #cccccc; text-decoration: none;">Improv Launch Pad D#/Eb</a></div>';
    var keyE = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/788758141&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/oceanographic" title="Oceanographic" target="_blank" style="color: #cccccc; text-decoration: none;">Oceanographic</a> · <a href="https://soundcloud.com/oceanographic/ilp-pad-e" title="Improv Launch Pad E" target="_blank" style="color: #cccccc; text-decoration: none;">Improv Launch Pad E</a></div>';
    var keyF = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/788758126&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/oceanographic" title="Oceanographic" target="_blank" style="color: #cccccc; text-decoration: none;">Oceanographic</a> · <a href="https://soundcloud.com/oceanographic/ilp-pad-f" title="Improv Launch Pad F" target="_blank" style="color: #cccccc; text-decoration: none;">Improv Launch Pad F</a></div>';
    var keyFsharp = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/788758135&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/oceanographic" title="Oceanographic" target="_blank" style="color: #cccccc; text-decoration: none;">Oceanographic</a> · <a href="https://soundcloud.com/oceanographic/ilp-pad-f-1" title="Improv Launch Pad F#/Gb" target="_blank" style="color: #cccccc; text-decoration: none;">Improv Launch Pad F#/Gb</a></div>';
    var keyG = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/788758114&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/oceanographic" title="Oceanographic" target="_blank" style="color: #cccccc; text-decoration: none;">Oceanographic</a> · <a href="https://soundcloud.com/oceanographic/ilp-pad-g" title="Improv Launch Pad G" target="_blank" style="color: #cccccc; text-decoration: none;">Improv Launch Pad G</a></div>';
    var keyGsharp = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/788758183&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/oceanographic" title="Oceanographic" target="_blank" style="color: #cccccc; text-decoration: none;">Oceanographic</a> · <a href="https://soundcloud.com/oceanographic/ilp-pad-ab" title="Improv Launch Pad G#/Ab" target="_blank" style="color: #cccccc; text-decoration: none;">Improv Launch Pad G#/Ab</a></div>';
    var keyA = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/788758186&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/oceanographic" title="Oceanographic" target="_blank" style="color: #cccccc; text-decoration: none;">Oceanographic</a> · <a href="https://soundcloud.com/oceanographic/ilp-pad-a" title="Improv Launch Pad A" target="_blank" style="color: #cccccc; text-decoration: none;">Improv Launch Pad A</a></div>';
    var keyAsharp = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/788758174&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/oceanographic" title="Oceanographic" target="_blank" style="color: #cccccc; text-decoration: none;">Oceanographic</a> · <a href="https://soundcloud.com/oceanographic/ilp-pad-bb" title="Improv Launch Pad A#/Bb" target="_blank" style="color: #cccccc; text-decoration: none;">Improv Launch Pad A#/Bb</a></div>';


/**
 * The main prompt generator
 */

generateButton.addEventListener("click", function() {
    var randomFirstColumn = firstColumn[Math.floor(Math.random() * firstColumn.length)]
    outputFirst.innerHTML = randomFirstColumn;
    var randomSecondColumn = secondColumn[Math.floor(Math.random() * secondColumn.length)]
    outputSecond.innerHTML = randomSecondColumn;
    var randomThirdColumn = thirdColumn[Math.floor(Math.random() * thirdColumn.length)]
    outputThird.innerHTML = randomThirdColumn;


    switch (outputThird) {
        case 1:
            outputThird === "In the key of B.";
            outputBackingtrack.innerHTML = keyB;
            break;
        case 2:
            outputThird === "In the key of C.";
            outputBackingtrack.innerHTML = keyC;
            break;
        case 3:
            outputThird === "In the key of C#/Db.";
            outputBackingtrack.innerHTML = keyCsharp;
            break;
        case 4:
            outputThird === "In the key of D.";
            outputBackingtrack.innerHTML = keyD;
            break;
        case 5:
            outputThird === "In the key of D#/Eb.";
            outputBackingtrack.innerHTML = keyDsharp;
            break;
        case 6:
            outputThird === "In the key of E.";
            outputBackingtrack.innerHTML = keyE;
            break;
        case 7:
            outputThird === "In the key of F.";
            outputBackingtrack.innerHTML = keyF;
            break;
        case 8:
            outputThird === "In the key of F#/Gb.";
            outputBackingtrack.innerHTML = keyFsharp;
            outputMajorScale.innerHTML = '<img src="assets/images/scales/FsharpMajor.jpg" alt="F#Major" width=100%>';
            break;

    

}






})

