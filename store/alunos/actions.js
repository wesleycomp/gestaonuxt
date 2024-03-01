export default {
  getAlunos() {
    return this.$axios.$get('alunos');
  },
  deleteAluno(context, id) {
    return this.$axios.$delete(`alunos/${id}`)
  },
  updateAluno(context, { id, data }) {
    return this.$axios.$patch(`alunos/${id}`, data)
  },
  addAluno(context, data) {
    return this.$axios.$post('alunos', data)
  },
}
