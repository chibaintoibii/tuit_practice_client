import {Teacher} from "@/interfaces/teacher";

class TeachersService {
    teachers: Teacher[] = [
        {
            fullname: 'Xamidjonov Islom',
            username: 'chibaintoibii',
            imageUrl: '',
            countOfGroups: 3,
            phoneNumber: '+998 (91) 443-19-21'
        }
    ]
    async getTeachers(page: number): Promise<Teacher[]> {
        return [...this.teachers.filter((teacher, index) => (page - 1) * 10 <= index && index < page * 10)]
    }

    async createNewTeacher(dto) {

    }
}

export default new TeachersService();
