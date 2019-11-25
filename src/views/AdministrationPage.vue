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
          <v-col cols="12" sm="6" xs="12">
            <v-text-field
              label="Titulo"
              v-model="formData.name"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" xs="12">
            <v-text-field
              label="Quantidade em estoque"
              v-model="formData.stockCount"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" xs="12">
            <v-text-field
              counter
              label="Preço" prefix="R$" type="number" v-model="formData.price"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" xs="12">
            <v-switch
              label="Status"
              v-model="formData.status"></v-switch>
          </v-col>
          <v-col cols="12" sm="6" xs="12">
            <v-select
              :items="categoryList"
              :loading="categoryListLoading"
              item-text="name"
              item-value="id"
              label="categoria"
              v-model="formData.categoryId"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6" xs="12">
            <v-select
              :items="unityList"
              :loading="unityListLoading"
              item-text="name"
              item-value="id"
              label="unity"
              v-model="formData.unityId"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" xs="12">
            <v-file-input
              accept="image/png, image/jpeg"
              label="Imagem"
              v-model="formData.image"
            ></v-file-input>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn @click="sendProduct()" color="primary">Enviar</v-btn>
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
        'price': this.formData.price
      }).then(() => {
        this.$notify({
          group: 'addToCart',
          title: 'Produto adicionado',
          type: 'success'
        })
      })
    }
  }
}
</script>
