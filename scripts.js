<script>

        document.getElementById("CtoF").addEventListener("click",
        function CtoF() {
        var celsius = parseFloat(document.getElementById("inputC").value);
        var fahrenheit = ((celsius * 9) / 5) + 32;
        document.getElementById("resultF").innerHTML = fahrenheit.toFixed(2) + " °F";
        });

        document.getElementById("FtoC").addEventListener("click",
        function FtoC() {
        var fahrenheit = parseFloat(document.getElementById("inputF").value);
        var celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById("resultC").innerHTML = celsius.toFixed(2) + " °C";
        });

        document.getElementById("FtoM").addEventListener("click",
        function FtoM() {
        var feet = parseFloat(document.getElementById("inputFeet").value);
        var meters = feet * 0.3048;
        document.getElementById("resultM").innerHTML = meters.toFixed(4) + " Meters";
        });

        document.getElementById("MtoF").addEventListener("click",
        function MtoF() {
        var meters = parseFloat(document.getElementById("inputM").value);
        var feet = meters * 3.28084;
        document.getElementById("resultFeet").innerHTML = feet.toFixed(4) + " Feet";
        });

    </script>
