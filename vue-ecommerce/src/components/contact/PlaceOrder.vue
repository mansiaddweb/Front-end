<template>
    <!-- <div class="col-lg-7 col-md-12"> -->
        <!-- <h2 class="text-center m-2">Process To CheckOut</h2> -->
        <br>
  <form id="contactForm" class="container m-5">
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
<!-- </div> -->
</template>

<style scoped>
.form-group{
  font-weight: 560;
  font-size: 1.2rem;
}
#contactForm{
  width:660px;
}
</style>