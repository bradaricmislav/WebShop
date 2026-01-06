document.querySelector(".newsletterForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.querySelector(".email").value.trim();
  const msg = document.querySelector(".newsletter-message");

  if (!email) 
  {
    msg.textContent = "Email je obavezan.";
    return;
  }

  else if (!email.includes("@")) 
  {
    msg.textContent = "Unesite ispravan email.";
    return;
  }
  else if (!email.includes(".com") && !email.includes(".hr"))
  {
    msg.textContent = "Unesite ispravan email.";
    return;
  }

  msg.textContent = "Uspješno ste se prijavili!";

  setTimeout(() => {
        msg.textContent = ""; 
    }, 3000);
    document.querySelector(".email").value="";
});
