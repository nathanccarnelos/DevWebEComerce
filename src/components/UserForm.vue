<template>
  <v-card>
      <v-toolbar
        color="green darken-1"
        dark
      >
       <v-toolbar-title>{{isNewUser ? 'Criar Cadastro' : 'Editar Cadastro'}}</v-toolbar-title>
      </v-toolbar>
      <v-form
      ref="form"
      v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="Nome Completo"
              :rules="nameRules"
              required
              v-model="user.name"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              :rules="emailRules"
              label="E-mail"
              required
              v-model="user.email"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="Telefone"
              v-mask="phoneNumberMask"
              :rules="[v => !!v || 'Telefone é requerido']"
              required
              v-model="user.phoneNumber"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <h4>Endereço:</h4>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="CEP"
              placeholder="00000-000"
              v-mask="'#####-###'"
              required
              v-model="user.address.cep"
            >
              <template v-slot:append-outer>
                <v-btn @click.stop="searchCEP" icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="Cidade"
              :placeholder="user.address.city+ ' ' + user.address.uf"
              disabled
            >
            </v-text-field>
          </v-col>
           <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="Bairro"
              :placeholder="user.address.neighborhood"
              disabled
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="Rua"
              :placeholder="user.address.street"
              disabled
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="Complemento"
              v-model="user.address.complement"
              :rules="[v => !!v || 'Complemento é requerido']"
              required
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="createUser()">Cadastrar</v-btn>
        <v-btn color="error" @click="closeMenu()">Cancelar</v-btn>
      </v-card-actions>
  </v-card>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  directives: { mask },
  name: 'UserForm',
  data () {
    return {
      emailRules: [
        v => !!v || 'E-mail é requerido',
        v => /.+@.+/.test(v) || 'E-mail deve ser valido'
      ],
      nameRules: [
        v => !!v || 'Nome Completo é requerido'
      ],
      isNewUser: true,
      valid: true,
      phoneNumberMask: '(##)#####-####',
      CEPforSearch: '',
      user: {
        name: '',
        email: '',
        phoneNumber: '',
        address: {
          cep: '',
          neighborhood: '',
          city: '',
          street: '',
          uf: '',
          complement: ''
        }
      }
    }
  },
  methods: {
    closeMenu () {
      this.$router.push({ name: 'home' })
    },
    createUser () {},
    searchCEP () {
      this.axios.get(`https://viacep.com.br/ws/${this.user.address.cep.replace('-', '')}/json/`)
        .then(response => {
          console.log(response.data)
          this.addressMapper(response.data)
        })
        .catch(error => { console.log(error) })
    },
    addressMapper (rawAddress) {
      this.user.address.city = rawAddress.localidade
      this.user.address.neighborhood = rawAddress.bairro
      this.user.address.street = rawAddress.logradouro
      this.user.address.uf = rawAddress.uf
    }
  }
}
</script>
