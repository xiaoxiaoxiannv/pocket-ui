<template>
    <div class="layout">
        <Topnav toggle-menu-button-visible class="nav"/>
        <div class="content">
            <aside v-if="asideVisible">
                <h2>文档</h2>
                <ol>
                    <li>
                        <router-link to="/doc/intro">介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/install">安装</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/get-started">开始使用</router-link>
                    </li>
                </ol>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                </ol>
            </aside>
            <main @click="toggleAsideVisible">
                <router-view/>
            </main>
        </div>
    </div>
</template>
<script lang="ts">
  import Topnav from '../components/Topnav.vue';
  import {inject, Ref,reactive} from 'vue';

  export default {
    components: {Topnav},
    setup() {
      const data = reactive({
        listenerPageWidthFn: () => {},
        pageWidth: document.documentElement.clientWidth
      })
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      const toggleAsideVisible = () => {
        if (data.pageWidth <= 896) {
          asideVisible.value = false;
        }
      }
      return {asideVisible,toggleAsideVisible};
    }
  };
</script>
<style lang="scss" scoped>
    $aside-index : 10;

    .layout {
        display: flex;
        flex-direction: column;
        height: 100vh;

        > .nav {
            flex-shring: 0;
        }

        > .content {
            flex-grow: 1;
            padding-top: 60px;
            padding-left: 400px;
            @media (max-width: 500px) {
                padding-left: 0;
            }
        }
    }

    .content {
        display: flex;

        > aside {
            flex-shrink: 0;
        }

        > main {
            flex-grow: 1;
            padding: 16px;
            background: white;
        }
    }

    aside {
        background: white;
        width: 200px;
        padding:1rem 0 16px;
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 70px;
        height: 100%;
        border-right: 1px solid #eaecef;
        z-index: $aside-index;


        > h2 {
            margin-bottom: 4px;
            padding-left: 16px;
            font-weight: 700;
            margin-top: 1rem;
        }

        > ol {
            > li {
                > a {
                    display: block;
                    padding: 4px 0 4px 2rem;
                    border-left: 4px solid transparent;
                    text-decoration: none;
                    &:hover, &:focus {
                        outline: none;
                        border-bottom: none;
                        color: #4472c4;
                    }
                    &.router-link-active{
                        border-left: 4px solid #a6a6ab;
                        color: #a6a6ab;
                    }
                }
            }
        }
        @media (max-width: 500px) {
            >aside {
                min-width: 50%;
            }
        }
    }

    main {
        overflow: auto;
    }
</style>