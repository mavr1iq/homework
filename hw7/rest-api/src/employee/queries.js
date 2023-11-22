const getEmployeeById = 'SELECT * FROM "Employee" WHERE id = $1'
const patchEmployee = 'UPDATE "Employee" SET first_name = $2, middle_name = $3, last_name = $4, position = $5 WHERE id = $1 RETURNING *'

module.exports = {
    getEmployeeById,
    patchEmployee
}