<template>
    <section class="food_section layout_padding-bottom">
        <div class="container">
            <div class="heading_container heading_center">
                <h2>
                    منو محصولات
                </h2>
            </div>

            <Tabs nav-class="filters_menu" nav-item-active-class="active" :options="{ disableScrollBehavior: true }">
                <Tab v-for="(tabList,index) in products.data.tabList" :key="index" :name="tabList">
                    <div class="filters_content">
                <div class="row grid">
                    <div v-for="product in products.data.tabPanel[index]" :key="product.id" class="col-sm-6 col-lg-4">
                        <div class="box">
                            <div>
                                <div class="img-box">
                                    <img src="./images/b1.jpg" alt="">
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        لورم ایپسوم متن
                                    </h5>
                                    <p>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است.
                                    </p>
                                    <div class="options">
                                        <h6>
                                            <del>45,000</del>
                                            34,000
                                            <span>تومان</span>
                                        </h6>
                                        <a href="">
                                            <i class="bi bi-cart-fill text-white fs-5"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </Tab>
            </Tabs>

            <div class="btn-box">
                <a href="">
                    مشاهده بیشتر
                </a>
            </div>

        </div>
    </section>
</template>


<script setup>

import {Tabs,Tab} from 'vue3-tabs-component';

const {public:{apiBase}} = useRuntimeConfig();

const {data: products ,error} = await useFetch(`${apiBase}/products/products-tabs`);


</script>