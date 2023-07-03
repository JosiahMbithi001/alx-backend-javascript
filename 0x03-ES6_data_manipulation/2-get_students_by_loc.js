export default function getStudentsByLocation (students, city) {
    const studs = students.filter(obj => return obj.city === 'city')
    return studs
}
