<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-3">
        <div class="input-group">
          <input type="search" class="form-control" :placeholder="`${this.$localeToText('search')}...`"/>
          <button type="button" class="btn btn-custom-primary">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div class="col-9 d-flex justify-content-end">
        <button class="btn btn-custom-primary me-3" @click="showDialog = true"><i class="fa-solid fa-user-plus"></i>
          {{ this.$localeToText('add_new_teacher') }}
        </button>
        <button class="btn btn-success"><i class="fa-solid fa-download"></i> {{
            this.$localeToText('download_to_excel')
          }}
        </button>
      </div>
    </div>
    <!--      modal dialog for add new teacher-->
    <div class="row" v-if="showDialog">
      <div class="col">
        <div class="dialog">
          <div class="dialog-wrapper">
            <div class="dialog-header">
              <span>{{ this.$localeToText('add_new_teacher') }}</span>
              <span class="close fw-bold" @click="showDialog = false; imageUrl = null;">
                    <i class="fa fa-times-circle fs-5"></i>
                  </span>
            </div>
            <div class="dialog-content">
              <form class="row p-3">
                <div class="col-4 ">
                  <label class="img-upload d-flex align-items-center justify-content-center border mb-2 flex-column">
                    <i class="fas fa-camera-retro"></i>
                    {{ this.$localeToText('upload_photo') }}
                    <input type="file" id="file" accept="image/*" @change="handleImageUpload"/>
                    <div class="uploaded-img">
                      <img :src="imageUrl" alt="Uploaded Image" v-if="imageUrl">
                    </div>
                  </label>
                  <button @click="imageUrl = null" class="btn btn-outline-danger w-100 fs-6" v-if="imageUrl">
                    {{ this.$localeToText('cancel') }}
                  </button>
                </div>

                <div class="col-8">
                  <div class="row">
                    <div class="col-7 mb-1">
                      <form-label :text="this.$localeToText('fullName')" forAttribute="fullName"/>
                      <form-input id="fullName" v-model="teacherForm.fullname" inputType="text"/>
                    </div>
                    <div class="col-5 mb-1">
                      <form-label text="username" forAttribute="username"/>
                      <form-input id="username" v-model="teacherForm.username" inputType="text"/>
                    </div>
                    <div class="col-6 mb-1">
                      <form-label text="password" forAttribute="password"/>
                      <form-input id="password" v-model="teacherForm.password" inputType="password"/>
                    </div>
                    <div class="col-6 mb-1">
                      <form-label text="confirm password" forAttribute="confirm-password"/>
                      <form-input id="confirm-password" v-model="teacherForm.confirmPassword" inputType="password"/>
                    </div>
                    <div class="col-6">
                      <form-label :text="this.$localeToText('phone_num')" forAttribute="phoneNumber"/>
                      <form-input id="phoneNumber" v-model="teacherForm.phoneNumber" inputType="text"/>
                    </div>
                  </div>
                </div>


              </form>
            </div>
            <div class="dialog-footer">
              <button class="btn btn-outline-danger me-2" @click="showDialog = false; imageUrl = null">
                {{ this.$localeToText('cancel') }}
              </button>
              <button class="btn btn-custom-primary" @click="teachers.push(teacherForm); this.showDialog = false">{{
                  this.$localeToText('save')
                }}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!--      modal dialog for add new teacher-->

    <!--    teachers' table-->
    <div class="row my-4">
      <div class="col-12">
        <table class="custom-table">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">{{ this.$localeToText('photo') }}</th>
              <th scope="col">
                <span style="cursor: pointer;" @click="sortBy(0)">{{ this.$localeToText('fullName') }}
                  <i class="fa-solid ms-1" :class="[sortIcons[sortingFields[0] + 1]]"></i>
                </span>
              </th>
              <th scope="col">
                <span style="cursor: pointer;" @click="sortBy(1)">
                  Username <i class="fa-solid ms-1" :class="[sortIcons[sortingFields[1] + 1]]"></i>
                </span>
              </th>
              <th scope="col">
                <span style="cursor: pointer;" @click="sortBy(2)">
                  {{ this.$localeToText('count_of_groups') }} <i class="fa-solid ms-1" :class="[sortIcons[sortingFields[2] + 1]]"></i>
                </span>
              </th>
              <th scope="col">
                <span style="cursor: pointer;" @click="sortBy(3)">{{ this.$localeToText('phone_num') }} <i
                    class="fa-solid ms-1" :class="[sortIcons[sortingFields[3] + 1]]"></i>
                </span>
              </th>
              <th scope="col">{{ this.$localeToText('actions') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(teacher, index) in teachers" :key="teacher.username">
              <td>{{ index + 1 }}</td>
              <td class="d-flex justify-content-center align-items-center">
                <div class="img">
                  <img
                      :src="teacher.imageUrl || 'data:image/jpeg;base64,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'"
                      alt="profile image">
                </div>
              </td>
              <td>{{ teacher.fullname }}</td>
              <td style="letter-spacing: 1px;">
                <router-link :to="`/admin/teachers/${teacher.username}`"
                             class="text-decoration-underline text-custom-dark">{{ teacher.username }}
                </router-link>
              </td>
              <td>{{ teacher.countOfGroups }}</td>
              <td>{{ teacher.phoneNumber }}</td>
              <td>
                <button class="btn btn-custom-primary me-1 px-2 py-1"><i
                    class="fa-regular fa-pen-to-square"></i></button>

                <button class="btn btn-danger px-2 py-1"><i class="fa-regular fa-trash-can"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
        <pagination :current-page="currentPage" :total-page-count="totalPageCount"
                    @page-changed="handlePageChange"></pagination>
      </div>
    </div>
    <!--    teachers' table-->

  </div>
</template>
<script lang="ts">
import Pagination from '../Pagination.vue';
import FormInput from "@/components/FormInput.vue";
import teachersService from "@/services/teachers.service";
import {Teacher} from "@/interfaces/teacher";

export default {
  name: 'AdminTeachers',
  mounted() {
    this.getAllTeachers();
  },
  components: {
    FormInput,
    Pagination,
  },
  data() {
    return {
      currentPage: 1,
      totalPageCount: 10,
      data: [], // Your paginated data,
      sortIcons: ['fa-sort-down', 'fa-sort', 'fa-sort-up'],
      sortingFields: [0, 0, 0, 0],
      teachers: [],

      showDialog: false,
      imageUrl: '',
      teacherForm: {
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '+998'
      }
    };
  },
  computed: {},
  methods: {
    async getAllTeachers(page: number = 1) {
      try {
        this.teachers = await teachersService.getTeachers(page);
      } catch(err) {
        console.log(err);
      }
    },
    handlePageChange(page: number) {
      // Update your content based on the new page
      this.currentPage = page;
      // Fetch data or update content here based on the new page
    },
    handleImageUpload(event: any) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    sortBy(n: number) {
      for (let i = 0; i < 4; i++) {
        if (i == n) continue;
        this.sortingFields[i] = 0;
      }
      if (this.sortingFields[n] === 0) {
        this.sortingFields[n] = 1;
      } else if (this.sortingFields[n] === 1) {
        this.sortingFields[n] = -1;
      } else {
        this.sortingFields[n] = 0;
      }
    }
  },
}
</script>
<style scoped>
table td .img {
  width: 30px;
}

table td .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center center;
}

.img-upload {
  position: relative;
  height: 285px;
  border-radius: 10px;
  cursor: pointer;
  background: #eee;
}

.img-upload:hover {
  background: #d3d3d3;

}

.img-upload i {
  font-size: 32px;
}

.uploaded-img {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

.uploaded-img img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-position: center;
}

</style>