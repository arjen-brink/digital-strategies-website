/* General Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    color: #333;
    line-height: 1.6;
  }
  
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  /* Navbar */
  nav {
    background: #333;
    color: #fff;
    padding: 1rem 0;
  }
  
  nav .logo {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
  }
  
  nav .nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  nav .nav-links a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
  }
  
  /* Hero Section */
  .hero {
    background: #007BFF;
    color: #fff;
    padding: 5rem 0;
    text-align: center;
  }
  
  .hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  
  .hero .btn {
    background: #fff;
    color: #007BFF;
    padding: 0.75rem 2rem;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
  }
  
  /* Services Section */
  .services {
    padding: 4rem 0;
    text-align: center;
  }
  
  .services h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  
  .service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .service-card {
    background: #f4f4f4;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .service-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  /* About Section */
  .about {
    padding: 4rem 0;
    text-align: center;
    background: #f4f4f4;
  }
  
  .about h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  /* Contact Section */
  .contact {
    padding: 4rem 0;
    text-align: center;
  }
  
  .contact h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  
  .contact form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .contact input,
  .contact textarea {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .contact .btn {
    background: #007BFF;
    color: #fff;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  /* Footer */
  footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 1rem 0;
  }