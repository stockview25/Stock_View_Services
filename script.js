document.addEventListener("DOMContentLoaded", function() {
    fetchLiveMarketData();
});

function fetchLiveMarketData() {
    document.getElementById("market-data").innerHTML = "Live Data Coming Soon...";
}

// Form Submission (Just a Placeholder)
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Signup successful!");
});

