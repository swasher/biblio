<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main
      <ol>
        <ul v-if="books.length">
          <Listview v-for="book in books" :book=book :key="book.id"></Listview>
        </ul>
      </ol>
    </el-main>
  </el-container>
</template>


<script>
import Listview from '../components/ListView.vue'
import { db } from '../firebase'
import { query, collection, getDocs } from "firebase/firestore";

export default {
  components: {
    Listview
  },
  data() {
    return {
      books: []
    }
  },
  created() {
    this.getBooks()
  },
  methods: {
    async getBooks() {
      const querySnap = await getDocs(query(collection(db, 'books')))

      // add each doc to 'countries' array
      querySnap.forEach((doc) => {
        let d = doc.data()
        d.id = doc.id
        this.books.push(d)
      })

      console.log(this.books)

      // if (books.exists()) {
      //   console.log(books.data())
      // } else {
      //   console.log('Collection are empty')
      // }
    }
  },
}
</script>
