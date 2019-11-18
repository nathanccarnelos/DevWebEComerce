<template>
  <v-card>
    <v-toolbar
      color="green darken-1"
      dark
    >
      <v-toolbar-title>{{isNewUser ? 'Criar Cadastro' : 'Editar Cadastro'}}</v-toolbar-title>
    </v-toolbar>
    {{user}}
    <v-form
      ref="form"
      v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="3" sm="6">
            <v-text-field
              :rules="nameRules"
              label="Nome Completo*"
              required
              v-model="userForm.name"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <v-text-field
              :rules="emailRules"
              label="E-mail*"
              required
              v-model="userForm.email"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <v-text-field
              :rules="[v => !!v || 'Telefone é requerido']"
              label="Telefone*"
              required
              v-mask="phoneNumberMask"
              v-model="userForm.phoneNumber"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <h4>Endereço:</h4>
        <v-alert transition="scale-transition" type="error" v-if="addressNotFound">
          {{addressNotFoundText}}
        </v-alert>
        <v-row>
          <v-col cols="12" md="3" sm="6">
            <v-text-field
              label="CEP*"
              placeholder="00000-000"
              required
              v-mask="'#####-###'"
              v-model="userForm.address.cep"
            >
              <template v-slot:append-outer>
                <v-btn @click.stop="searchCEP" icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <v-text-field
              :loading="loadingFields"
              :placeholder="userForm.address.city+ ' ' + userForm.address.uf"
              disabled
              label="Cidade*"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <v-text-field
              :loading="loadingFields"
              :placeholder="userForm.address.neighborhood"
              disabled
              label="Bairro*"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <v-text-field
              :loading="loadingFields"
              :placeholder="userForm.address.street"
              disabled
              label="Rua*"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <v-text-field
              :rules="[v => !!v || 'Complemento é requerido']"
              label="Complemento*"
              required
              v-model="userForm.address.complement"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :disabled="!valid" @click="createUser()" color="primary">Cadastrar</v-btn>
      <v-btn @click="closeMenu()" color="error">Cancelar</v-btn>
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
      loadingFields: false,
      addressNotFound: false,
      addressNotFoundText: '',
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
  props: {
    userInfos: {
      type: Object,
      default: () => {
        return {
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
    }
  },
  methods: {
    closeMenu () {
      this.$router.push({ name: 'home' })
    },
    createUser () {},
    searchCEP () {
      this.loadingFields = true
      this.axios.get(`https://viacep.com.br/ws/${this.user.address.cep.replace('-', '')}/json/`)
        .then(response => {
          if (response.data.erro) {
            this.addressNotFound = true
            this.addressNotFoundText = 'Endereço não encontrado.'
            return
          }
          this.addressNotFound = false
          this.addressMapper(response.data)
        })
        .catch(() => {
          this.addressNotFoundText = 'erro interno, tente novamente mais tarde.'
          this.addressNotFound = true
        })
        .finally(() => {
          this.loadingFields = false
        })
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
