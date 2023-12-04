<template>
  <div class="group p-4">
    <div class="row mb-3">
      <div class="col-7 d-flex align-items-center">
        <p class="h5 text-custom-dark">{{ $route.params.id }} Kompyuter injiniring 211-20</p>
      </div>
      <div class="col-5 d-flex justify-content-end">
        <button class="btn btn-custom-primary me-3" @click="this.showModal = true"><i class="fa-solid fa-user-plus"></i>
          {{ this.$localeToText('add_new_student') }}
        </button>

        <button class="btn btn-success"><i class="fa-solid fa-download"></i> {{
            this.$localeToText('download_to_excel')
          }}
        </button>
      </div>
    </div>
    <table class="custom-table">
      <thead>
      <tr>
        <th>№</th>
        <th>{{this.$localeToText('fullName')}}</th>
        <th>{{this.$localeToText('phone_num')}}</th>
        <th>{{this.$localeToText('start_date')}}</th>
        <th>{{this.$localeToText('finish_date')}}</th>
        <th>{{this.$localeToText('view')}}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="i in 25">
        <td>{{ i }}</td>
        <td>Xamidjonov Islom Ilhom</td>
        <td>+998(91)443-19-21</td>
        <td>20.07.2023</td>
        <td>01.09.2023</td>
        <td>
          <button class="btn btn-custom-primary"><i class="fa-solid fa-eye"></i></button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: 'GroupDetails'
}
</script>

<style scoped>
.group {
  //max-width: 1100px;
}
</style>