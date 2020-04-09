const switchButton = document.getElementById("switch");
const pricing_tags = document.querySelectorAll("p.price-number");
const pricing_monthly = [19.99, 24.99, 39.99];
const pricing_annually = [199.99, 249.99, 399.99];

switchButton.onclick = () => {
  switchButton.classList.toggle("monthly");
  if (!switchButton.classList.contains("monthly")) {
    pricing_tags.forEach((pricing_tag, index) => {
      pricing_tag.textContent = pricing_annually[index];
    });
  } else {
    pricing_tags.forEach((pricing_tag, index) => {
      pricing_tag.textContent = pricing_monthly[index];
    });
  }
};