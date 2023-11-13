<template>
    <div>
      <button @click="showModal = true">Open Modal</button>
  
      <div v-if="showModal" class="modall">
        <div class="modal-content">
          <span class="close text-end" @click="showModal = false">&times;</span>
          <p>This is the content of the modal.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        showModal: false
      };
    }
  };
  </script>
  
  <style>
  /* Style for the modal */
  .modall {
    /* display: none; */
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  /* Style for the modal content */
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  /* Style for the close button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  </style>
  