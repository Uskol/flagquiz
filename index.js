fetch('./assets/codes.csv')
.then(function(response) {
  return response.text()
})
.then(function(csv) {
  document.getElementById("output").innerText = csv
});
