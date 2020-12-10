<template>
    <div class="topnav">
        <router-link to="/" class="logo">
            <svg class="icon">
                <use xlink:href="#icon-pocket"></use>
            </svg>
        </router-link>
        <ul class="menu">
            <li>
                <router-link to="/doc">文档</router-link>
            </li>
        </ul>
        <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
            <use xlink:href="#icon-menu"></use>
        </svg>
    </div>
</template>
<script lang="ts">
  import {inject, Ref} from 'vue';

  export default {
    props:{
      toggleMenuButtonVisible:{
        type: Boolean,
        default: false
      }
    },
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      const toggleMenu = () => {
        asideVisible.value = !asideVisible.value;
      };
      return {toggleMenu};
    }
  };
</script>
<style lang="scss" scoped>
    .topnav {
        display: flex;
        padding: 16px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 20;
        justify-content: center;
        align-items: center;

        > .logo {
            max-width: 6em;
            margin-right: auto;

            > svg {
                width: 32px;
                height: 32px;
            }
        }

        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;
            background: black;
            color: white;
            display: inline-block;
            border-radius: 10px;

            > li {
                margin: 0 1em;
            }
        }

        > .toggleAside {
            display: none;
            width: 24px;
            height: 24px;
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
        }

        @media (max-width: 500px) {
            position: fixed;
            padding: 0;
            padding-top: 5px;
            background-color: #F5F5F5;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
            > .menu {
                display: none
            }
            > .logo {
                margin: 0 auto
            }
            > .toggleAside {
                display: inline-block;
            }
        }
    }
</style>
