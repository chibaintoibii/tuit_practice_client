<template>
  <div class="switch-mode">
    <input type="checkbox" class="checkbox" id="checkbox" @change="handleChange">
    <label for="checkbox" class="checkbox-label">
      <i class="fas fa-sun"></i>
      <i class="fas fa-moon"></i>
      <span class="ball"></span>
    </label>
  </div>
</template>
<script lang="ts">
export default {
  name: 'switchMode',
  methods: {
    handleChange() {
      let mode = localStorage.getItem("mode");
      if (mode == 'dark'){
        document.querySelector('body').classList.remove('dark')
        localStorage.setItem("mode", "light")
      } 
      else if(!mode || mode == 'light'){
        document.querySelector('body').classList.add('dark')
        localStorage.setItem("mode", "dark")
      }
    }
  },
  mounted() {
    let mode = localStorage.getItem("mode");
    if(mode == 'dark') {
      document.getElementById('checkbox').setAttribute('checked', '')
    }
  }
}
</script>
<style scoped>
.checkbox {
  opacity: 0;
  position: absolute;
}

.checkbox-label {
  background-color: var(--color-primary-dark);
  width: 50px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fa-moon, .fa-sun {
  color: #fff;
}

.checkbox-label .ball {
  background-color: #fff;
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.1s linear;
}

.checkbox:checked+.checkbox-label .ball {
  transform: translateX(24px);
}
</style>