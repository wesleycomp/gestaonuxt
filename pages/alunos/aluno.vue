<template>
  <div>

    <div class="flex items-center justify-between">
      <h1 class="font-bold text-2xl">
        Alunos
      </h1>
    </div>

    <div class="mt-6">
      <div>
        <div class="flex items-center space-x-3">
          <div>
            <AppFormInput v-model="name" @keyup.enter="addAluno" />
          </div>

          <AppButton @click="addAluno">
            Adicionar
          </AppButton>
        </div>
      </div>

      <table class="mt-4 min-w-full divide-y divide-gray-200 shadow">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              DESCRIÇÃO
            </th>
            <th scope="col" class="w-3 ">
             <span class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Opções </span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="aluno in alunos" :key="aluno.id" class="bg-white">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              <div v-if="aluno.is_updating" class="w-72">
                <AppFormInput v-model="aluno.name" @keyup.enter="updateAluno(aluno)" />
              </div>

              <template v-else>
                {{ aluno.name }}
              </template>
            </td>

            <td class="inline-flex px-6 py-2 whitespace-nowrap text-right text-sm font-medium space-x">
              <a href="#" class="text-indigo-600 hover:text-indigo-900" @click.stop.prevent="toUpdate(aluno)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-5 h-5 ml-2" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
  </svg> </a>

              <a href="#" class="text-red-600 hover:text-red-900"
                @click.stop.prevent="deleteAluno(aluno.id)"><svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2">
    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>

              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/Ui/AppButton';
import AppFormInput from '~/components/Ui/AppFormInput';
import AppFormLabel from '~/components/Ui/AppFormLabel';

export default {
  name: 'alunosPage',

  components: {
    AppButton,
    AppFormInput,
    AppFormLabel,
  },

  async asyncData({ store }) {
    return {
      alunos: await store.dispatch('alunos/getAlunos')
        .then(response => response.map(o => ({ ...o, is_updating: false })))
    }
  },

  data() {
    return {
      name: ''
    };
  },

  methods: {
    deleteAluno(id) {
      this.$store.dispatch('alunos/deleteAluno', id)
        .then(() => {
          const idx = this.alunos.findIndex(o => o.id === id);
          this.alunos.splice(idx, 1);
        });
    },


    toUpdate(Aluno) {
      Aluno.is_updating = true;
    },


    updateAluno(Aluno) {
      const data = {
        name: Aluno.name
      };
      this.$store.dispatch('alunos/updateAluno', { id: Aluno.id, data })
        .then(() => {
          Aluno.is_updating = false;
        });
    },


    addAluno() {

      if (!this.name) {
        return
      }

      const data = {
        name: this.name
      };

      this.$store.dispatch('alunos/addAluno', data)
        .then((response) => {
          this.alunos.push(response);
          this.name = '';
        });
    }
  },
};
</script>
