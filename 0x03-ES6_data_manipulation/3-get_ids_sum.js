export default getStudentIdsSum(students) {
    return students.reduce((obj => 
    sum + obj.id), 0)
}
