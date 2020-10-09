<template>
  <div id="contact" class="column container contact">
    <div class="section-heading">
      <h2>Get <strong>In Touch</strong></h2>
    </div>
    <div class="row content">
      <div class="column in-touch">
        <h3>Get In Touch</h3>
        <input v-model="name" placeholder="Your name" :class="{ required: isSendActived && name.length < 1 }" />
        <input v-model="email" placeholder="Your email" :class="{ required: isSendActived && email.length < 1 }" />
        <textarea v-model="message" rows="10" placeholder="Write a message" :class="{ required: isSendActived && message.length < 1 }" />
      </div>
      <div class="column contact-detail">
        <h3>My Contact Details</h3>
        <div class="column detail-item">
          <p>Email</p>
          <p>{{ data.email }}</p>
        </div>
        <div class="column detail-item">
          <p>Phone</p>
          <p>{{ data.phone }}</p>
        </div>
        <div class="column detail-item">
          <p>Address</p>
          <p>{{ data.address }}</p>
        </div>
      </div>
    </div>
    <div class="send-btn" v-on:click="onSendMessage">
      Send Message
    </div>
  </div>
</template>

<script>
import jsonData from '@/helper/data.js'

export default {
  name: 'Contact',
  data: () => ({
    data: jsonData.contact,
    isSendActived: false,
    name: '',
    email: '',
    message: '',
    isSuccessful: false
  }),
  methods: {
    onSendMessage () {
      let self = this
      this.isSendActived = true
      this.isSuccessful = false

      setTimeout(() => {
        self.isSuccessful = true
      }, 2000);
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  padding: 0 1rem;
  box-sizing: border-box;
  padding-bottom: 5rem;

  h3 {
    padding-left: 0;
  }
}

.in-touch {
  width: 50%;
  margin-right: 10%;

  input, textarea {
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #fff;
    background: #333;
    border: none;
    border-radius: 0.3rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    margin-bottom: 1rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1) !important;
    outline: none;
    font-family: inherit;
  }

  textarea {
    min-height: 200px;
    overflow: auto;
    resize: vertical;
    padding-top: 1rem;
  }

  .required {
    border: 1px solid #ff0000a0;
  }
}

.contact-detail {
  width: 40%;
}

.detail-item {
  margin-bottom: 1.5rem;

  p:nth-child(1) {
    font-size: 0.8em;
    letter-spacing: 0.1em;
    color: #6495ed80;
    text-transform: uppercase;
  }

  p:nth-child(2) {
    font-size: 1em;
    color: rgba(255, 255, 255, 0.4);
  }
}

.send-btn {
  width: fit-content;
  font-size: 1.1em;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  padding: 0.75rem 1.8rem;
  border-radius: 1.5rem;
  background: #00bd7aa0;
  margin-top: 2rem;
  cursor: pointer;

  &:hover {
    background: #00bd7a;
  }
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }

  .in-touch {
    width: 100%;

    input, textarea {
      height: calc(3rem + 2px);
      box-sizing: border-box;
    }
  }

  .contact-detail {
    width: 100%;
  }
}
</style>
