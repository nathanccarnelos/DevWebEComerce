<template>
  <v-container>
    <v-card>
      <v-toolbar
        color="green darken-1"
        dark
      >
        <v-toolbar-title>Adicionar Produto</v-toolbar-title>
      </v-toolbar>
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" sm="6">
            <v-text-field
              v-model="formData.name"
            label="Titulo"></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" sm="6">
            <v-text-field
              v-model="formData.stockCount"
            label="Quantidade em estoque"></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" sm="6">
            <v-text-field
              v-model="formData.price"
            label="Preço" prefix="R$" type="number" counter></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" sm="6">
            <v-switch
              v-model="formData.status"
            label="Status"></v-switch>
          </v-col>
          <v-col cols="12" xs="12" sm="6">
            <v-select
              v-model="formData.categoryId"
              :items="categoryList"
              item-text="name"
              item-value="id"
              label="categoria"
              :loading="categoryListLoading"
            ></v-select>
          </v-col>
          <v-col cols="12" xs="12" sm="6">
            <v-select
              v-model="formData.unityId"
              :items="unityList"
              item-text="name"
              item-value="id"
              label="unity"
              :loading="unityListLoading"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" xs="12">
            <v-file-input
              label="Imagem"
              accept="image/png, image/jpeg"
              v-model="formData.image"
            ></v-file-input>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn color="primary" @click="sendProduct()">Enviar</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
import map from 'lodash/map'
export default {
  name: 'AdministrationPage',
  data () {
    return {
      categoryList: [],
      categoryListLoading: false,
      unityList: [],
      unityListLoading: false,
      formData: {
        name: '',
        categoryId: null,
        unityId: null,
        stockCount: 0,
        price: 0.00,
        status: true,
        image: []
      }
    }
  },
  mounted () {
    this.getCategoryList()
    this.getUnityList()
  },
  methods: {
    getCategoryList () {
      this.axios.get('/api/products_category')
        .then(response => {
          this.categoryListLoading = true
          this.categoryList = map(response.data.data, ({ id, nome }) => {
            return {
              id,
              name: nome
            }
          })
        })
        .finally(() => {
          this.categoryListLoading = false
        })
    },
    getUnityList () {
      this.axios.get('/api/products_unity')
        .then(response => {
          this.unityListLoading = true
          this.unityList = map(response.data.data, ({ id, nome }) => {
            return {
              id,
              name: nome
            }
          })
        })
        .finally(() => {
          this.unityListLoading = false
        })
    },
    sendProduct () {
      this.axios.post('/api/products/store', {
        'nome': this.formData.name,
        'category_id': this.formData.categoryId,
        'unity_id': this.formData.unityId,
        'stock_count': this.formData.stockCount,
        'status': Number(this.formData.status),
        'price': this.formData.price,
        'image': this.formData.image
      })
    }
  }
}
</script>
