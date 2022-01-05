<template>
<div class="row">
  <div class="col-lg-5 col-md-12">
  <div class="contact-info">
    <h3><b>Here to Help</b></h3>
    <p>
      Have a question? You may find an answer in our FAQs. But you can also
      contact us.
    </p>
    <ul class="contact-list">
      <li>
        <i class="fas fa-map-marker-alt"></i><u> Location: 2750 Quadra Street
        Victoria, Canada</u>
      </li>
      <li>
        <i class="fas fa-phone"></i> Call Us: <a href="#">(+123) 456-7898</a>
      </li>
      <li>
        <i class="far fa-envelope"></i> Email Us:
        <a href="#">support@comero.com</a>
      </li>
      <li><i class="fas fa-fax"></i> Fax: <a href="#">+123456</a></li>
    </ul><br>
    <h3><b>Opening Hours:</b></h3>
    <ul class="opening-hours">
      <li><span>Monday:</span> 8AM - 6AM</li>
      <li><span>Tuesday:</span> 8AM - 6AM</li>
      <li><span>Wednesday:</span> 8AM - 6AM</li>
      <li><span>Thursday - Friday:</span> 8AM - 6AM</li>
      <li><span>Sunday:</span> Closed</li>
    </ul><br>
    <h3><b>Follow Us:</b></h3>
    <ul class="social">
    
        <a href="#" class="aaa"><i class="fab fa-facebook-f"></i></a>
      
      
        <a href="#" class="aa"><i class="fab fa-twitter"></i></a>
      
        <a href="#" class="aa"><i class="fab fa-instagram"></i></a>
      
        <a href="#" class="aa"><i class="fab fa-behance"></i></a>
      
        <a href="#" class="aa"><i class="fab fa-skype"></i></a>
     
        <a href="#" class="aa"><i class="fab fa-pinterest-p"></i></a>
      
        <a href="#" class="aa"><i class="fab fa-youtube"></i></a>
      
    </ul>
  </div></div>
  <div class="col-lg-7 col-md-12">
  <form id="contactForm" class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <div class="form-group">
          <label>Name <span>(required)*</span></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-lg-12 col-md-12">
        <div class="form-group">
          <label>Email <span>(required)*</span></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email Address"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-lg-12 col-md-12">
        <div class="form-group">
          <label>Phone Number <span>(required)*</span></label>
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            placeholder="Enter your Phone Number"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-lg-12 col-md-12">
        <div class="form-group">
          <label>Your Message <span>(required)*</span></label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="8"
            placeholder="Enter your Message"
            class="form-control"
          ></textarea>
        </div>
      </div>
      <div class="col-lg-12 col-md-12">
        <button type="submit" class="btn btn-warning">Send Message</button>
      </div>
    </div>
  </form>
</div>
  </div>
</template>


<style scoped>
.row {
  display: flex;
  margin: 50px 50px 30px 50px;
}
#contatForm{
  width: 600px;
}
.contact-info{
  padding-left:5rem ;
}
ul li{
  list-style: none;
  margin: 0;
}
.contact-list{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
}
.opening-hours{
  font-weight: 520;
  font-family:Georgia, 'Times New Roman', Times, serif;
}
.form-group{
  font-weight: 560;
  font-size: 1.2rem;
}
.aa{
  padding: .5rem;
  /* margin:10px; */
  font-size: 1.3rem;
  color: yellow;
}
.aaa{
  font-size: 1.3rem;
  color: yellow;
}
</style>