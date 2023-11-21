<template>
  <router-view/>
</template>
<script lang="ts">
export default {
  created() {
    let mode = localStorage.getItem('mode');
    if(mode == 'dark') {
      document.body.classList.add('dark');
    }
  },

}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

:root {
  --color-primary: #21415c;
  --color-primary-dark: #1a3247;
  --color-light: #fff;
  --color-dark: #000;
}

body {
  background-color: var(--color-light);
}

body.dark {
  --color-primary: #222;
  --color-primary-dark: #424242;
  --color-light: #2c2c2c;
  --color-dark: #fff;
}
ul {
  list-style: none;
  padding-left: 0;
}

.bg-custom-primary {
  background: var(--color-primary)
}

.bg-custom-dark {
  background: var(--color-dark)
}

.bg-custom-light {
  background: var(--color-light);
}

.text-custom-primary{
  color: var(--color-primary);
}

.text-custom-dark{
  color: var(--color-dark);
}



.text-custom-light {
  color: var(--color-light);
}

.custom-table {
  background: var(--color-light);
  width: 100%;
}

.custom-table tr {
  border-bottom: 1px solid var(--color-dark);
}

/* .custom-table tbody tr {
  cursor: pointer;
} */

.custom-table tbody tr:nth-child(2n-1) {
  background: #eee;
}

.custom-table tbody tr:hover {
  background: #d6d5d5;
}

body.dark .custom-table tbody tr:nth-child(2n-1){
  background: #303030;
}

body.dark .custom-table tbody tr:hover {
  background: #444;
}

.custom-table tbody tr:last-child {
  border-bottom: none;
}

.custom-table tr th,
.custom-table tr td {
  padding: 4px 10px;
  color: var(--color-dark);
  text-align: center;
  font-size: 14px;
}

.custom-table tr th:first-child,
.custom-table tr td:first-child {
  text-align: left;
}

.custom-table tr th:last-child,
.custom-table tr td:last-child {
  text-align: right;
}


a {
  text-decoration: none;
}

.current {
  background: #1a3247;
  color: #fff;
  font-size: 18px;
}

button.current {
  background: #1a3247 !important;

}

body.dark button.current {
  background: #2b2f32 !important;
}

.status {
  padding: 3px 5px;
  color: #fff;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1px;
  width: 105px;
  display: inline-block;
  text-align: center;
}

.status-approved {
  background: #326e18;
}

.status-rejected {
  background: #e53935;
}

.status-submitted {
  background: #ebab34;
}

.btn-custom-primary {
  background: #21415c;
  color: #fff;
}

.btn-custom-primary:hover
{
  background: #1a3247;
  color: #fff;
}

.btn-custom-primary:active {
  --bs-btn-active-bg: #1a3247;
  --bs-btn-active-color: #fff;
  --bs-btn-active-border-color: #1a3247;
  transform: scale(1.01);
}

.dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;

}

.dialog-wrapper {
  background-color: #fefefe;
  //padding: 20px;
  border-radius: 10px;
  min-width: 700px;
}

.dialog-header {
  width: 100%;
  height: 50px;
  background: #21415c;
  color: #fff;
  padding: 5px 10px;
  border-radius: 10px 10px 0 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dialog-header .close {
  cursor: pointer;
  color: #fff;
}

.dialog-header .close:hover {
  color: #fff;
}

.dialog-content {
  min-width: 700px;
  max-width: 800px;
  //min-height: 50px;
  background: #fff;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.dialog-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 10px 10px 0;
  background: #eee;
  border-radius: 0 0 10px 10px;
}

.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
}

input[type="file"] {
  display: none;
}



</style>
