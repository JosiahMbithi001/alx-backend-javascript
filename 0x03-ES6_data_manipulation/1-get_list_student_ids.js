export  default function getListStudentIds (arr) {
    if (!Array.isArray(arr)) {
        return [];
    }
    return out = new arr.map(arr => arr.id)
}
