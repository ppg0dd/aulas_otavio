function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var selectedUnit = document.getElementById("unit").value;
  
    var celsius, fahrenheit, kelvin;
  
    if (selectedUnit === "celsius") {
      celsius = parseFloat(temperatureInput);
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = celsius + 273.15;
    } else if (selectedUnit === "fahrenheit") {
      fahrenheit = parseFloat(temperatureInput);
      celsius = (fahrenheit - 32) * 5/9;
      kelvin = (fahrenheit + 459.67) * 5/9;
    } else if (selectedUnit === "kelvin") {
      kelvin = parseFloat(temperatureInput);
      celsius = kelvin - 273.15;
      fahrenheit = (kelvin * 9/5) - 459.67;
    }
  
    var result = document.getElementById("result");
    result.innerHTML = "Temperatura em Celsius: " + celsius.toFixed(2) + "°C<br>";
    result.innerHTML += "Temperatura em Fahrenheit: " + fahrenheit.toFixed(2) + "°F<br>";
    result.innerHTML += "Temperatura em Kelvin: " + kelvin.toFixed(2) + "K";
  
    var body = document.getElementsByTagName("body")[0];
    var hue = mapTemperatureToHue(celsius);
    body.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)";
  }
  
  function mapTemperatureToHue(celsius) {
    if (celsius <= 0) {
      return 240; // Azul escuro
    } else if (celsius >= 40) {
      return 0; // Vermelho
    } else {
      return (40 - celsius) * 2.4; // Interpolação linear de azul a vermelho
    }
  }
  