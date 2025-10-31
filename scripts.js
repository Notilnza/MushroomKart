
 const cart = [];

  function addToCart(productName, price) {
    let quantity = prompt(`How many units of "${productName}" would you like to buy?`);

    if (quantity !== null && quantity > 0) {
      quantity = parseInt(quantity);
      cart.push({ name: productName, price: price, quantity: quantity });
      alert(`${quantity} x ${productName} added to cart!`);
      updateCartCount();
    } else {
      alert("Please enter a valid quantity.");
    }
  }

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
  }

  let slideIndex = 0;
  showSlides();

  function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change slide every 3 seconds
  }

  function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
  }

