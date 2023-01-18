<template lang="html">
  <div class="TodoComponentContainer">
    <div class="TodoComponent">
      <div class="TodoContainer fresh">
        <span
          v-for="entrie in entries"
          :key="entrie.name" >
          <router-link
            :to="{ name: '/singleTodo', params: {
              name: entrie.name,
              description: entrie.description,
              deadline: entrie.deadline,
              importance: entrie.importance,
              involvedUsers: entrie.involvedUsers,
              state: entrie.state,
            }}"
            v-if="entrie.state === 'started'"
          >
          <SingleTodo
            :name="entrie.name"
            :description="entrie.description"
            :deadline="entrie.deadline"
            :importance="entrie.importance"
            :involvedUsers="entrie.involvedUsers"
            :state="entrie.state"
          />
        </router-link>
        </span>
      </div>
      <div class="TodoContainer inWork">
        <span
          v-for="entrie in entries"
          :key="entrie.name" >
          <router-link
            :to="{ name: '/singleTodo', params: {
              name: entrie.name,
              description: entrie.description,
              deadline: entrie.deadline,
              importance: entrie.importance,
              involvedUsers: entrie.involvedUsers,
              state: entrie.state,
            }}"
            v-if="entrie.state === 'inWork'"
          >
          <SingleTodo
            :name="entrie.name"
            :description="entrie.description"
            :deadline="entrie.deadline"
            :importance="entrie.importance"
            :involvedUsers="entrie.involvedUsers"
            :state="entrie.state"
          />
        </router-link>
        </span>
      </div>
      <div class="TodoContainer finished">
        <span
          v-for="entrie in entries"
          :key="entrie.name" >
          <router-link
            :to="{ name: '/singleTodo', params: {
              name: entrie.name,
              description: entrie.description,
              deadline: entrie.deadline,
              importance: entrie.importance,
              involvedUsers: entrie.involvedUsers,
              state: entrie.state,
            }}"
            v-if="entrie.state === 'finished'"
          >
          <SingleTodo
            :name="entrie.name"
            :description="entrie.description"
            :deadline="entrie.deadline"
            :importance="entrie.importance"
            :involvedUsers="entrie.involvedUsers"
            :state="entrie.state"
          />
        </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import SingleTodo from './SingleTodoComponent.vue';

export default {
  data() {
    return {
      entries: [],
    };
  },
  components: {
    SingleTodo,
  },
  props: {
    parent: {
      type: String,
      required: false,
      default: 'notDashboard',
    },
  },
  methods: {
    ajaxSearchAxoios() {
      return axios({
        method: 'GET',
        url: 'http://197.167.177.22:3000/todo/get/',
        responseType: 'json',
      }).then((response) => {
        return response.data;
      }).catch((err) => {
        console.log(err);
      });
    },
  },
  created() {
    this.ajaxSearchAxoios().then((result) => {
      this.entries.push(...result.model);
    });
  },
  mounted() {
    const container = document.querySelector('.TodoComponentContainer');
    if (this.parent === 'Dashboard') {
      container.style.width = '35vw';
      container.style.height = '100%';
      container.style.margin = '0 2.5vw';
    } else {
      container.style.width = '100%';
      container.style.height = '770px';
    }
    return 0;
  },
};
</script>

<style lang="scss" scoped>
a {
  color: black;
  text-decoration: none;
}
.TodoComponentContainer {
  border-radius: 50px;
  overflow: hidden;
  display: block;
}
.TodoComponent {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.TodoContainer {
  padding: 3%;
  height: 86%;
  width: 33%;
  margin: 3%;
  overflow-y: scroll;
  border-radius: 50px;
  background-color: rgba(0,0,0,0.2)
}
</style>
