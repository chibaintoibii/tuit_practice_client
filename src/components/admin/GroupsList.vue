<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-3">
        <div class="input-group">
          <input type="search" class="form-control" :placeholder="this.$localeToText('search') + '...'"/>
          <button type="button" class="btn btn-custom-primary">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div class="col-9 d-flex justify-content-end">
        <button class="btn btn-custom-primary me-3"><i class="fa-solid fa-plus"></i> {{
            this.$localeToText('create_new_group')
          }}
        </button>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <table class="custom-table">
          <thead>
          <tr>
            <th>№</th>
            <th>{{ this.$localeToText('group_name') }}</th>
            <th>{{ this.$localeToText('attached_teacher') }}</th>
            <th>{{ this.$localeToText('count_of_students') }}</th>
            <th>{{ this.$localeToText('start_date') }}</th>
            <th>{{ this.$localeToText('finish_date') }}</th>
            <th>{{ this.$localeToText('view') }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(group, index) in groups">
            <td>{{ index + 1 }}</td>
            <td>{{ group.name }}</td>
            <td>{{ group.attachedTeacher }}</td>
            <td>{{ group.countOfStudents }}</td>
            <td>{{ group.startTime }}</td>
            <td>{{ group.finishTime }}</td>
            <td>
              <router-link :to="`groups/${group.id}`" class="btn btn-custom-primary px-2 py-1">
                <i class="fa-regular fa-eye"></i>
              </router-link>
            </td>
          </tr>
          </tbody>
        </table>
        <pagination :current-page="currentPage" :total-page-count="totalPageCount"
                    @page-changed="handlePageChange"></pagination>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Pagination from "@/components/Pagination.vue";

export default {
  name: 'GroupsList',
  components: {Pagination},
  data: () => ({
    currentPage: 1,
    totalPageCount: 4,
    groups: [
      {
        id: 1,
        name: 'Kompyuter injiniring(KI) 211-20',
        attachedTeacher: 'Xasanov Diyorbek',
        countOfStudents: 25,
        startTime: '22.07.2023',
        finishTime: '01.09.2023'
      },
      {
        id: 2,
        name: 'Kompyuter injiniring(KI) 210-20',
        attachedTeacher: 'Dilmurodov Zafar',
        countOfStudents: 23,
        startTime: '22.07.2023',
        finishTime: '01.09.2023'
      },
      {
        id: 3,
        name: 'Kompyuter injiniring(ATS) 214-20',
        attachedTeacher: 'Dilmurodov Zafar',
        countOfStudents: 26,
        startTime: '23.07.2023',
        finishTime: '02.09.2023'
      },
      {
        id: 4,
        name: 'Dasturiy injiniring 423-20',
        attachedTeacher: 'Toshtemirov Samandar',
        countOfStudents: 22,
        startTime: '23.07.2023',
        finishTime: '02.09.2023'
      },
      {
        id: 5,
        name: 'AKT sohasida iqtisodiyot va menejment 311-20',
        attachedTeacher: 'Dilmurodov Zafar',
        countOfStudents: 26,
        startTime: '23.07.2023',
        finishTime: '02.09.2023'
      },
      {
        id: 6,
        name: 'Axborot xavfsizligi 541-21',
        attachedTeacher: 'Qosimov Sherzod',
        countOfStudents: 18,
        startTime: '23.07.2023',
        finishTime: '02.09.2023'
      },
      {
        id: 7,
        name: 'Elektron tijorat 763-22',
        attachedTeacher: 'Xamidjonov Islom',
        countOfStudents: 20,
        startTime: '23.07.2023',
        finishTime: '02.09.2023'
      },
      {
        id: 8,
        name: 'Elektron tijorat 763-22',
        attachedTeacher: 'Xamidjonov Islom',
        countOfStudents: 20,
        startTime: '23.07.2023',
        finishTime: '02.09.2023'
      },
      {
        id: 9,
        name: 'Elektron tijorat 763-22',
        attachedTeacher: 'Xamidjonov Islom',
        countOfStudents: 20,
        startTime: '23.07.2023',
        finishTime: '02.09.2023'
      },
      {
        id: 10,
        name: 'Elektron tijorat 763-22',
        attachedTeacher: 'Xamidjonov Islom',
        countOfStudents: 20,
        startTime: '23.07.2023',
        finishTime: '02.09.2023'
      }
    ]
  }),
  methods: {
    handlePageChange(page: number) {
      // Update your content based on the new page
      this.currentPage = page;
      // Fetch data or update content here based on the new page
    },
  }
}
</script>
<style></style>