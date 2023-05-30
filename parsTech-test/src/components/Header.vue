<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" :class="{'bg-dark':!islightMode}">
    <a  @click="togglelightMode()" class="navbar-brand" href="#">Dark/Light</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" data-bs-toggle="dropdown" aria-expanded="false">
            next Task
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <div v-for="(headerValue, index) in NextTask" :key="'nextTask-' + index" class="card border-success"
              style="max-width: 18rem;">
              <div class="card-body ">
                <h6 class="card-title">{{ headerValue.title }}</h6>
              </div>
              <div class="card-footer bg-transparent border-success">{{ headerValue.dueDate }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
import { useTodoItemStore } from '@/stores/todoItem.js'
import { useLightModeStore } from '@/stores/lightMode.js'
import { ref, toRefs } from 'vue';

const { islightMode,togglelightMode } = toRefs( useLightModeStore())
const { getAllToDoItem, sortDate } = useTodoItemStore()
console.log('togglelightMode',islightMode);
const NextTask = ref(sortDate.desc({ array: getAllToDoItem(), key: 'dueDate' }));
defineProps({

})



</script>



<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
