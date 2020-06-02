window.onload = function () {
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js";
    script.onload = script.onreadystatechange = function () {
        $(document).ready(function () {
            alert('now what are we supposed to do?');
        });
    };
    document.body.appendChild(script);
};