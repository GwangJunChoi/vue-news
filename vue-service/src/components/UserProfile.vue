<template>
  <div class="user-container">
    <div>
        <i class="fas fa-user"></i>
    </div>
    <div class="user-descrition">
      <slot name="username">
        <!--  상위 컴포넌트 정의 -->  
      </slot>            
      <div class="time">
        <slot name="time">
          <!--  상위 컴포넌트 정의 -->
        </slot>
        <slot name="karma">
          <!--  상위 컴포넌트 정의 -->
        </slot>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  props:{
    info: Object
  },
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-descrition {
  padding-left: 8px;
}
.time {
  font-size:0.7rem;
}
</style>
