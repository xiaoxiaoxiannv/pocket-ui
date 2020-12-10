<template>
    <div>
        <div class="topnavAndBanner">
            <Topnav/>
            <div>
                <div class="banner">
                    <h1>Pocket UI</h1>
                    <h2>一个基于Vue3的UI框架</h2>
                    <p class="actions">
                        <a href="https://github.com">GitHub</a>
                        <router-link to="/doc">开始</router-link>
                    </p>
                </div>
            </div>
        </div>
        <div class="features">
            <ul>
                <li>
                    <svg>
                        <use xlink:href="#icon-Vue"></use>
                    </svg>
                    <h3>基于 Vue 3</h3>
                    <p>骄傲地使用了 Vue 3 Composition API</p>
                </li>
                <li>
                    <svg>
                        <use xlink:href="#icon-typescript"></use>
                    </svg>
                    <h3>基于 TypeScript </h3>
                    <p>源代码采用 TypeScript 书写</p>
                </li>
                <li>
                    <svg>
                        <use xlink:href="#icon-light"></use>
                    </svg>
                    <h3>代码易读</h3>
                    <p>每个组件的源代码都极其简洁</p>
                </li>
            </ul>
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
        margin: 28px auto;
        padding:16px 16px;
        @media (min-width: 800px) {
            width: 800px;
            >ul {
                >li {
                    width: 50%;
                }
            }
        }
        @media (min-width: 1200px) {
            width: 1200px;
            >ul {
                >li {
                    width: 33.3333%;
                }
            }
        }

        > ul {
            display: flex;
            flex-wrap: wrap;

            > li {
                //width: 400px;
                margin: 16px 0;
                display: grid;
                justify-content: start;
                align-content: space-between;
                grid-template-areas: "icon title" "icon text";
                grid-template-columns: 80px auto;

                > svg {
                    grid-area: icon;
                    width: 64px;
                    height: 64px;
                }

                > h3 {
                    grid-area: title;
                    font-size: 28px;
                }

                > p {
                    grid-area: text
                }
            }
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
            font-size: 58px;
        }

        > h2 {
            color: #73737a;
            font-family: Consolas;
            font-size: 28px;
        }

        > .actions {
            padding: 8px 0;
            margin-top: 10px;

            a {
                margin: 0 16px;
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