<template>
    <div>
        <div class="topnavAndBanner">
            <Topnav/>
            <div>
                <div class="banner">
                    <h1>Pocket UI</h1>
                    <h2>一个超厉害的UI框架</h2>
                    <p class="actions">
                        <a href="https://github.com">GitHub</a>
                        <router-link to="/doc">开始</router-link>
                    </p>
                </div>
            </div>
        </div>
        <div class="features">
            <svg class="icon">
                <use xlink:href="#icon-Vue"></use>
            </svg>
            <svg class="icon">
                <use xlink:href="#icon-typescript"></use>
            </svg>
            <svg class="icon">
                <use xlink:href="#icon-light"></use>
            </svg>
        </div>
    </div>
</template>
<script lang="ts">
  import Topnav from '../components/Topnav.vue';

  export default {
    components: {Topnav}
  };
</script>
<style lang="scss" scoped>
    .topnavAndBanner {
        background: white;
    }

    .features {
        > svg {
            width: 64px;
            height: 64px;
        }
    }

    .banner {
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        > h1 {
            color: black;
            font-family: "Goudy Old Style";
        }

        > h2 {
            color: #73737a;
            font-family: Consolas;
            font-size: 16px;
        }

        > .actions {
            padding: 8px 0;

            a {
                margin: 0 8px;
                background: black;
                color: white;
                display: inline-block;
                padding: 8px 24px;
                border-radius: 6px;

                &:hover {
                    text-decoration: none;
                }
            }
        }
    }
</style>