<template>
  <div class="a-card">
    <div class="card-image">
      <img :src="getImagePath(content.image)" />
    </div>
    <div class="card-label-holder" v-if="content.label!==''">
      <div class="card-label">{{content.label}}</div>
    </div>
    <div class="a-subheader card-header">{{content.header}}</div>
    <div class="card-info">{{content.info}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    content: {
      type: Object
    }
  },
  methods: {
    getImagePath(image) {
      return require("../assets/images/" + image);
    }
  }
};
</script>

<style lang="css">
.a-card {
  display: flex;
  flex-direction: column;
  width: 328px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 50px;
}

.card-header {
  margin-bottom: 10px;
  color: #00204d;
}
.card-image {
  margin-bottom: 20px;
}

.card-info {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(36, 49, 67, 0.9);
}

.card-label-holder {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: -25px;
  margin-bottom: 10px;
}

.card-label {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-left: 5px;
  padding-right: 5px;
  color: #ffffff;
  background: #9bc225;
  border-radius: 4px;
  justify-self: flex-start;
}
</style>
